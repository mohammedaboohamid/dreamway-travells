import { Route , Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Explore from "./pages/Explore";
import PlanPage from "./pages/PlanPage";
import ExplorDetails from "./pages/ExplorDetails";
import Income from "./pages/Admin/Income";
import Reviews from "./pages/Admin/Reviews";
import Layout from "./component/Layout";
import AdminLayout from "./component/AdminLayout"
import Dashboard from "./pages/Admin/Dashboard";
import Plans from "./pages/Admin/Plans";
import AdminPlansDetails from "./pages/Admin/AdminPlansDetails";


function App() {
  return (
    <Routes >
      <Route element={<Layout/>}>
        <Route  path="/" element={<HomePage/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="planPage" element={<PlanPage/>}/>
        <Route path="explore" element={<Explore/>}/>
        <Route path="explore/:id" element={<ExplorDetails/>}/>

        <Route path="admin" element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        <Route path="plans" element={<Plans/>}/>
        <Route path="plans/:id" element={<AdminPlansDetails/>}/>
        </Route>
        
      </Route>

    </Routes>

  );
}

export default App;
