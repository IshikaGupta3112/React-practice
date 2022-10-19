import react from 'react';
import './Entry.css';
function Entry(props){
    return (
        <>
        <div className='term'>
            <dt>
                <span id='emoji'>{props.emoji}</span>
                <span><h1>{props.name}</h1></span>
            </dt>
            <dd>
            {props.des}
            </dd>
        </div>
        </>
    );
} 
export default Entry;