import mongoose from "mongoose";

const danie = new mongoose.Schema({
    nazwa: {
        type:String,
        required: true,
    },
    cena: {
        type:Number,
        require:true,
    },
    kategoria: {
        type:String,
        required:true,
    },
})

const danieModels = mongoose.model('danie',danie)
export default danieModels;