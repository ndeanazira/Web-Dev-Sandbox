//import "./Home.css";

import SlideShow from "../components/SlideShow";

import mazda from "../components/slideshow/images/360_F_123522471_XZe5ebqil1DFJRgOUJ6taDP4DnmHjtL7.jpg";

import carsInRow from "../components/slideshow/images/cars-sale-stock-row-car-260nw-636632101.jpg";

import biba from "../components/slideshow/images/zgcgaqv271ja1.png";

import suv from "../components/slideshow/images/lovepik-family-car-trips-picture_501007795.jpg";

import classicCar from "../components/slideshow/images/pexels-nordic-overdrive-202768-627678.jpg";

const Home = (props) => {
  console.log(props.match);
  return(
    <div className={"pages home"}>
      <SlideShow list={[mazda, carsInRow, biba, suv, classicCar]} id={"carouselExample"} h={"15vh !important"} size={"thick"}/>
      <div className="h-25">
        Offer
      </div>
      <div className="h-25">
        Latest Cars
      </div>
      <div className="d-flex h-25 text-center">
        <div className="w-50">Buy My Car</div>
        <div className="w-50">Sell My Car</div>
      </div>
    </div>
    );
};

export default Home;

