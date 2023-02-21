import { useContext, useRef, useEffect} from "react";
import { AuthContext } from "../../store/auth-context";
import { ChatContext } from "../../store/chat-context";
import styles from "./Message.module.css";

const Message = (props) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();
    useEffect(()=>{
        ref.current?.scrollIntoView({behavior: "smooth"})
    }, [props.message])
    console.log(props);
    return (
        <div className={`${styles.message} ${props.message.senderId === currentUser.uid && styles.owner}`} ref={ref}>   
            <div className={styles.messageInfo}>
                <img src={props.message.senderId === currentUser.uid ? currentUser.photoURL: data.user.photoURL} alt="img"/>
                <span>Just now</span>
            </div>
            <div className={styles.messageContent}>
                {props.message.text && <p>{props.message.text}</p>}
                {props.message.img && <img src={props.message?.img} alt="img"/>}
            </div>
        </div>
    );
}

export default Message;