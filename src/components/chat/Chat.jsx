import styles from "./Chat.module.css";
import Cam from "../../assets/img/cam.png";
import Add from "../../assets/img/add.png";
import More from "../../assets/img/more.png";
import Messages from "../messages/Messages";
import Input from "../input/Input";

const Chat = () => {
    return (
       <div className={styles.chat}>
        <div className={styles['chat-info']}>
            <span>Jane</span>
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