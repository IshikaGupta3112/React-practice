import {useSelector , useDispatch} from 'react-redux';
import PostAuthor from './postAuthor';
import TimeAgo from './TimeAgo';
import { fetchPosts ,getPostError , getPostStatus , selectAllPosts} from './postsSlice';
import { useEffect } from 'react';
import PostExcrept from './postExcerpt';

const Post = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostStatus);
    const postsError = useSelector(getPostError);

    // for no api

    // const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));

    // const renderedPosts = orderedPosts.map((post)=>(
    //     <article key={post.id}> 
    //         <h3>{post.title}</h3>
    //         <p>{post.content.substring(0,100)}</p>
    //         <p><PostAuthor userId={post.userId}/></p>
    //         <TimeAgo timestamp={post.date}/>
    //     </article>
    // ));

    // for api

    useEffect(()=>{
        console.log(postsStatus);
        if(postsStatus === 'idle'){
            dispatch(fetchPosts());
        }
    } ,[postsStatus,dispatch])

    let content;
    if(postsStatus === 'loading'){
        content = <div>Loading...</div>
    }
    else if(postsStatus === 'succeeded'){
        console.log(postsStatus)
        const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));
        // const orderedPosts = posts
        content = orderedPosts.map((post)=>()=><PostExcrept key={post.id} post={post}/>)}
        else if(postsStatus === 'failed'){
            content = <div>{postsError}</div>
        }
    
    return(<>
    <div>
    <h2>Posts</h2>
    {content}
    </div>
    </>)
}

export default Post;