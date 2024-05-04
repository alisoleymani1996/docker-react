import styles from './Auth.module.css';
import {useDispatch} from "react-redux";
import {authActions} from "../store/index";

const Auth = () => {

    const dispatch = useDispatch();

    const submitFormHandler = (e) => {
        e.preventDefault();
        dispatch(authActions.login())
    }
    return (
        <div className={styles['auth-container']}>
            <form className={styles['form-control']} onSubmit={submitFormHandler}>
                <div className={styles['username-control']}>
                    <label htmlFor={'username'}>username:</label>
                    <input id={'username'} type={'text'}/>
                </div>
                <div className={styles['password-control']}>
                    <label>password:</label>
                    <input type={'password'}/>
                </div>
                <button className={styles['btn-primary']} type={'submit'}>login</button>
            </form>
        </div>
    )
}

export default Auth;