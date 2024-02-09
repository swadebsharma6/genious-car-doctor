import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    const {_id, title, price} = service;


    const handlePlaceOrder =(event) =>{
        event.preventDefault();
        const form = event.target;
        const name  = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const message = form.message.value;
        const email = user?.email || 'Unregistered';

        const order = {
            serviceId: _id,
            serviceName: title,
            price: price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://genius-car-server-sooty.vercel.app/orders',{
        method: "POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
        
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                alert('Ordered placed Successfully');
                form.reset();
            }
        })
        .catch(error =>{
            console.log(error.message)
        })
       


    }
  
    return (
        <section>
         <div className="my-6">
         <h2 className="text-4xl font-bold text-center">Your Order Service: <span className="text-secondary"> {title}</span></h2>
         <p className="text-xl font-bold text-primary text-center">Price: ${price}</p>
         </div>
         <div className="bg-gray-200 p-6 rounded">
            <form
            onSubmit={handlePlaceOrder}
            className="p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name" className="input input-bordered input-primary w-full" required /> 
            <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered input-primary w-full "  required/> 
            <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered input-primary w-full " required /> 
            <input type="text" name="email" placeholder="Email"  defaultValue={user?.email} className="input input-bordered input-primary w-full" readOnly /> 
            </div>
            <textarea name="message" className="textarea textarea-primary h-40 w-full my-4" placeholder="Your Message"></textarea>

            <button type="submit" className="btn btn-primary  w-full">Order Confirm</button>
            </form>
         </div>
        </section>
    );
};

export default CheckOut;