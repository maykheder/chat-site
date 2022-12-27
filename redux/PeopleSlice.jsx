import {createSlice} from "@reduxjs/toolkit";
import c from "../img/c.jpg";
import a from '../img/k.webp';
import up from '../img/arrow-up-right.png';
import down from '../img/arrow-down-left.png';
import b from '../img/w.webp';
import d from '../img/d.webp';
import online from '../img/status.png';

const PeopleSlice = createSlice({
    name:'people',
    initialState:[{
      name:"Janet Fowler",
      number:"(262) 617 6551",
       time:new Date().toLocaleTimeString(),
       img:a,
       status:online,
       callState:up,
       callDetail:"inbound-10:21"
    },
    {
        name:"Jason Boyd",
        number:"(333) 343 6341",
         time:new Date().toLocaleTimeString(),
         img:b,
         status:"",
         callState:down,
         callDetail:"lost-12:25"
      },
      {
        name:"Nicholas Dunn",
        number:"(223) 112 5541",
         time:new Date().toLocaleTimeString(),
         img:c,
         status:"",
         callState:up,
         callDetail:"inbound-07:51"
      },
      {
        name:"Carol Clark",
        number:"(288) 982 6941",
         time:new Date().toLocaleTimeString(),
         img:d,
         status:"",
         callState:down,
         callDetail:"lost-04:21"
      },
],
    reducers:{
        
    },

});

export default PeopleSlice.reducer;
