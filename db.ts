import { ChangeStreamDocument } from "mongodb";
import mongoose from "mongoose";

const connString = 'mongodb+srv://t0masin0:Tc12na6first@cluster0.yqtclqc.mongodb.net/?retryWrites=true&w=majority'



export const main = () => {
    console.log('Connecting to mongo');
    const db = mongoose.connect(connString)
    console.log('Mongo Connected!')
}