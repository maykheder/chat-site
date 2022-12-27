import {configureStore,combineReducers} from '@reduxjs/toolkit';
import chatSlice from './chatSlice';
import MessageSlice from './MessageSlice';
import PeopleSlice from './PeopleSlice';
const reducer = combineReducers({
    messages: MessageSlice,
    people:PeopleSlice,
    chat:chatSlice,
});
const store = configureStore({
    reducer,
    
    
});
export default store;