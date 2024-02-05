

const Carousel = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="" className="btn btn-circle">❮</a> 
            <a href="" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Carousel;