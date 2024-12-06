import {Schema, model} from "mongoose"; //quite la s de models

export const MotosEsquema = new Schema({
    Marca:{
        type:String
    },
    Modelo: {
        type: String
    },
    Año:{
        type: Number
    },
})

export const modeloMoto = new model("Tabla de motos", MotosEsquema);
