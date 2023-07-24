import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POST_URL);
    console.log(response.data);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

// const initialState=[
//     {id:'1',title:'First Post!',content:'Hello!' , date:sub(new Date(),{minutes:10}).toISOString() },
//     {id:'2',title:'Second Post',content:'More text' , date:sub(new Date(),{minutes:5}).toISOString()},
// ]

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
      extrareducers(builder) {
        builder
        .addCase(fetchPosts.pending, (state, action) => {
         state.status='loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status='succeeded'
            let min=1;
            const loadedPosts = action.payload.map((post)=>{
                post.date = sub(new Date(),{minutes:min++}).toISOString();
                return post;
            })
            state.posts = state.posts.concat(loadedPosts);
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status='failed'
            state.error = action.error.message;
        })
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostError = (state) => state.posts.error;
export const getPostStatus = (state) => state.posts.status;

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
