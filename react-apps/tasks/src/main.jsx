import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'
// import App from './App.jsx'
import Counter from './counter.jsx'
import Sumval from './sumval.jsx'
import Sumobj from './sumobj.jsx'
import Signup from './signup.jsx';
import Signin from './signin.jsx';
import Edit from './edit.jsx';
createRoot(document.getElementById('root')).render(
 <StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/sumval">Sumval</Link> |{" "}
        <Link to="/sumobj">Sumobj</Link> | {" "}
        <Link to="/signup">SignUp</Link> | {" "}
        <Link to="/signin">SignIn</Link>| {" "}
        <Link to="/edit">Edit</Link>| {" "}
      </nav>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/sumval" element={<Sumval />} />
        <Route path="/sumobj" element={<Sumobj />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
