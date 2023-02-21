import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState, useContext } from 'react';
import Message from "../message/Message";
import styles from "./Messages.module.css";
import { ChatContext } from '../../store/chat-context';
import { db } from '../../firebase';

const Messages = () => {
    const [messages, setMessages] = useState();
    const { data } = useContext(ChatContext);
    useEffect(()=>{
        const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc)=>{
            doc.exists() && setMessages(doc.data().messages);
        });

        return ()=>{
            unsub();
        }
    }, [data.chatId]);

    return (
        <div className={styles.messages}>
            {
                messages.map((m)=><Message message={m}/>)
            }
        </div>
    );
}

export default Messages;