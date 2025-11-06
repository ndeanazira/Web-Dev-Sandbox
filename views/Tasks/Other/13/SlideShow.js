//import "./SlideShow.css";

const SlideShow = ({list, id, size, isVid}) => {
  
  const mediaJsx = (media) => {return(
    isVid ? (<video className={`d-block w-100 slide-media ${size}`}><source src={media} type="video/mp4"/></video>) : 
    (<img  src={media} className={`d-block w-100 slide-media ${size}`} alt={media}/>)
  );
    
  }

  
  return(
    <div class={`carousel slide slideshow`} data-bs-ride="carousel" id={id}>
  
  {list&&<div class="carousel-inner">
    <div class="carousel-item active">
      {mediaJsx(list[0])}
    </div>
  {list.slice(1,-1).map(media=>(
    <div class="carousel-item">
      {mediaJsx(media)}
    </div>
  ))}    
    </div>}
  </div>
    );
};

export default SlideShow;

/*<img class="d-block w-100" src="..." alt="First slide"/>

<img class="d-block w-100" src="..." alt="Second slide"/>

<img class="d-block w-100" src="..." alt="Third slide"/>
*/