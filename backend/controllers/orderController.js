import asyncHandler from "../middleware/asyncHandler.js";
import Order from '../models/orderModel.js'
 
//@desc Create New Order
//@route POST/api/orders
//@Access Private
const addOrderItems = asyncHandler(async (req, res) => {
res.send('add order items');
});


//@desc Get Logged in Users Orders
//@route GET/api/orders/myorders
//@Access Private
const getMyOrders= asyncHandler(async (req, res) => {
    res.send('get my orders');
    });

    //@desc Get order by ID
//@route GET/api/orders/:id
//@Access Private
const getOrderById = asyncHandler(async (req, res) => {
    res.send('get order by ID');
    });

    //@desc Update order to paid
//@route GET/api/orders/:id/pay
//@Access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('update order to paid');
    });

    //@desc Update to delivered
//@route GET/api/orders/delivered
//@Access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('Update Order To Delivered');
    });


    //@desc Get All Orders
//@route POST/api/orders
//@Access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
    res.send('Get All Orders');
    });


    export {
        addOrderItems,
        getMyOrders,
        getOrderById,
        updateOrderToPaid,
        updateOrderToDelivered,
        getOrders
    }