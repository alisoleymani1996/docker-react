import {useSelector, useDispatch} from "react-redux";
import classes from './Counter.module.css';
import {counterActions} from "../store";


const Counter = () => {

    const counter = useSelector(state=> state.counter.counter)
    const showCounter = useSelector(state=> state.counter.showCounter)
    const dispatch = useDispatch()

    const toggleCounterHandler = () => {
        // dispatch({type: 'toggle'})
        dispatch(counterActions.toggle())
    };

    const incrementCounterHandler = () => {
        // dispatch({type: 'increment'})
        dispatch(counterActions.increment())
    }

    const decrementCounterHandler = () => {
        // dispatch({type: 'decrement'})
        dispatch(counterActions.decrement())
    }

    const increaseCounterHandler = () => {
      dispatch(counterActions.increase(5))
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {!showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementCounterHandler}>Increment</button>
                <button onClick={decrementCounterHandler}>Decrement</button>
            </div>
            <button onClick={increaseCounterHandler}>Increase</button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
