const ProductCard = ({ product }) => {
  const { image,  name, price } = product;
//   console.log(product);
  return (
    <div className="card  bg-base-200 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-[200px] h-[200px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <h2 className="card-title font-bold">{name}</h2>
        <p className=" text-red-500 font-bold"> ${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
