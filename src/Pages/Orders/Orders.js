// Start Node imports
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
// End Node imports

// Start Components
import Order from "./Order/Order";
// End Components

// Start State Providers & Services
import {useStateValue} from "../../Services/StateProvider"
import { db } from "../../Services/Firebase";
// import {getCartTotal} from "../../../Services/Reducer";
// import axios from "../../../Services/axios";
// End State Providers & Services

// Start Stylesheet
import "./Orders.css";
// End Stylesheet

function Orders() {

    const [{cart, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        if(user)
            db
            .collection("users")
            .doc(user?.uid)
            .collection("orders")
            .orderBy("created", "desc")
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        else setOrders([])
    }, [user]);

    return (
        <div className="page__orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order key={uuidv4()} order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders