import express from 'express';
import {Request, Response} from 'express';
import stolikModels from '../models/stolikModel';
const router = express.Router();
const app = express();

//GET
app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const stolik = new stolikModels({
        nazwa:req.body.nazwa,
        liczbaMiejsc:req.body.liczbaMiejsc,
        status:req.body.status
    })
    const saveStolik = await stolik.save();
    res.status(201).json(stolik);
})

router.get('/',async (req:Request, res:Response) => {
    const stolik = await stolikModels.find();
    res.status(201).send(stolik);
})

router.put('/:id',async (req:Request, res:Response) => {
    const stolik = await stolikModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(stolik);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const stolik = await stolikModels.findByIdAndDelete(req.params.id)
    res.status(201).json(stolik);
})

module.exports = router;