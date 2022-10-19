import react from 'react';
function State(){
// const count = react.useState(10);
// return (<button>{count[0]}</button>) ;
const [count , setCount] = react.useState(10);
function increase(){
setCount(count+1);
}
function decrease(){
    setCount(count-1);
    }
return (<div>
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
</div>) ;
}
export default State;