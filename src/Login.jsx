import react from 'react';
import './Login.css';
import Form from './Form.jsx';
var islogged = true;
// function cond(){
//     if(islogged===true){
//         return (<h1>Hello user!</h1>);
//     }
//     else{
//         return (<Form />);
//     }
// }
function Login(){
    return (<div classNmae='forms'>
        {/* ternary operator */}
        {(islogged===true)? (<h1>Hello user!</h1>):(<Form />)}
    </div>);
}
export default Login;