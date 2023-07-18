import {useSelector , useDispatch} from 'react-redux';
import PostAuthor from './postAuthor';
import TimeAgo from './TimeAgo';

const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state)=>state.posts);
    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map((post)=>(
        <article key={post.id}> 
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p><PostAuthor userId={post.userId}/></p>
            <TimeAgo timestamp={post.date}/>
        </article>
    ));
    return(<>
    <div>
    <h2>Posts</h2>
    {renderedPosts}
    </div>
    </>)
}

export default Post;