import {createStore} from 'redux';
import {configureStore, createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth', initialState: {isAuthenticated: false},
    reducers: {
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        },
    }
})

const counterSlice = createSlice({
    name: 'counter', initialState: {counter: 0, show: true},
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        toggleCounter(state){
            state.show = !state.show
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        }
    },
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
})

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

// const counterReducerFn = (state = {counter: 0, show: true}, action) => {
//
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             show: state.show,
//         }
//     }
//
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             show: state.show,
//         }
//     }
//     if (action.type === 'toggleCounter') {
//         return {
//             counter: state.counter,
//             show: !state.show,
//         }
//     }
//     return state
// }
//
// const store = createStore(counterReducerFn)
export default store;


// import {configureStore, createSlice} from '@reduxjs/toolkit';
//
//
// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {isAuthenticated: false},
//     reducers: {
//         login(state) {
//             state.isAuthenticated = true
//         },
//         logout(state) {
//             state.isAuthenticated = false
//         },
//     }
// })
//
//
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {counter: 0, showCounter: false},
//     reducers: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increase(state, action) {
//             state.counter = state.counter + action.payload
//         },
//         toggle(state) {
//             state.showCounter = !state.showCounter
//         }
//     }
// })
//
// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer,
//         auth: authSlice.reducer,
//     }
// })
//
// export const authActions = authSlice.actions;
// export const counterActions = counterSlice.actions;
// export default store;


//
// const initialCounterState = {counter: 0, showCounter: false}
//
// const counterReducer = (state = initialCounterState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         }
//     }
//
//     return state;
// }
//
// const store = createStore(counterReducer)
//
// export default store;