import {Counter} from "../components/counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import React, { useState, useEffect } from 'react';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from '../store/reducers/reducersCounter';

function CounterContainer() {
    const count = useSelector(selectCount);

    const dispatch = useDispatch();
    // const [incrementAmount, setIncrementAmount] = useState('2');
    // 증가
    const onIncrement = () => {
        dispatch(increment());
    };
    return (
        <Counter increment={onIncrement} count={count}/>
    );
}

export default CounterContainer;
