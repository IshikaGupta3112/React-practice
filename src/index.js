import react from "react";
import reactDom from "react-dom";
import "./index.css";
import * as pi from "./Math.jsx";
import * as calc from "./Calculator.jsx";

const fname="Ishika";
const lname="Gupta";
const num =6;
const date=new Date();
const hour =date.getHours();
let greet;
const styles={
  color:""
}
if(hour>0&&hour<12){
greet ="Good Morning";
styles.color="red";
}
else if(hour>12&&hour<18){
  greet="Good Afternoon";
  styles.color="green";
}
else{
  greet="Good night";
  styles.color="blue";
}
const year = date.getFullYear();
const img ="https://picsum.photos/200";
const style={color:"red",fontSize:"20px"};
style.color="blue";

reactDom.render(<div>
  <h1 className='heading' contentEditable='true'>Hello {fname+" "+lname}!</h1>
  <h1>Hello {fname} {lname}!</h1>
 <h1>Hello {`${fname} ${lname}`}!</h1>
 <p>Your lucky number is {num}</p>
 <p>It may also be {10+2}</p>
<p>Also by random {Math.floor(Math.random()*10)}</p>
<p>Copyright {year}</p>
  {calc.add(3,4)}<br />
  {calc.sub(3,4)}<br />
  {calc.multiply(3,4)}<br />
  {calc.div(3,4)}
  <h1 style={{color:"red",fontSize:"20px"}}>My Favourite Food</h1>
  <h1 style={style}>My Favourite Food</h1>
  <h1 style={styles}>{greet}</h1>
  <ul>
    <li><img src="https://polkapuffs.in/wp-content/uploads/2015/07/Mumbai-Pav-Bhaji-final-3.jpeg" alt=""/></li>
    <li><img src="https://static.toiimg.com/photo/76045977.cms" alt=""/></li>
    <li><img src="https://hirasweets.com/wp-content/uploads/2020/06/Tandoori-Soya-Chaap-3.jpg" alt=""/></li>
    <li><img src={img + "?grayscale"} alt=""/></li>
    </ul>
    {pi.default}<br />
{pi.doublepi()}<br />
{pi.triplepi()}
</div>,document.getElementById('root'));