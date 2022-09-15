import mongoose from "mongoose";

 const zamowienie = new mongoose.Schema({
    pracownik:{
        type:String,
        required:true,
    },
    danie:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true
    },
    stolik:{
        type:String,
        enum:['zamowiony','w_trakcie','zrealizowany','rachunek'],
        required:true
    },
    cena:{
        type:Number,
        required:true
    }    
})
const zamowienieModels = mongoose.model('zamowienie',zamowienie)
export default zamowienieModels;