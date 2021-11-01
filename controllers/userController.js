const User = require('../schema/userSchema')

exports.loginUser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Email and Password is required'
        })
    }

    //SELECT * from user where email=email
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'User Not Found'
        })
    }

    // Now function to receive (enteredPassword) and send it to comparePassword() for password and its hash comparison and verification 
    const isMatched = await user.comparePassword(password)
    if (!isMatched) {
        return res.status(400).json({
            success: false,
            message: 'Password is incorrect'
        })
    }

    return res.status(200).json({
        success: true,
        user
    })
}


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        if (users.length < 1) {
            //the return keyword means dont transfer contorlls to other, if not User not found and show the messged respones 
            return res.status(400).json({
                success: false,
                messege: 'No User found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'This is all Users route',
            users
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

exports.createUser = async (req, res) => {
    try {
        // new data/record creating or inserting document in DB, by create() on schema, and then send the received data in that create(req.body)  
        const user = await User.create(req.body)
        res.status(200).json({
            success: true,
            message: 'This is create User route',
            user
        })
    } catch (error) {
        //to change the object into an array use Object.value, besause further on we will need array alteration using map and map expects an array.
        // const ee = Oject.value(error.errors).map((e) => e.message)
        res.status(400).json({
            // ee
            error
        })
    }
}

exports.getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({
            success: true,
            message: 'This is a single User route',
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user.remove()
        res.status(200).json({
            success: true,
            message: 'This is a delete User route'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

exports.updateUser = async (req, res) => {
    try {

        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: 'The User has been updated',
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}


//password hasing for securing password

// "fullname": "Ahmed Raza",
// "username": "ahmed.raza",
// "email": "ahmedabc@mail.com",
// "password": "123456789"

// --------------------------++++++++++++++++++++++++++++++++++++++++++++++++++--------------------------------------------------------------------------------------

// const getUsers = async (req, res) => {
//     try {
//         const users = await User.find()
//         if (users.length < 1) {
//             //the return keyword means dont transfer contorlls to other, if not User not found and show the messged respones 
//             return res.status(400).json({
//                 success: false,
//                 messege: 'No User found'
//             })
//         }
//         res.status(200).json({
//             success: true,
//             message: 'This is all Users route',
//             users
//         })
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error
//         })
//     }
// }

// ----------------++++++++++++++++++---------****** Both Type Are the same, the difference is just between exports ******------------+++++++++++++++-----------------------

// exports.getUsers = async (req, res) => {
//     try {
//         const users = await User.find()
//         if (users.length < 1) {
//             //the return keyword means dont transfer contorlls to other, if not User not found and show the messged respones 
//             return res.status(400).json({
//                 success: false,
//                 messege: 'No User found'
//             })
//         }
//         res.status(200).json({
//             success: true,
//             message: 'This is all Users route',
//             users
//         })
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error
//         })
//     }
// }

// module.exports = getUsers