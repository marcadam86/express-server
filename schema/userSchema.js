const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'fullname is requuiresd']
    },
    username: {
        type: String,
        required: [true, 'username is required'],
        trim: true,
        unique: [true, 'username is already in use'],
        lowercase: true,
        validate: {
            type: String,
            validator: function (v) {
                //v represents current field value here
                return
                //REgex paste here
            }
        }
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        trim: true,
        unique: [true, 'email is already in use'],
        lowercase: true,
        validate: {
            type: String,
            validator: function (v) {
                //v represents current field value here
                return
                //REgex paste here
            }
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        min: [8, 'Password must be at least 8 characters long']
    }
})

// middleware is called on schema level
// pre, post, method - these are document level middleware i,e using schema
//pre middleware

// this is for new/update password hasing as we had provide condition with if(){ as well } 
userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
})

// this is custom functionality for password comparing
//.comparePassword is custome middleware
userSchema.method.comparePassword = async function (enteredPassword) {
    //bcypt.compare(//takes two arguments i.e plainPassword, hash)
    return await bcrypt.compare(enteredPassword, this.password)
    
    //now both password are match, and if matched will return true

}

//bcrypt.has(this.password, 10) - evaulating the password hasing
//     this.password = bcrypt.has(this.password, 10) - means evaulte the password and overwrite the same filed i.e password
// in "=" case first right hand side is evaluted and assinged on the left hand side

module.exports = mongoose.model('User', userSchema)