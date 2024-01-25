import "./StyleSheets/Root.css"
// import NavBar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Screener from "./Pages/Screener";
import NavBar from "./Components/Navbar";
import Indicators from "./Pages/Indicators";
import Maps from "./Pages/Maps";
import Calendar from "./Pages/Calendar";
import Personalised from "./Pages/Personalised";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route element = {<Homepage />} path="/" />
      <Route element = {<Screener />} path="/screener" />
      <Route element = {<Indicators />} path = "/indicators"/>
      <Route element = {<Maps />} path = "/maps"/> 
      <Route element = {<Calendar />} path = "/calendar"/>
      <Route element = {<Personalised />} path = "/calendar"/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
