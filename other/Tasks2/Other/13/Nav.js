//import "./Nav.css";
import {Link} from "react-router-dom";

import menuButton from "./logos/menu-dots-svgrepo-com.svg"

import myLogo from "./logos/car-hatchback-svgrepo-com.svg"

import Dropdown from "./DropDown"


const Nav = () => {
  return(
    <nav className={"navbar px-2 d-flex justify-content-between align-items-center border-bottom"} style={{background:"none"}}>
      <button className="navbar-toggler p-1" data-bs-toggle="collapse" type="button" data-bs-target="#nav-menu"  aria-controls="nav-menu" aria-expanded="false">
        <img src={menuButton} alt="menu button"/>
      </button>
      <div>
        <img src={myLogo} alt="logo"/>
      </div>
      <div>
        Sign In
      </div>
      <div className="collapse navbar-collapse" id="nav-menu" >
        <ul className="nav-bar mr-auto">
          <li classNameName="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li>
            <Dropdown text="Catagories" 
            
            list={[<Dropdown text={"Cars"}
              list={["Hackbacks", 
                    "Saloons", 
                    "Estates"]}/>, 
            "Vans", 
            "Motorhomes",
            "Motorcycles"]}/>
          </li>
          <li classNameName="nav-item"><Link className="nav-link" to="/">Sell My Car</Link></li>
          
          <li>
            <Dropdown text={"Acount"} list={[
              "Info",
              "Sign Out",
              "Settings"
            ]}/>
            <li classNameName="nav-item"><Link className="nav-link" to="/">About</Link></li>
          </li>
        </ul>
      </div>
    </nav>
    );
};

export default Nav;

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