const Product = require('../schema/productSchema')

exports.createProduct = async (req, res) => {
    try {
        // new data/record creating or inserting document in DB, by create() on schema, and then send the received data in that create(req.body)  
        const product = await Product.create(req.body)
        res.status(200).json({
            success: true,
            message: 'This is create product route',
            product
        })
    } catch (error) {
        //to change the object into an array use Object.value, besause further on we will need array alteration using map and map expects an array.
        const ee = Oject.value(error.errors).map((e) => e.message)
        res.status(400).json({
            ee
        })
    }
}

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find()

        if (products.length < 1) {
            //the return keyword means dont transfer contorlls to other, if not product not found and show the messged respones 
            return res.status(400).json({
                success: false,
                messege: 'No product found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'This is all products route',
            products
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

exports.getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json({
            success: true,
            message: 'This is a single product route',
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        product.remove()
        res.status(200).json({
            success: true,
            message: 'This is a delete product route'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: 'The product has been updated'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}