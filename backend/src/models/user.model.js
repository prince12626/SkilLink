const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
            fullName: {
                        type: String,
                        required:true
            },
            phone: {
                        type: String,
                        unique: true,
                        required:true
            },
            password: {
                        type: String,
                        required:true
            },
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;