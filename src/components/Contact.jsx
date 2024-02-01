import { FaCalendarDays, FaMagnifyingGlassLocation } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";


const Contact = () => {
    return (
        <section className="grid md:grid-cols-3 grid-cols-1 gap-4 mb-16 bg-black text-white md:px-16 py-20 rounded-md">
            <div className="flex items-center gap-3 p-2">
             <FaCalendarDays className="text-3xl text-red-600" />
             <div>
             <p>We are open monday-friday.</p>
             <h2 className="text-3xl font-bold">7:00 am - 9:00 pm</h2>
             </div>
            </div>
            <div className="flex items-center gap-3 p-2">
            <MdWifiCalling3 className="text-3xl text-red-600" />
             <div>
             <p>Have a question?</p>
             <h2 className="text-3xl font-bold">+2546 251 2658</h2>
             </div>
            </div>
            <div className="flex items-center gap-3 p-2">
            <FaMagnifyingGlassLocation className="text-3xl text-red-600" />
             <div>
             <p>Need a repair? our address.</p>
             <h2 className="text-3xl font-bold">Liza Street, New York.</h2>
             </div>
            </div>
        </section>
    );
};

export default Contact;