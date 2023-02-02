import Message from "../message/Message";
import styles from "./Messages.module.css";

const Messages = () => {
    return (
        <div className={styles.messages}>
            <Message />
            <Message />
            <Message />
        </div>
    );
}

export default Messages;