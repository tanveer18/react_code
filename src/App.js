import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';


// import Text from "./components/Text";
// import Abouts from "./components/Abouts";


function App() {
  const [mode, setmode] = useState(false)
  return (
    <>
      <Navbar title="CWT" about="About Uss" mode={mode}/>
      {/* <Navbar/> */}
      <div className="container">
      <TextForm heading="Enter the Text You Analyze.."/>
      {/* <Abouts/> */}
      </div>
      <div className="container">
        {/* <Text heading=""/> */}
      </div>
    </>
  );
}

export default App;
