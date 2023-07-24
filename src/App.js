import React from 'react';
import Counter from './features/counter/counter';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Post from './features/posts/post';
import AddPostForm from './features/posts/addPostForm';
import Home from './features/LazyLoad/Home';
// import About from './features/LazyLoad/About';

const LazyAbout = React.lazy(()=>import('./features/LazyLoad/About'));

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/posts' exact element={<><AddPostForm/>
     <Post/></>}></Route>
     <Route path='/counter' exact element={<Counter />}></Route>
     <Route path='/' exact element={<Home />}></Route>
     <Route path='/about' exact element={
     <React.Suspense fallback={<div>Loading...</div>}>
     <LazyAbout />
     </React.Suspense>}></Route>
     {/* <Route path='/about' exact element={<About />}></Route> */}
      </Routes>
      </Router>   
   </>
  );
}

export default App;
