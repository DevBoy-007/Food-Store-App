import Not from "./Components/not"
//import Index from "../src/Components/index";
import Home from "./Layouts/Home"
import { Route, Routes } from 'react-router-dom'
import AdIndex from "./Admin/AdIndex";
import Adminlayout from "./Admin/adminlayout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<AdIndex />}></Route>;
          <Route path="admin" element={<Adminlayout />}></Route>;
        </Route>;
        <Route path="*" element={<Not />}></Route>;
      </Routes>
    </>


  )
}
export default App;






