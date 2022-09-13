import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Text from "./components/Text";
// import Abouts from "./components/Abouts";


function App() {
  return (
    <>
      <Navbar title="CWT" about="About Uss"/>
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
