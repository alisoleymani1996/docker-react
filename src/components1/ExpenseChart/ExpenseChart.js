import styles from './ExpenseChart.module.css';
import Card from "../UI/Card";
import Chart from "./Chart";


const ExpenseChart = (props) => {


    const dataForEachMonth = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]


        for (let datapoint of props.filteredItems) {
            const monthIndex = datapoint.date.getMonth()
            dataForEachMonth[monthIndex].value = datapoint.amount;
        }


        return (
            <Card className={styles['container']}>
                {dataForEachMonth.map((eachMonth) => <Chart key={eachMonth.label} label={eachMonth.label}
                                                            value={eachMonth.value} totalValue={props.totalAmount}/>)}
            </Card>
        )
    }

    export default ExpenseChart;