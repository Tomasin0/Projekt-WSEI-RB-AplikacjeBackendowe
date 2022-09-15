import mongoose from "mongoose";
const produkt = new mongoose.Schema({
    nazwa:{
        type:String,
        required:true,
    },
    cena:{
        type:Number,
        required:true,
    },
    ilosc:{
        type:Number,
        required:true
    },
    jednostkaMiary:{
        type:String,
        enum:['g','dg','kg','t'],
        default:'g',
        required:true
    }
    
})

const produktModels = mongoose.model('produkt',produkt)
export default produktModels;