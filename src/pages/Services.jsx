import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";


const Services = () => {

    const services = useLoaderData();

    return (
        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          services.map(service => <ServiceCard
              key={service._id}
              service={service}
              ></ServiceCard>)
        }
      </div>
     
        </section>
    );
};

export default Services;