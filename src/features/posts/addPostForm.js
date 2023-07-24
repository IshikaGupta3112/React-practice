import { useState } from "react";
import {useSelector , useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import {postAdded} from './postsSlice';

const AddPostForm = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState(''); 
    const [userId,setUserId] = useState(''); 

    const users = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    const savedPost = () => {
        if(title && content){
            dispatch(postAdded(title,content,userId));
            setTitle('');
            setContent('');
        }
    };
    const userOptions = users.map((user)=>(
        <option key={user.id} value={user.id}>{user.name}</option>
    ));

    const cansave = Boolean(title) && Boolean(content) && Boolean(userId);  
    return(<>
<div>
    <h2>Add a New Post</h2>
    <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={(e)=>setUserId(e.target.value)}>
            <option value=""></option>
            {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={content} onChange={(e)=>setContent(e.target.value)}/>
        <button type="button" onClick={savedPost} disabled={!cansave}>Save Post</button>
    </form>
</div>
    </>)
}
export default AddPostForm;