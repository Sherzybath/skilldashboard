import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Chatbot from "./Components/Chatbot";
import { useState } from "react";
function App() {
  const [showComponent, setShowComponent] = useState(false);
  const toggleComponent = () => { 
    setShowComponent(prevState => !prevState);
  };
  return (
    <div className="App">
      <div className="liner">
        <Nav toggle={toggleComponent}/>
        <Main/>
      </div>
      {showComponent && <Chatbot toggle={toggleComponent} />}
      
      
    </div>
  );
}

export default App;
