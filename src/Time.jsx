import react from "react";
function Time(){
    setInterval(updates , 1000);
const now=new Date().toLocaleTimeString();
const [time,setTime] = react.useState(now);
function updates(){
    const newTime=new Date().toLocaleTimeString();
    setTime(newTime);  
}
    return(
    <div>
<h1>{time}</h1>
{/* <button onClick={updates}>Get time</button> */}
</div>
    );
}
export default Time;