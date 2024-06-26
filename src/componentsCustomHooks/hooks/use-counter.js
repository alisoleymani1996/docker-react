import {useEffect, useState} from "react";

export const useCounter = (forwards=true) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter(prevState => prevState + 1);
            } else {
                setCounter(prevState => prevState - 1);
            }

        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return counter
}
