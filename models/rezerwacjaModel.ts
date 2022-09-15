import mongoose from "mongoose";
//import {Stolik} from './stolikModel';
const rezerwacaja = new mongoose.Schema({
    stolik: {
        type: String,
        required: true,
    },
    start: {
        type:Number,
        require:true,
        default:Date.now()
    },
    end: {
        type:Number,
        required:true,
        default:Date.now()
    },
    client: {
        type:String,
        required:true,
    },
})

const rezerwacajaModels = mongoose.model('rezerwacaja',rezerwacaja)
export default rezerwacajaModels;