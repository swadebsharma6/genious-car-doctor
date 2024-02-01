import "./Banner.css";

const Slider = ({slide}) => {
    // console.log(slide)
    const {id, prev, next, image} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
         <div className='carousel-img'>
         <img src={image} alt='image2' className="lg:w-full rounded-lg " />
         </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
            <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${next}`}  className="btn btn-circle">❯</a>
          </div>
        </div>
    );
};

export default Slider;
