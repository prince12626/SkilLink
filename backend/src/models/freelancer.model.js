const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
            fullName: {
                        type: String,
                        required: true,
            },
            password: {
                        type: String,
                        required: true,
            },
            services: [
                        {
                                    type: mongoose.Schema.Types.ObjectId,
                                    ref:'Service'
                        }
            ],
            place: {
                        city: { type: String, required: true },
                        district: { type: String, required: true },
                        pinCode: {type:String, required:true}
            },
            phone: {
                        type: String,
                        required: true,
                        unique:true
            }
})  

const freelancerModel = mongoose.model('Freelancer', freelancerSchema);

module.exports = freelancerModel;