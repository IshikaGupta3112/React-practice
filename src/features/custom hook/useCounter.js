import { useState } from "react";

const useCounter = () => {
    const [count , setCount] = useState(0);

function handleIncrement(){
    setCount((prevCount)=>prevCount+1);
}

function handleDecrement(){
    setCount((prevCount)=>prevCount-1);
}
  return {count , handleIncrement , handleDecrement}
}

export default useCounter
