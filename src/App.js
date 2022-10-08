import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import Designs from './components/Designs'
import Tutorials from './components/Tutorials'
import About from './components/About'
import logo from './images/logo.jpg'
function App() 
{




  return (
    <div className='banner'>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-md navbar-dark">
  <div className="container">
    <img className=" navbar-brand rounded-circle logoicon" src= {logo} alt=''/>
    <h3 className="navbar-brand  mt-1 text-white"> CHERRY EDITING ZONE </h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link" aria-current="page" to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to='designs'>Designs</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='https://www.youtube.com/channel/UCItVMd1OI_RPVO0uXsV_qiQ' target='_blank'>Tutorials</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to='about'>About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      



      {/* CREATING ROUTES */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/designs" element={<Designs/>}/>
        <Route path="/tutorials" element={<Tutorials/>}/>
        <Route path="/about" element={<About/>}/> 

        </Routes>

    </div>
    
  );  
}

export default App;
