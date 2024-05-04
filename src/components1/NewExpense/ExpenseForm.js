import styles from './ExpenseForm.module.css';
import {useState} from "react";


const ExpenseForm = (props) => {

    const [titleEntered, setTitleEntered] = useState('');
    const [amountEntered, setAmountEntered] = useState('');
    const [dateEntered, setDateEntered] = useState('');


    const titleChangeHandler = (e) => {
        setTitleEntered(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setAmountEntered(e.target.value);
    }

    const dateChangeHandler = (e) => {

        setDateEntered(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();

        const newExpenseEnteredData = {
            title: titleEntered, amount: amountEntered, date: new Date(dateEntered), id: Math.floor(Math.random()*100)
        }

        props.onSaveExpense(newExpenseEnteredData);

        setTitleEntered('');
        setAmountEntered('');
        setDateEntered('');
    }

    return (
        <div>
            <form>
                <div className={styles['form-input--container']}>
                    <div className={styles['form-item--container']}>
                        <label className={styles['form-label']}>Title</label>
                        <input className={styles['form-input']} type={"text"} onChange={titleChangeHandler} value={titleEntered}/>
                    </div>
                    <div className={styles['form-item--container']}>
                        <label className={styles['form-label']}>Amount</label>
                        <input className={styles['form-input']} type={"number"} onChange={amountChangeHandler} value={amountEntered}/>
                    </div>
                    <div className={styles['form-item--container']}>
                        <label className={styles['form-label']}>Date</label>
                        <input className={styles['form-input']} type={"date"} onChange={dateChangeHandler} value={dateEntered}/>
                    </div>

                </div>
                <div className={styles['form-button--container']}>
                    <button className={styles['form-button']} onClick={props.hideForm}>Cancel</button>
                    <button className={styles['form-button']} type={"submit"} onClick={submitForm}>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;