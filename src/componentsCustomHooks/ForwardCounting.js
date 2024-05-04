import {useEffect, useState} from "react";
import {useCounter} from "./hooks/use-counter";

const ForwardCounting = (props) => {

    const counter = useCounter();

    return (
        <div>
            <p>{counter}</p>
        </div>
    )
}

export default ForwardCounting;