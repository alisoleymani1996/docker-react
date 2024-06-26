import {useEffect, useState} from "react";

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
            const timer = setInterval(() => {
                if (forwards) {
                    setCounter(prevState => prevState + 1)
                } else {
                    setCounter(prevState => prevState - 1)
                }
            }, 1000)
            return () => clearInterval(timer)
        }
        , [forwards]);

    return counter;
}

export default useCounter;