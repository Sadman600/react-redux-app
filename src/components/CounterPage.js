import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { increment, decrement } from '../redux/features/counter/counterSlice';
const CounterPage = () => {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Hello Prime React Redux</h1>
            <Button onClick={() => dispatch(increment())} label="+" className="p-button-success" />
            <h2>{count}</h2>
            <Button onClick={() => dispatch(decrement())} label="-" className="p-button-danger" />
        </div>
    );
};

export default CounterPage;