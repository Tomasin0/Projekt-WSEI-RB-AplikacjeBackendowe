import express from 'express';
import {Request, Response} from 'express';
import pracownikModels from '../models/pracownikModel';
const router = express.Router();
const app = express();

//GET
app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const pracownik = new pracownikModels({
        imie:req.body.imie,
        nazwisko:req.body.nazwisko,
        stanowisko:req.body.stanowisko
    })
    const savePracownik = await pracownik.save();
    res.status(201).json(pracownik);
})

router.get('/',async (req:Request, res:Response) => {
    const pracownik = await pracownikModels.find();
    res.status(201).send(pracownik);
})

router.put('/:id',async (req:Request, res:Response) => {
    const pracownik = await pracownikModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(pracownik);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const pracownik = await pracownikModels.findByIdAndDelete(req.params.id)
    res.status(201).json(pracownik);
})

module.exports = router;