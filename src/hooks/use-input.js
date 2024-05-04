import React, {useState} from "react";

const useInput = (validateData) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [inputTouched, setInputTouched] = useState(false);

    const inputValidityCheck = validateData(enteredValue);
    const hasError = !inputValidityCheck && inputTouched;

    const inputChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const inputBlurHandler = () => {
        setInputTouched(true)
    }

    const reset = () => {
        setEnteredValue('');
        setInputTouched(false);
    }

    return {
        isValid: inputValidityCheck,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset,
    }
}

export default useInput;