import react from "react";
const style={
    color:""
}
let greet;
const date=new Date();
const hours=date.getHours();
function Heading2(){
 if(hours<12&&hours>0){
    greet ="Good Morning";
    style.color="red";
 }   
 else if(hours<18&&hours>12){
    greet ="Good Afternoon";
    style.color="green";
 }   
 else{
    greet ="Good night";
    style.color="blue";
 }
 return <h1 style={style}>{greet}</h1>;
}
export default Heading2;
