import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Popular = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://genius-car-server-sooty.vercel.app/products')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, []);

    return (
        <section className="mb-16">
            <div className="max-w-2xl mx-auto text-center p-4 my-10 space-y-3">
            <p className="text-xl font-bold text-orange-500">Popular Products</p>
            <h2 className="text-4xl font-bold">Browse Our Products</h2>
            <p className="text-lg font-medium">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {
             products.map(product => <ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
            </div>
        </section>
    );
};

export default Popular;