import { useState } from "react"

export const useCounter = (initialState = 1) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(counter => counter + 1);
    }

    const decrement = () => {
        setCounter(counter => counter - 1);
    }

    return [counter, setCounter, increment, decrement];
}