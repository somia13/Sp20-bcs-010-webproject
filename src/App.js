import { Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";


function App() {
  return (
    <>

<NavBar/>
    
<Routes>

<Route  path='/' element={<HomePage/>}  />
<Route path='/Login' element={<Login/>} />
<Route  path='/ContactUs' element={<ContactUs/>} />
<Route path='/SignUp' element={<SignUp/>} />
  
</Routes>

    </>

  );
}

export default App;
