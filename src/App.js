import { Route , Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Suv from "./pages/Suv";
import PageNotFound from "./pages/PageNotFound";
import Explore from "./pages/Explore";
import PlanPage from "./pages/PlanPage";


function App() {
  return (
    <Routes className="">
      <Route  path="/" element={<HomePage/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/PlanPage" element={<PlanPage/>}/>
      <Route path="/Explore" element={<Explore/>}/>
      <Route path="/Suv" element={<Suv/>}/>

    </Routes>

  );
}

export default App;
