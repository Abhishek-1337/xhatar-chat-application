import { useContext } from "react";
import styles from "./Chat.module.css";
import Cam from "../../assets/img/cam.png";
import Add from "../../assets/img/add.png";
import More from "../../assets/img/more.png";
import Messages from "../messages/Messages";
import Input from "../input/Input";
import { ChatContext } from "../../store/chat-context";

const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
       <div className={styles.chat}>
        <div className={styles['chat-info']}>
            <span>{data.user.displayName}</span>
            <div className={styles['chat-options']}>
                <img src={Cam} alt=""/>
                <img src={Add} alt=""/>
                <img src={More} alt=""/>
            </div>
        </div>
        <Messages />
        <Input />
       </div>
    );
}

export default Chat;