//import "./LogIn.css";

const LogIn = (props) => {
  console.log(props);
  return(
     <SlideShow list={null} id={"login-bg"} size={"full position-absolute top-0 start-0"} isVid={true}/>
     
    <div className={"log-in page"}>
      <div>
        Log In
      </div>
      
    </div>
    );
};

export default LogIn;