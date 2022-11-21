import React,{useContext,useState} from 'react'
import came from '../image/camera-2.png'
import attach from "../image/attach.png"
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function Input() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handlesend = async () =>{
    
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
      }else{
      await updateDoc(doc(db,"chats",data.chatId),{
        messages:arrayUnion({
            id:uuid(),
            text,
            senderId:currentUser.uid,
            date:Timestamp.now(),
        })
      })
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
 setTimeout(() => {
   
  setText("")
}, 0);
setImg(null)

  }
  return (
   <>
   <div className="input">
    <input type="text" name="" placeholder='Type something...' id="" onChange={e=>setText(e.target.value)}
    value={text}
    />
    <div className="send">
    <label htmlFor="file" style={{display:"flex"}}  >
    <img src={attach} alt="" />
     <input type="file" name="" style={{display:"none"}} id="file" onChange={(e) => setImg(e.target.files[0])} />
    
     <img src={came} alt="" /> 
     </label>
     <button onClick={handlesend}> Send </button>
    </div>
   </div>
   </>
  )
}
