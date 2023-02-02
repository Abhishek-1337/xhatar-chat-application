import Chat from "../../components/chat/Chat";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}

export default Home;