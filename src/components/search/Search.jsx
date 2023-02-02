import styles from './Search.module.css';

const Search = () => {
    return (
        <div className={styles.search}>
            <div className={styles.searchForm}>
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className={styles.userchat}>
                <img src="https://images.pexels.com/photos/11534514/pexels-photo-11534514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Profile pic"/>
                <span>Jane</span>
            </div>
        </div>
    );
}

export default Search;