//import logo from './logo.svg';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar'
import Header from './Pages/Header'
import Login from'./Pages/Login'
import Register from'./Pages/Register'
import ChurchServices from './Pages/ChurchServices'
import Events from './Pages/Events'
import Donate from './Pages/Donate';
function App() {
  return (
<div>
 <NavBar/>
 <BrowserRouter>
 <Routes>
 <Route index element={<Header />} />
 <Route path="/login" element={<Login />} />
 <Route path="/register" element={<Register/>} />
 <Route path="/register" element={<Register />} />
 <Route path="/church-services" element={<ChurchServices />}/>
 <Route path="/events" element={<Events />} />
 <Route path="/donate" element={<Donate />} />
 </Routes>
</BrowserRouter> 
</div>
    );
}

export default App;
