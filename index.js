//import http from 'http';

//http.createServer((request, response) => {
    //response.writeHead(200, {'Content-Type': 'text/html'});
   // response.write('Hello World!');
  //  response.end();
//}).listen(4000, () => {
  //  console.log('node server kører på http://localhost:4000');
//})
import dotenv from 'dotenv';
import express from 'express';
import { postRouter } from './Routes/post.router.js';
import { productRouter } from './Routes/products.router.js';
app.use(postRouter)
app.use(productRouter)
const app = express()
const port = process.env.PORT;
const host = process.env.DBHOST;
dotenv.config();

app.get("/", (req, res) => {
    res.send(host);
}) 




// app.get("/hvemeri", (req, res) => {
//     res.send("hvem er vi?");
// }) 

// app.get("/hvadkanvi", (req, res) => {
//     res.send("hvad kan vi?");
// }) 

// app.get("/findos", (req, res) => {
//     res.send("her kan du finde os");
// }) 

// app.get("/produktliste", (req, res) => {
//     res.send("produkter");
// }) 

// app.get("/produktdetaljer", (req, res) => {
//     res.send("produkt detaljer");
// }) 

// app.get("/kontaktside", (req, res) => {
//     res.send("kontakt os");
// }) 

app.use((req, res, next) => {
    res.status(404).send("siden blev ikke fundet")
})

app.listen(4242, () => {
    console.log('server kører på port 4242: http://localhost:4242')
})
