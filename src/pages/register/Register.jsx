import styles from './Register.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Add from "../../assets/img/user.png";
import {useNavigate} from "react-router-dom";


const Register = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res.user.uid);
            const storageRef = ref(storage, displayName);
            // const uploadTask = await uploadBytesResumable(storageRef, file);
            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                  try {
                    //Update profile
                    await updateProfile(res.user, {
                      displayName,
                      photoURL: downloadURL,
                    });
                    //create user on firestore
                    await setDoc(doc(db, "users", res.user.uid), {
                      uid: res.user.uid,
                      displayName,
                      email,
                      photoURL: downloadURL,
                    });
                
                    //create empty user chats on firestore
                    await setDoc(doc(db, "userChats", res.user.uid), {});
                    navigate("/");
                    // navigate("/");
                  } catch (err) {
                    console.log(err);
                    setErr(true);
                    // setLoading(false);
                  }
                });
              });
            } catch (err) {
              setErr(true);
            //   setLoading(false);
            } 
    }

    return (
        <div className={styles['form-container']}>
            <div className={styles['form-wrapper']}>
                <span className={styles.logo}>Xhatar</span>
                <span className={styles.title}>Sign-up</span>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="username"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button type="submit" className="btn">Sign up</button>
                </form>
                {err && <span>Something went wrong</span>}
                <p>
                    Already have an account? <Link to="/login" className={styles.title}>Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;