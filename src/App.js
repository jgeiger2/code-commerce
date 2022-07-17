import Home from "./Routes/Home/Home";
import {Routes, Route} from 'react-router-dom'
import NavBar from "./Routes/NavBar/NavBar";

const Signup = () => {
  return <h1>SIGNUP</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App