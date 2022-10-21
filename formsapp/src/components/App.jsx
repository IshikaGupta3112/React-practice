import react from 'react';
function App(){
    const [userReg,setuserReg] = react.useState({
        username:"",
        email:"" , 
        phone:"",
        password:""
    })
    const [record , setRecord]= react.useState([]);
    function handleInput(event){
    const name=event.target.name;
    const value=event.target.value;
    setuserReg({...userReg,[name]:value});
    }
    function handleSubmit(event){
        event.preventDefault();
        const newRecord ={userReg};
       setRecord([...record , newRecord]);
       console.log(record);
    }
return (<div id='container'>
    <div id='heading'>
        <h1>Registration Form</h1>
    </div>
    <div id='forms'>
        <form action='' onSubmit={handleSubmit}>
            <div id='labels'>
            <div className='inputs'>
            <label htmlFor="Username">Username</label>
            <input 
            type='text' name='username' id='username' placeholder='username'
            value={userReg.username}
            onChange={handleInput}>
            </input>
            </div>
            <div className='inputs'>
            <label htmlFor="email">Email</label>
            <input 
            type='email' name='email' id='email' placeholder='email'
            value={userReg.email}
            onChange={handleInput}>
            </input>
            </div>
            <div className='inputs'>
            <label htmlFor="phone">Phone No.</label>
            <input 
            type='text' name='phone' id='phone' placeholder='phone'
            value={userReg.phone}
            onChange={handleInput}>
            </input>
            </div>
            <div className='inputs'>
            <label htmlFor="password">Password</label>
            <input 
            type='password' name='password' id='password' placeholder='password'
            value={userReg.password}
            onChange={handleInput}>
            </input>
            </div>
            <button type='submit'>Register</button>
            </div>
        </form>
    </div>
</div>
);
}
export default App;