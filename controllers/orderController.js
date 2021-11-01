const Order = require('../schema/orderSchema')

exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body)
        res.status(200).json({
            success: 'true',
            messege: 'Order created Successfully'
        })
    } catch (error) {
        const ee = Object.values(error.errors).map((e) => e.messege)
        res.status(400).json({
            success: 'false',
            ee
        })
    }

}

exports.getSingleOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        res.status(200).json({
            success: true,
            order
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            messege: 'No orders found',
            error
        })
    }
}
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
        if (orders.length < 1) {
            return res.status(400).json({
                success: false,
                messege: 'No order found'
            })
        }
        res.status(200).json({
            success: true,
            messege: 'All orders',
            orders
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            messege: 'order updated',
            order
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const order = Order.findById(req.params.id)
        order.remove()
        res.status(200).json({
            success: true,
            messege: 'order deleteds'
        })
    } catch (error) {
        res.status(400).json({
            succes: false,
            error
        })
    }
}