import { useContext } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../store/auth-context";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
       <div className={styles['nav-container']}>
            <span class={styles.logoi}>Xhatar</span>
            <div className={styles.user}>
                <img src={currentUser.photoURL} alt="no"/>
                <span>{currentUser.displayName}</span>
                <button onClick={()=>{signOut(auth)}}>logout</button>
            </div>
      </div>

    );
}

export default Navbar;