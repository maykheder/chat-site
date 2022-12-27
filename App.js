import './App.css';
import Profile from "./Profile/Profile";
import Call from "./Call/Call";
import Calling from './Calling/Calling';
import Camera from './Camera/Camera';
import SelectPhoto from './SelectPhoto/SelectPhoto';
import Chat from './Chat/Chat';
import Chat1 from './Chat1/Chat1';
import {Routes,Route,Router,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Routes>
             <Route path="/" element={<Profile/>}/>
             <Route path="/Camera/Camera" element={<Camera/>}/>
             <Route path="/Call/Call" element={<Call/>}/>
             <Route path="/SelectPhoto/SelectPhoto" element={<SelectPhoto/>}/>
             <Route path="/Chat1/Chat1" element={<Chat1/>}/>

            <Route path="/Chat/Chat" element={<Chat/>}/>

               
        </Routes>
    </div>
  );
}

export default App;
