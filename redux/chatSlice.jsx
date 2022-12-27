import {createSlice} from "@reduxjs/toolkit";
import a from "../img/a.jpg";
import b from "../img/k.webp";
import c from "../img/c.jpg";
import d from "../img/d.webp";
import e from "../img/w.webp";
import f from "../img/f.jpg";
import online from '../img/status.png';

const chatSlice = createSlice({
    name:'chat',
    initialState:[{
        name:"Janet Fowler",
        img:a,
        message:"kgzc sdc\sc dcsc",
        time: new Date().toLocaleTimeString(),
        status:online,
    },
    {
        name:"CaroleClark",
        img:b,
        message:"bvbcvbf",
        time: new Date().toLocaleTimeString(),
        status:"",
    },
    {
        name:"Janet clark",
        img:c,
        message:"ksd\dc",
        time: new Date().toLocaleTimeString(),
        status:"",
    },
    {
        name:"jason Fowler",
        img:d,
        message:"cvvdfedf",
        time: new Date().toLocaleTimeString(),
        status:"",
    },
    {
        name:"Nichol Dunn",
        img:e,
        message:"kgzc sdc\sc dcsc",
        time: new Date().toLocaleTimeString(),
        status:"",
    },
    {
        name:"Ann Carrol",
        img:f,
        message:"dtfaretfa",
        time: new Date().toLocaleTimeString(),
        status:"",
    },
],
    reducers:{
       
    },

});
export const {} = chatSlice.actions;
export default chatSlice.reducer;