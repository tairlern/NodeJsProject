import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser";
import LinksRouter from './Routers/LinksRouter.js';
import UserRouter from './Routers/UserRouter.js';
import connectDB from './database.js';
import redirectLinkRouter from './Routers/redirectLinkRouter.js';

connectDB();
const port = 3000;
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.text());


app.use('/links',LinksRouter)
app.use('/user',UserRouter)
app.use('/redirectLink',redirectLinkRouter)

console.log("hi")
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
