import "./asset/css/app.css"
import { Route, Routes } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulations from "pages/Congratulations";
import Error from "pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/categories/:idc" element={<Details/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/congratulations" element={<Congratulations/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
