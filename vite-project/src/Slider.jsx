import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    slidesToSlide: 3,
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 860 },
    slidesToSlide: 3,
    items: 3
  },
  tablet: {
    breakpoint: { max: 860, min: 464 },
    slidesToSlide: 2,
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    slidesToSlide: 1,
    items: 1
  }
};

const Slider = () => {

  return (
    <Carousel responsive={responsive}
    swipeable={false}
  draggable={false}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  deviceType={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  >
      <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>

  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
        <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>
  <div className='product'>
    <h1>hello world</h1>
    <p>Paragrah</p>
  </div>

</Carousel>
  )
}

export default Slider