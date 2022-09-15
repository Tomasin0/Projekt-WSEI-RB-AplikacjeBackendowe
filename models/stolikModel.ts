import mongoose from "mongoose";

const stolik = new mongoose.Schema({
    nazwa: {
        type: String,
        required: true,
    },
    liczbaMiejsc: {
        type:Number,
        require:true,
    },
    status: {
        type:String,
        enum:['wolny', 'zajety','nie_dostepny'],
        default:'wolny',
        required:true,
    },
})
const stolikModels = mongoose.model('stolik',stolik)
export default stolikModels;