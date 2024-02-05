

const TeamCard = ({tem}) => {
    // console.log(tem)
    return (
        <div className="card  shadow-sm border-2">
      <figure className="px-10 pt-10">
        <img
          src={tem.image}
          alt="Shoes"
          className="rounded-xl w-full h-[300px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{tem.name}</h2>
        <p className=" text-red-500 font-bold">{tem.expertise}</p>
      </div>
    </div>
    );
};

export default TeamCard;