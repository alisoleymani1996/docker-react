import styles from './ExpenseDate.module.css';


const ExpenseDate = (props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['month-style']}>{props.expenseDate.toLocaleString('en-US', {month: 'long'})}</div>
            <div className={styles['day-style']}>{props.expenseDate.getDate()}</div>
            <div className={styles['year-style']}>{props.expenseDate.getFullYear()}</div>
        </div>
    )
}

export default ExpenseDate;