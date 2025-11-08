const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
            owner: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref:'Freelancer'
            },
            title: {
                        type: String,
                        required:true
            },
            description: {
                        type:String
            },
            keywords: [{ type: String }],
            imageURL: {
                        type: String,
                        required:true
            },
            price: {
                        type: String,
                        required: true
            }
})

const serviceModel = mongoose.model('Service', serviceSchema); 
module.exports = serviceModel;