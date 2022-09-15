import express from 'express';
import {Request, Response} from 'express';
import restauracjaModels from '../models/restauracjaModel';
const router = express.Router();
const app = express();

//GET
app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const restauracja = new restauracjaModels({
        nazwa:req.body.nazwa,
        adres:req.body.adres,
        telefon:req.body.telefon,
        nip:req.body.nip,
        email:req.body.email,
        www:req.body.www,
    })
    const saveRestauracja= await restauracja.save();
    res.status(201).json(restauracja);
})

router.get('/',async (req:Request, res:Response) => {
    const restauracja = await restauracjaModels.find();
    res.status(201).json(restauracja);
})

router.put('/:id',async (req:Request, res:Response) => {
    const restauracja = await restauracjaModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(restauracja);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const restauracja = await restauracjaModels.findByIdAndDelete(req.params.id)
    res.status(201).json(restauracja);
})

module.exports = router;