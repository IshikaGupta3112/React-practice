import react from 'react';
import "./index.css";
import Avatar from "./Avatar.jsx";
import Detail from "./Detail.jsx";
function Card(props){
    return <div>
        <div className="upper">
        <h1 className="celeb">{props.name}</h1>
       <Avatar img={props.img}/> 
        </div>
        <div className="lower">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
        </div>
    </div>;
}
export default Card;