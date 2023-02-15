import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
       <div className={styles['nav-container']}>
            <span>Xhatar</span>
            <div className={styles.user}>
                <img src='https://images.pexels.com/photos/11534514/pexels-photo-11534514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="no"/>
                <span>John doe</span>
                <button>logout</button>
            </div>
      </div>

    );
}

export default Navbar;