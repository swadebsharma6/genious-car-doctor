import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import OrderRaw from "./OrderRaw";


const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    // console.log(orders)

    const url =`http://localhost:5000/orders?email=${user?.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [url]);


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