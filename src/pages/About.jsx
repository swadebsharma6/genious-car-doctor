import parts from '../assets/images/about_us/parts.jpg';
import person from '../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <section className="mb-16">
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="relative lg:w-1/2">
          <img src={person} alt='person' className="lg:w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={parts}  alt='parts' className=" absolute right-5 top-1/2 w-3/5 rounded-lg shadow-2xl border-8" />
          </div>
          <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-5 text-orange-500">About Us</h2>
            <h1 className="md:text-5xl text-3xl font-bold">We are qualified <br />
             & of experience <br />
              in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
            <br />
            the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
            </p>
            <button className="btn btn-secondary">Get More Info</button>
          </div>
        </div>
      </div>
        </section>
    );
};

export default About;