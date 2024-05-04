import styles from "./Chart.module.css";

const Chart = (props) => {


    const barFillHeight = (props.value / props.totalValue) * 100 + '%'

    console.log(barFillHeight)

    return (
        <div className={styles['bar-div']}>
            <div className={styles['bar']}>
                <div style={{
                    height: barFillHeight,
                    backgroundColor: 'magenta',
                    borderRadius: '9px',
                    transition: 'all 0.3s'
                }}></div>
            </div>
            <span>{props.label}</span>
        </div>
    )

}

export default Chart;