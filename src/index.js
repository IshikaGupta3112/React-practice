import react from "react";
import reactDom from "react-dom";
import "./index.css";
import "./Entry.css";
import Entry from './Entry.jsx';
import emojipedia from "./emojipedia.js";
// import * as pi from "./Math.jsx";
// import * as calc from "./Calculator.jsx";
// import Card from './Card.jsx';
// import contacts from "./contacts.js";
// import Heading from "./Heading.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function createEmoji(emojipedia){
  return(<Entry
  key={emojipedia.id}
  emoji={emojipedia.emoji}
  name={emojipedia.name}
  des={emojipedia.des}
  />);
}

// filter function 

var num=[1 , 2 , 4 , 5 , 9 , 13];

// 1 way

// function numbers(num){
//   return num>10;
//   }
// const newn=num.filter(numbers);
// console.log(newn);


// another way

const newn=num.filter(function(num){
  return num>10;
  });
console.log(newn);


// function createCard(contacts){
//   return (<Card 
//     key={contacts.id}
//   name ={contacts.name}
//   tel={contacts.tel}
//   email={contacts.email}
//   img={contacts.img}
//   />);
// }
// const fname="Ishika";
// const lname="Gupta";
// const num =6;
// const date=new Date();
// const hour =date.getHours();
// let greet;
// const styles={
//   color:""
// }
// if(hour>0&&hour<12){
// greet ="Good Morning";
// styles.color="red";
// }
// else if(hour>12&&hour<18){
//   greet="Good Afternoon";
//   styles.color="green";
// }
// else{
//   greet="Good night";
//   styles.color="blue";
// }
// const year = date.getFullYear();
// const img ="https://picsum.photos/200";
// const style={color:"red",fontSize:"20px"};
// style.color="blue";

// reactDom.render(
  // <div className="emojis">
  // {emojipedia.map(createEmoji)};
  // </div>
// {/* <Router>
//   <div>
  
//   <h1 className='heading' contentEditable='true'>Hello {fname+" "+lname}!</h1>
//   <h1>Hello {fname} {lname}!</h1>
//  <h1>Hello {`${fname} ${lname}`}!</h1>
//  <p>Your lucky number is {num}</p>
//  <p>It may also be {10+2}</p>
// <p>Also by random {Math.floor(Math.random()*10)}</p>
// <p>Copyright {year}</p>
//   {calc.add(3,4)}<br />
//   {calc.sub(3,4)}<br />
//   {calc.multiply(3,4)}<br />
//   {calc.div(3,4)}
//   <h1 style={{color:"red",fontSize:"20px"}}>My Favourite Food</h1>
//   <h1 style={style}>My Favourite Food</h1>
//   <h1 style={styles}>{greet}</h1>
//   <ul>
//     <li><img src="https://polkapuffs.in/wp-content/uploads/2015/07/Mumbai-Pav-Bhaji-final-3.jpeg" alt=""/></li>
//     <li><img src="https://static.toiimg.com/photo/76045977.cms" alt=""/></li>
//     <li><img src="https://hirasweets.com/wp-content/uploads/2020/06/Tandoori-Soya-Chaap-3.jpg" alt=""/></li>
//     <li><img src={img + "?grayscale"} alt=""/></li>
//     </ul>
//     {pi.default}<br />
// {pi.doublepi()}<br />
// {pi.triplepi()}
// <h1>Props uses</h1>
// {contacts.map(createCard)};
// {/* <Card 
// name ={contacts[0].name}
// tel={contacts[0].tel}
// email={contacts[0].email}
// img={contacts[0].img}
// />
// <Card 
// name ={contacts[1].name}
// tel={contacts[1].tel}
// email={contacts[1].email}
// img={contacts[1].img}
// />
// <Card 
// name ={contacts[2].name}
// tel={contacts[2].tel}
// email={contacts[2].email}
// img={contacts[2].img}
// /> */}

// <Routes>
//           <Route path="/card" element={<Card 
// name ={contacts[0].name}
// tel={contacts[0].tel}
// email={contacts[0].email}
// img={contacts[0].img}
// />} />
//           <Route path="/" element={<Heading />} />
//         </Routes>
//         <Link to="/card">Show card</Link>
// {/* <Card name="Pearl V Puri" tel="9897666545" email="pearlvpuri@gmail.com" img="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-81409651/81409651.jpg"/>
// <Card name="Arijit Singh" tel="123456" email="arijitsng@gmail.com" img="https://m.media-amazon.com/images/M/MV5BMTNmMTQ2YzMtYzU0MS00NTI2LTk3MTgtOTI5MDgyNDc3ZDFkXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"/>
// <Card name="Siddhart Shukla" tel="123456789" email="sidshuk@gmail.com" img="https://pbs.twimg.com/profile_images/1313071873375326208/EzR9z1P8_400x400.jpg"/> */}
// </div>
// </Router> */}
// ,document.getElementById('root'));