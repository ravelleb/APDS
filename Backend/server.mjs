import express from "express";
const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
res.send('I am finally figuing this out, no more crying')
})

//start the express server
app.listen(PORT);