import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {

    const {img, price, title} = service;
    // console.log(service);

    return (
        <div className="card w-full bg-base-100 shadow-xl m-4">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="w-full rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions flex items-center">
           <p className='text-xl font-bold text-red-500'> Price: ${price}</p>
            <Link > 
            <FaArrowRight className="text-xl text-red-500 font-bold" />
            </Link>
          </div>
        </div>
      </div>
    );
};
   

export default ServiceCard;