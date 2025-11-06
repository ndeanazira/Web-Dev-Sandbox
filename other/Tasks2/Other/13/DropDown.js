//import "./Dropdown.css";

import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import menuButton from "./logos/menu-dots-svgrepo-com.svg"

import myLogo from "./logos/car-hatchback-svgrepo-com.svg"


const Dropdown = ({text, list}) => {
  
  const [expanded, setExp] = useState(false);
  
  const toggleExp = e =>{
    if(expanded){setExp(false);}
    else{setExp(true);}
    console.log(expanded);
  }
  
  return(
    <div className="w-100 dropdown">
      <div className={"d-flex w-100 justify-content-between align-items-center"} style={{background:"none"}}>
       <div onClick={toggleExp}><span>{text}</span></div>
       <div className={`mx-5 position-rlative ${expanded ? "expanded":""}`}>
         <i className="bi bi-caret-up-square-fill position-absolute top-0" onClick={toggleExp}></i>
       </div>
      </div>
        <ul>
          {list&&expanded&&list.map(item=>(
          <li>{item}</li>
          ))}
        </ul>
    </div>
    )
}

export default Dropdown;

/*{list&&list.map(item=>{
        return(<li>{item}</li>)}}*/


/**/
    
    /*<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" href="#">Navbar</Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="#">Link</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" href="#">Action</Link>
          <Link class="dropdown-item" href="#">Another action</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" href="#">Something else here</Link>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link disabled" href="#">Disabled</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>*/