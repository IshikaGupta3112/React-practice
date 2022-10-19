import react from 'react';
function strike(){
    document.getElementById('root').style.textDecoration='line-through';
}
function unstrike(){
    document.getElementById('root').style.textDecoration=null;
}
function Text(){
   return( <>
   <button onClick={strike}>change style</button>
   <button onClick={unstrike}>change back</button>
   <p>buy milk</p>
   </>);
}
export default Text;