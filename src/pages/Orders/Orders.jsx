import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import OrderRaw from "./OrderRaw";


const Orders = () => {
    const {user, logOut} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    // console.log(orders)

  

    useEffect(()=>{
        fetch(`https://genius-car-server-sooty.vercel.app/orders?email=${user?.email}`, {
          headers:{
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(res =>{
          if(res.status === 401 || res.status === 403){
           return  logOut();
          }
          return  res.json();
        })
        .then(data =>{
          setOrders(data)
        })
    }, [user?.email, logOut]);


    return (
        <section>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                SL
              </th>
              <th>ServiceName</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
                orders.map((order, idx )=> <OrderRaw
                    key={order._id}
                    order={order}
                    idx={idx}
                    ></OrderRaw>)
            }
          </tbody>
          
        </table>
      </div>
        </section>
    );
};

export default Orders;