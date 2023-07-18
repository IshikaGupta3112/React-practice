import {createSlice} from '@reduxjs/toolkit';

const initialState=[
    {id:'1',name:'First User!'},
    {id:'2',name:'Second User'},
]

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{

    }
});

export default userSlice.reducer;