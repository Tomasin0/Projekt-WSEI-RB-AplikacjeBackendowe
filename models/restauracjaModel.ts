import mongoose  from "mongoose";

const restauracja = new mongoose.Schema({
    nazwa:{
        type:String,
        required:true,
    },
    adres:{
        type:String,
        required:true,
    },
    telefon: {
        type:Number,
        required:true,
    },
    nip:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:false,
    },
    www:{
        type:String,
        required:true,
    }
})
const restauracjaModels = mongoose.model('restauracja',restauracja)
export default restauracjaModels;