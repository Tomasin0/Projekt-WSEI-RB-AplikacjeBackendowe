import  express  from "express";
import mongoose from "mongoose";
import { main } from "./db";

const app = express();
app.use(express.json())

main();

const danie = require('./routes/danieRouter');
app.use('/dania', danie);

const pracownik = require('./routes/pracownikRouter');
app.use('/pracownik', pracownik);

const produkt = require('./routes/produktRouter');
app.use('/produkty', produkt);

const restauracja = require('./routes/restauracjaRouter');
app.use('/restauracje', restauracja);

const rezerwacaja = require('./routes/rezerwacjaRouter');
app.use('/rezerwacaje', rezerwacaja);

const stolik = require('./routes/stolikRouter');
app.use('/stoliki', stolik);

const zamowienie = require('./routes/zamowienieRouter');
app.use('/zamowienia', zamowienie);


app.listen(3000)