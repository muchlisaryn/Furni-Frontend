import "./asset/css/app.css"
import { Route, Routes } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Details from "pages/Details";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/categories/:idc" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
