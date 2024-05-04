import styles from './ExpenseFilter.module.css'

const ExpenseFilter = (props) => {


    const filterYearHandler = (e) => {
        const filterYear = e.target.value;
        props.selectYedFilterYear(filterYear);
    }

    return (
        <div className={styles['container']}>
            <p className={styles['heading-tertiary']}>Filter by year</p>
            <select className={styles['year-dropdown']} onChange={filterYearHandler}>
                <option className={styles['year-option']} value={2019}>2019</option>
                <option className={styles['year-option']} value={2020}>2020</option>
                <option className={styles['year-option']} value={2021}>2021</option>
                <option className={styles['year-option']} value={2022}>2022</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;