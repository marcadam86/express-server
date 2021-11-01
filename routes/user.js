const express = require('express')
const router = express.Router()

const { getUsers, getSingleUser, createUser, updateUser, deleteUser, loginUser } = require('../controllers/userController')

//userLogin => /api/v1/user/login
router.route('/user/login').post(loginUser)

//createProduct => /api/v1/user
router.route('/user/new').post(createUser)

//getuser => /api/v1/users
router.route('/users').get(getUsers)

//getSingleUser => /api/v1/user
router.route('/users/:id').get(getSingleUser)

//getuser => /api/v1/user/delete/:id
router.route('/user/delete/:id').get(deleteUser)

//getuser => /api/v1/user/update/:id
router.route('/user/update/:id').put(updateUser)

// app.get('/user', (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: 'This is Product route'
//     })
// })

module.exports = router
