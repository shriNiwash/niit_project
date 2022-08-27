const mongoose = require('mongoose');

//Creating the schema

const feedBackSchema = mongoose.Schema({
    name : {
        type: String,
        required:true,
    },
    email : {
        type: String,
        required:true,
    },
    subject : {
        type: String,
        required:true,
    },
    message:{
        type: String,
        required:true,
    }
});

//Creating the model of the database

const FeedBackModel = mongoose.model('FeedBackModel',feedBackSchema);

module.exports = FeedBackModel;