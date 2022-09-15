import express from 'express';
import {Request, Response} from 'express';
import danieModels from '../models/daniaModel';
const router = express.Router();
const app = express();

//GET
app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const danie = new danieModels({
        nazwa:req.body.nazwa,
        cena:req.body.cena,
        kategoria:req.body.kategoria
    })
    const saveDanie = await danie.save();
    res.status(201).json(danie);
})

router.get('/',async (req:Request, res:Response) => {
    const danie = await danieModels.find();
    res.status(201).send(danie);
})

router.put('/:id',async (req:Request, res:Response) => {
    const danie = await danieModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(danie);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const danie = await danieModels.findByIdAndDelete(req.params.id)
    res.status(201).json(danie);
})

module.exports = router;