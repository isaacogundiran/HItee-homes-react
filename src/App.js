import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword"
import Offer from "./pages/Offer"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/profile"element={<Profile/>}/>
          <Route path="/sign-in"element={<Signin/>}/>
          <Route path="/sign-up"element={<Signup/>}/>
          <Route path="/forgot-password"element={<ForgotPassword/>}/>
          <Route path="/offer"element={<Offer/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
