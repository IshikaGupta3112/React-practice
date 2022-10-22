// import react from 'react';
// function App(){
//     const [userReg,setuserReg] = react.useState({
//         username:"",
//         email:"" , 
//         phone:"",
//         password:""
//     })

//     const [record , setRecord]= react.useState([]);

//     const [errors,setErrors]=react.useState({});

//     const[isSubmit , setIsSubmit]=react.useState(false);
//     function handleInput(event){
//     const name=event.target.name;
//     const value=event.target.value;
//     setuserReg({...userReg,[name]:value});  
//     }
//     function handleSubmit(event){
//         event.preventDefault();
//         const newRecord ={userReg};
//        setRecord([...record , newRecord]);
//        console.log(record);
//        setErrors(validate(userReg));
//        setIsSubmit(true);
//     }
//     // react.useEffect(()=>{
//     //     console.log(errors);
//     //     if(Object.keys(errors).length === 0 && isSubmit){
//     //         console.log(userReg);
//     //     }
//     // },[errors])
//     function validate(values){
//     const error={};
//     // const regex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$' ;
//     if(!values.username){
//      error.username ='Username is required!';   
//     }
//     if(!values.email){
//         error.email ='Email is required!';   
//        }
//     //    else if(!regex.test(values.email)){
//     //     error.email ='invalid mail!';   
//     //    }
//     if(!values.password){
//         error.password ='Password is required!';   
//        }
//        else if(values.password.length<4){
//         error.password ='Password must be more than 4 characters!';   
//        }
//        else if(values.password.length>8){
//         error.password ='Password cannot exceed 8 characters!';   
//        }
//     if(!values.phone){
//         error.phone ='Phone is required!';   
//        }
//        return error;
//     }
// return (<div id='container'>
//     <div id='heading'>
//         <h1>Registration Form</h1>
//     </div>
//     <div id='forms'>
//       {Object.keys(errors).length === 0 && isSubmit?( <div className='signed'>Signed in successfully!</div>):(null)}
//         <form action='' onSubmit={handleSubmit}>
//             <div id='labels'>
//             <div className='inputs'>
//             <label htmlFor="Username">Username</label>
//             <input 
//             type='text' name='username' id='username' placeholder='username'
//             value={userReg.username}
//             onChange={handleInput}>
//             </input>
//             </div>
//             <p>{errors.username}</p>
//             <div className='inputs'>
//             <label htmlFor="email">Email</label>
//             <input 
//             type='email' name='email' id='email' placeholder='email'
//             value={userReg.email}
//             onChange={handleInput}>
//             </input>
//             </div>
//             <p>{errors.email}</p>
//             <div className='inputs'>
//             <label htmlFor="phone">Phone No.</label>
//             <input 
//             type='text' name='phone' id='phone' placeholder='phone'
//             value={userReg.phone}
//             onChange={handleInput}>
//             </input>
//             </div>
//             <p>{errors.phone}</p>
//             <div className='inputs'>
//             <label htmlFor="password">Password</label>
//             <input 
//             type='password' name='password' id='password' placeholder='password'
//             value={userReg.password}
//             onChange={handleInput}>
//             </input>
//             </div>
//             <p>{errors.password}</p>
//             <button type='submit'>Register</button>
//             </div>
//         </form>
//     </div>
// </div>
// );
// }
// export default App;

import react ,{useEffect , useState} from 'react'
import axios from 'axios';
function App(){
const [data , setData] = useState([]);
useEffect(()=>{
axios
.get("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
    console.log(res.data);
    setData(res.data);
})
} , [])
return(
    <>
    {data.map((post)=>{
    const {id , title , body} =post;
    return(<div key={id}>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>)
    })}
    </>
);

}
export default App;