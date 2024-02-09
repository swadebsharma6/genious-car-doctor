import { useEffect, useState } from "react";


const OrderRaw = ({order,}) => {
    // console.log(order)
    const{ _id,serviceName, serviceId, customer, price, email, phone, status} = order;
    const [orderService, setOrderService] = useState({});

    useEffect(()=>{
        fetch(`https://genius-car-server-sooty.vercel.app/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setOrderService(data) );
    }, [serviceId]);


    const handleDelete = Id=>{
        const proceed = confirm('Are you sure, You want to delete?');
        if(proceed){
            fetch(`https://genius-car-server-sooty.vercel.app/orders/${Id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert('Your Order Cancel Successfully');
                    const remaining = orderService.filter(odr => odr._id !== Id);
                    setOrderService(remaining)
                }
            })
            .catch(error =>{
                console.log(error.message)
            })
        }

    }

    return (
        <tr>
              <th>
                <button onClick={() =>handleDelete(_id)} className="btn btn-circle btn-sm ">X</button>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="rounded w-20 h-20">
                    { orderService?.img  &&
                         <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                        }
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{serviceName}</div>
                  </div>
                </div>
              </td>
              <td>
                {customer}
                <br/>
                <span className="badge badge-primary badge-sm">{email}</span>
              </td>
              <td>{phone}</td>
              <td className="text-lg font-bold text-red-500">${price}</td>
              <th>
                <button className="btn btn-primary btn-xs">{status ? status : 'Pending'}</button>
              </th>
            </tr>
    );
};

export default OrderRaw;