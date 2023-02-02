import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import Chats from "../chats/Chats";
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
       <div className={styles.sidebar}>
            <Navbar />
            <Search />
            <Chats />
       </div>
    );
}

export default Sidebar;