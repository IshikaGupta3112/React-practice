import { useState } from "react";
import useCounter from "./useCounter";

function Counter2(){

const {count , handleIncrement , handleDecrement} = useCounter();
return(<>
<p>{count}</p>
<button onClick={handleIncrement}>Increment</button>
<button onClick={handleDecrement}>Decrement</button>
</>)
}

export default Counter2;