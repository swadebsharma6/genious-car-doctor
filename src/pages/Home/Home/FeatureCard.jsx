

const FeatureCard = ({feature}) => {
    // console.log(feature)
    return (
        <div className="card h-[200px] shadow-xl border-2">
        <figure className="p-6">
          <img src={feature.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{feature.title}</h2>
        </div>
      </div>
    );
};

export default FeatureCard;