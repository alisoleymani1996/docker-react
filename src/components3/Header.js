import styles from "./Header.module.css";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store";

const Header = () => {
    const authStatus = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(authActions.logout())
    }

    return (
        <div className={styles['header-container']}>
            <div className={styles['header-logo']}>
                <h1>React Redux pure</h1>
            </div>
            <div className={styles['header-items__container']}>
                {authStatus && (
                    <ul>
                        <li>about us</li>
                        <li>products</li>
                        <li>
                            <button onClick={logoutHandler}>logout</button>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Header;