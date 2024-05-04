import styles from './button.module.css';


const Button = (props) => {

    return (
        <button type={props.type} className={`${styles['button']} ${props.className}`}>{props.children}</button>
    )
}

export default Button;