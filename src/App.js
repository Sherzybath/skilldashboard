import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Chatbot from "./Components/Chatbot";
import { useState } from "react";
import MainCont from "./Components/MainCont";
function App() {
  const [showComponent, setShowComponent] = useState(false);
  const toggleComponent = () => { 
    setShowComponent(prevState => !prevState);
  };
  return (
    <div className="App">
      <MainCont toggle2={toggleComponent}/>
      {/* <div className="liner">
        <Nav toggle={toggleComponent}/>
        <Main/>
      </div> */}
      {showComponent && <Chatbot toggle={toggleComponent} />}
      
      
    </div>
  );
}

export default App;
