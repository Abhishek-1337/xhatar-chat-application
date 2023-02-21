import {useState, useEffect, useContext} from "react";
import styles1 from './Chats.module.css';
import styles2 from '../search/Search.module.css';
import { AuthContext } from '../../store/auth-context';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { ChatContext } from "../../store/chat-context";

const Chats = () => {
    const { currentUser } = useContext(AuthContext);
    const [chat, setChat] = useState();
    const { dispatch } = useContext(ChatContext);
    
    useEffect(()=>{
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChat(doc.data());
            });
            
            return ()=>{
                unsub();
            };
        }   
        currentUser.uid && getChats();
    }, [currentUser.uid]);

    const handleSelect = (u) => {
        dispatch({type: "CHANGE_USER", payload: u});
    }

    return (
       <div className={styles1.chats}>
       {
        chat && Object.entries(chat).map((chatters)=>{
            
            return (
                <div className={styles2.userchat} key={chatters[0]} onClick={()=>{handleSelect(chatters[1].userInfo)}}>
                <img src={chatters[1].userInfo.photoURL} alt="Profile pic"/>
                <div className={styles1.display}>
                    <span>{chatters[1].userInfo.displayName}</span>
                    <p>Hello</p>
                </div>                
            </div>
            );
        })
       }       
       </div>
    );
}

export default Chats;