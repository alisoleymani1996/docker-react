import {useEffect, useState} from "react";
import {useCounter} from "./hooks/use-counter";

const DownwardCounting = (props) => {
    const counter = useCounter(false)
    return (
        <div>
            <p>{counter}</p>
        </div>
    )
}

export default DownwardCounting;