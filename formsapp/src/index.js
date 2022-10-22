import react ,{useEffect} from "react";
import reactDom from "react-dom";
import './index.css';
import App from "./components/App.jsx";
import axios from 'axios';
// useEffect(()=>{
// axios
// .get("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//    console.log(res); 
// })
// } ,[])
reactDom.render(
 <App /> 
,document.getElementById('root'));