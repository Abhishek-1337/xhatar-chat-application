import styles from "./Message.module.css";

const Message = () => {
    return (
        <div className={styles.message}>   
            <div className={styles.messageInfo}>
                <img src="https://images.pexels.com/photos/11534514/pexels-photo-11534514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img"/>
                <span>Just now</span>
            </div>
            <div className={styles.messageContent}>
                <p>Hello</p>
            </div>
        </div>
    );
}

export default Message;