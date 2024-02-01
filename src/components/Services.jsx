import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('/public/services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    }, [])

    return (
        <section className="mb-16">
           <div className="max-w-2xl mx-auto text-center p-4 my-10">
            <h4 className="text-xl font-bold text-orange-500">Services</h4>
            <h2 className="text-4xl font-bold">Our Service Area</h2>
            <p className="text-lg font-medium">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
           </div>

           <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
           {
            services.map(service => <ServiceCard
                key={service.service_id}
                service={service}
                ></ServiceCard>)
           }
           </div>
        </section>
    );
};

export default Services;