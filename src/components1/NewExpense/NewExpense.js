import {useState} from "react";
import styles from './NewExpense.module.css';
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {

    const [addExpenseStatus, setAddExpenseStatus] = useState(false);

    const showExpenseForm = () => {
        setAddExpenseStatus(true);
    }

    const hideExpenseForm = () => {
      setAddExpenseStatus(false);
    }

    const newDataEntered = (data) => {
        console.log(data)
        props.onNewExpense(data)
    }


    return (
        <Card className={styles['container']}>

            {!addExpenseStatus &&
                <button className={styles['add-expense--btn']} onClick={showExpenseForm}>Add New Expense</button>}
            {addExpenseStatus && <ExpenseForm hideForm={hideExpenseForm} onSaveExpense={newDataEntered}/>}
        </Card>
    )
}

export default NewExpense;