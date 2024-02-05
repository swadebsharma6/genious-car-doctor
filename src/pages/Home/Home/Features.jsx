import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";


const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/feature`)
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, [])

    return (
        <section className="mb-16">
        <div className="max-w-2xl mx-auto text-center p-4 my-10 space-y-3">
        <p className="text-xl font-bold text-orange-500">Core Features</p>
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p className="text-lg font-medium">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        </div>

        <div className="grid lg:grid-cols-6 grid-cols-1 gap-4">
        {
            features.map(feature => <FeatureCard
                key={feature._id}
                feature={feature}
                ></FeatureCard>)
        }
        </div>
        </section>
    );
};

export default Features;