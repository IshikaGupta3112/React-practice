import PostAuthor from "./postAuthor";
import TimeAgo from "./TimeAgo";
import {useSelector} from 'react-redux';

const PostExcrept = ({ post })=>{
return(<>
 <article key={post.id}> 
            <h3>{post.title}</h3>
            <p>{post.body.substring(0,100)}</p>
            <p><PostAuthor userId={post.userId}/></p>
            <TimeAgo timestamp={post.date}/>
        </article>
</>)
}
export default PostExcrept;