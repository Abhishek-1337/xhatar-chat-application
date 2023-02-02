import styles from "./Input.module.css";
import IMG from "../../assets/img/img.png";
import ATT from "../../assets/img/att.png";

const Input = () => {
    return (
        <div className={styles.input}>
            <input type="text" placeholder="Enter chat"/>
            <div className={styles['chat-items']}>
                <img src={ATT} alt="no im" className={styles.attach}/>
                <img src={IMG} alt="no im"/>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Input;