import { useContext, useState } from "react";
import styles from "./Input.module.css";
import IMG from "../../assets/img/img.png";
import ATT from "../../assets/img/att.png";
import { ChatContext } from "../../store/chat-context";
import { arrayUnion, serverTimestamp, Timestamp } from "firebase/firestore";
import { AuthContext } from "../../store/auth-context";
import { v4 as uuid } from "uuid";
import { updateDoc, doc } from "firebase/firestore";
import { storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);
    const { data } = useContext(ChatContext);
    const { currentUser } = useContext(AuthContext);
    console.log(data.chatId);
    const handleSend = async () => {
        if(img){
            const storageRef = ref(storage, uuid());
            await uploadBytesResumable(storageRef, img).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    await updateDoc(doc(db, "chats", data.chatId), {
                        messages: arrayUnion({
                            id: uuid(),
                            text,
                            senderId: currentUser.uid,
                            date: Timestamp.now(),
                            img: downloadURL
                        })
                    });
                });
              });
        }
        else{
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now()
                })
            });
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId+".lastMessage"]:{
                text,
            },
            [data.chatId+".date"]:serverTimestamp()
        } );

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId+".lastMessage"]:{
                text,
            },
            [data.chatId+".date"]:serverTimestamp()
        } );

        setText("");
        setImg(null);
    }

    

    return (
        <div className={styles.input}>
            <input type="text" placeholder="Enter chat" 
            onChange={(e)=>{setText(e.target.value)}}
            value={text}    
            />
            <div className={styles['chat-items']}>
                <img src={ATT} alt="no im" className={styles.attach}/>          
                <input type="file" style={{display: "none" }} id="file" onChange={(e)=>{setImg(e.target.files[0])}}/>
                <label htmlFor="file">
                        <img src={IMG} alt="no im" />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default Input;