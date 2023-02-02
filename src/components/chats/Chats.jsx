import styles1 from './Chats.module.css';
import styles2 from '../search/Search.module.css';

const Chats = () => {
    return (
       <div className={styles1.chats}>
            <div className={styles2.userchat}>
                <img src="https://images.pexels.com/photos/11534514/pexels-photo-11534514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Profile pic"/>
                <div className={styles1.display}>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>                
            </div>
            <div className={styles2.userchat}>
                <img src="https://images.pexels.com/photos/11534514/pexels-photo-11534514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Profile pic"/>
                <div className={styles1.display}>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>                
            </div>
            <div className={styles2.userchat}>
                <img src="https://images.pexels.com/photos/11534514/pexels-photo-11534514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Profile pic"/>
                <div className={styles1.display}>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>                
            </div>
       </div>
    );
}

export default Chats;