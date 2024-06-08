import { useState } from 'react';
import styles from './login.module.css';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = async()=>{
        try {
            await createUserWithEmailAndPassword(auth, email, password);      
            navigate('/game');
        } catch (error) {
            console.log(error)
        }
    };
    const signInGoogle = async()=>{
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/game');
        } catch (error) {
            console.log(error)
        }
    };
  return (
    <div className={styles.containerLogin}>
    <h3> Bienvenidos a Argentopolis!</h3>
    <input
        className={styles.input}
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
    />
    <input
        className={styles.input}
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
        type="password"
    />
    <button
        className={styles.button}
        onClick={signIn}
    >
        Sign In
    </button>
    <button
        className={`${styles.button} ${styles.buttonGoogle}`}
        onClick={signInGoogle}
    >
        Google
    </button>
</div>
  )
}

export default Login;