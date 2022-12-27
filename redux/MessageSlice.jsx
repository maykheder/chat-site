import {createSlice} from "@reduxjs/toolkit";
import c from "../img/c.jpg";
const MessageSlice = createSlice({
    name:'message',
    initialState:[{
       text:"hiii",
       time:new Date().toLocaleTimeString(),
       img:c,
    },],
    reducers:{
         send:(state,action)=>{
            const newmessage={
                text:action.payload.text,
                time:new Date().toLocaleTimeString(),
            };
            state.push(newmessage);
         },
    },

});
export const {send} = MessageSlice.actions;
export default MessageSlice.reducer;