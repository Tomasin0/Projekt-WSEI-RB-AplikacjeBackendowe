import express from 'express';
import {Request, Response} from 'express';
import rezerwacajaModels from '../models/rezerwacjaModel';
const router = express.Router();
const app = express();

//GET
app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const rezerwacaja = new rezerwacajaModels({
        stolik:req.body.stolik,
        start:req.body.start,
        end:req.body.end,
        client:req.body.client,
    })
    const saveRezerwacaja= await rezerwacaja.save();
    res.status(201).json(rezerwacaja);
    console.log(saveRezerwacaja);
})

router.get('/',async (req:Request, res:Response) => {
    const rezerwacaja = await rezerwacajaModels.find();
    res.status(201).json(rezerwacaja);
})

router.put('/:id',async (req:Request, res:Response) => {
    const rezerwacaja = await rezerwacajaModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(rezerwacaja);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const rezerwacaja = await rezerwacajaModels.findByIdAndDelete(req.params.id)
    res.status(201).json(rezerwacaja);
})

module.exports = router;