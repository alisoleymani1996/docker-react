import ExpenseDate from "./ExpenseDate";
import styles from './ExpenseItem.module.css'
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    return (
        <Card className={styles['item-container']}>
            <ExpenseDate expenseDate={props.expenseData.date}/>
            <div className={styles['item-info']}>
                <h3>{props.expenseData.title}</h3>
                <div className={styles['item-amount']}><span>$</span>{props.expenseData.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;