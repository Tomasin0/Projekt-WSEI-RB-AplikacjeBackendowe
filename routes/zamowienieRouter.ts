import express from 'express';
import {Request, Response} from 'express';
import zamowienieModels from '../models/zamowienieModel';
const router = express.Router();
const app = express();

//GET
app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const zamowienie = new zamowienieModels({
        nazwa:req.body.nazwa,
        liczbaMiejsc:req.body.liczbaMiejsc,
        status:req.body.status
    })
    const saveZamowienie = await zamowienie.save();
    res.status(201).json(zamowienie);
})

router.get('/',async (req:Request, res:Response) => {
    const zamowienie = await zamowienieModels.find();
    res.status(201).send(zamowienie);
})

router.put('/:id',async (req:Request, res:Response) => {
    const zamowienie = await zamowienieModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(zamowienie);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const zamowienie = await zamowienieModels.findByIdAndDelete(req.params.id)
    res.status(201).json(zamowienie);
})

module.exports = router;