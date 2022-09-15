import express from 'express';
import {Request, Response} from 'express';
import produktModels from '../models/produktModel';
const router = express.Router();
const app = express();

//GET
app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const produkt = new produktModels({
        nazwa:req.body.nazwa,
        cena:req.body.cena,
        ilosc:req.body.ilosc,
        jednostkaMiary:req.body.jednostkaMiary
    })
    const saveProdukt= await produkt.save();
    res.status(201).json(produkt);
})

router.get('/',async (req:Request, res:Response) => {
    const produkt = await produktModels.find();
    res.status(201).send(produkt);
})

router.put('/:id',async (req:Request, res:Response) => {
    const produkt = await produktModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(produkt);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const produkt = await produktModels.findByIdAndDelete(req.params.id)
    res.status(201).json(produkt);
})

module.exports = router;