import ExpenseItem from "../ExpenseItem/ExpenseItem";
import styles from './Expenses.module.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import {useState} from "react";


const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState(2019)

    const filterDataHandler = (selectedYear) => {
        setSelectedYear(selectedYear)
    }
    const filteredExpenses = props.expenses.filter(rec => rec.date.getFullYear() === Number(selectedYear))

    const totalAmountSpend = filteredExpenses.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount
    }, 0.0000000001)

    return (
        <Card className={styles['expenses']}>
            <ExpenseFilter selectYedFilterYear={filterDataHandler}/>
            <ExpenseChart totalAmount={totalAmountSpend} filteredItems={filteredExpenses}/>
            {filteredExpenses.map((expense) => {
                return (
                    <div key={expense.id}>
                        <ExpenseItem expenseData={expense}/>
                    </div>
                )

            })}
        </Card>
    )
}

export default Expenses;