import styles from './CounterStyle.module.css';
import {useSelector, useDispatch} from "react-redux";
import {counterActions} from "../store/index";


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state=> state.counter.counter);
    const showCounter = useSelector(state=> state.counter.show);

    const counterIncrementHandler = () => {
      dispatch(counterActions.increment())
    }
    const counterDecrementHandler = () => {
      dispatch(counterActions.decrement())
    }

    const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter())
    }

    const counterIncreaseHandler = () => {
      dispatch(counterActions.increase(10))
    }
  return(
      <div className={styles['container']}>
          {showCounter && <h2 className={styles['counter-number']}>{counter}</h2>}
          <div>
              <button className={styles['btn']} onClick={counterIncrementHandler}>increment</button>
              <button className={styles['btn']} onClick={counterIncreaseHandler}>increase</button>
              <button className={styles['btn']} onClick={counterDecrementHandler}>decrement</button>
          </div>
          <button className={styles['btn']} onClick={toggleCounterHandler}>toggle counter</button>
      </div>
  )
}

export default Counter;