import Sign from "./signup";
import Login from "./login";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./home";
import Pay from "./pay";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/register' element={<Sign/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    <Pay/>
    </div>
  );
}

export default App;
