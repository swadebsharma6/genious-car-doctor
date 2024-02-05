import Carousel from "./Careusel";


const Testimonial = () => {
    return (
        <section className="mb-16">
        <div className="max-w-2xl mx-auto text-center p-4 my-10 space-y-3">
        <p className="text-xl font-bold text-orange-500">Testimonial</p>
        <h2 className="text-4xl font-bold">What Customer Says</h2>
        <p className="text-lg font-medium">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        </div>
        <Carousel/>
        </section>
    );
};

export default Testimonial;