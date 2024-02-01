import "./Banner.css";

const Slider = ({slide}) => {
    // console.log(slide)
    const {id, prev, next, image} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
         <div className='carousel-img'>
         <img src={image} alt='image2' className="lg:w-full  rounded-lg bg-cover" />
         </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
            <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${next}`}  className="btn btn-circle">❯</a>
          </div>
        </div>
    );
};

export default Slider;

// <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-1/2">
// <div className='p-10 text-white space-y-5'>
// <h2 className='md:text-6xl text-4xl font-bold text-gray-400 w-3/4'> Affordable 
// <br />Price For  <span className="text-secondary text-opacity-90">Car  Servicing</span></h2>
// <p className='text-lg w-3/4'>There are many variations of passages of  available, but the majority have suffered alteration in some form .</p>
// <div>
// <button className="btn btn-secondary mr-10">Discover More</button>
// <button className="btn  btn-neutral ">Latest Project</button>
// </div>
// </div>
// </div>