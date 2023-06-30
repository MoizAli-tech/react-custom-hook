import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    let [state, setState] = useState(initialValue);
    let [color, setColor] = useState("FF5733");
    let c, sum;
    function increment() {
        setState(state + 1);
    }

    function decrement() {
        setState(state - 1);
    }

    return [state, decrement, increment]


}