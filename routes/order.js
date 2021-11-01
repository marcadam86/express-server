const express = require('express')
const router = express.Router()

const { getOrders, deleteOrder, getSingleOrder, updateOrder, createOrder } = require('../controllers/orderController')
//All orders route => /api/v1/orders
router.route('/orders').get(getOrders)

//All singleOrder route => /api/v1/orders
router.route('/order/:id').get(getSingleOrder)

//All deleteOrder route => /api/v1/orders
router.route('/order/delete/:id').post(deleteOrder)

//All updateOrders route => /api/v1/orders
router.route('/order/update/:id').put(updateOrder)

//All createOrders route => /api/v1/orders
router.route('/order/new').post(updateOrder)

module.exports = router