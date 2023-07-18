import Counter from './features/counter/counter';
import './App.css';
import Post from './features/posts/post';
import AddPostForm from './features/posts/addPostForm';

function App() {
  return (
   <>
   {/* <Counter/> */}
   <AddPostForm/>
   <Post/>
   </>
  );
}

export default App;
