import react from "react";
function Time(){
const now=new Date().toLocaleTimeString();
const [time,setTime] = react.useState(now);
function updates(){
    const newTime=new Date().toLocaleTimeString();
    setTime(newTime);  
}
    return(
    <div>
<h1>{time}</h1>
<button onClick={updates}>Get time</button>
</div>
    );
}
export default Time;