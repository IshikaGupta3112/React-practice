import {useSelector , useDispatch} from 'react-redux';
import {increment, decrement , reset , increementByAmount} from './counterSlice';
import { useState } from 'react';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount,setIncrementAmount]=useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }
    return (
        <div>
           <p>{count}</p>
           <button onClick={()=>dispatch(increment())}>+</button>
           <button onClick={()=>dispatch(decrement())}>-</button>
           <button onClick={resetAll}>Rst</button>
           <input type="number" value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}/>
           <button onClick={()=>dispatch(increementByAmount(addValue))}>Add</button>
        </div>
    )
}

export default Counter;