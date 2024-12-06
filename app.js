import { testMoto } from "./backend/controllers/motos.controller.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"; //le faltaba el cierre de comillas

const app = express() //Lo puse al inicio

dotenv.config();
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Conexion a la base funcionando");
})
.catch((error)=>{ // En lugar de cuchaw le puse catch
    console.log("Error en la conexion de la base");
})


app.use(cors());
app.listen(4000, ()=>{
    console.log("Escuchando correctamente el servidor");
})

testMoto(); //le puse test

//cambie el no hay un problema aqui, por nodemon app
//le cambie los dos puntos por el igual