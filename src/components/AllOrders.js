import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = Cookies.get('token');
        if (!token) {
          throw new Error('Not logged in');
        }
        const response = await fetch('https://oom.onrender.com/orders/all', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const orders = await response.json();
        setOrders(orders);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <ul>
        {orders.map(order => (
          <li key={order._id}>{order.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllOrders;
