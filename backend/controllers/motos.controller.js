import { modeloMoto } from "../models/motos.model.js"; //En el modelo le puse la 'o' que faltaba //le agregue el .js

modeloMoto.create({
    Marca:"Honda",
    Modelo:"CBR600",
    Año:2001 // le quite el texto y le puse el numero
}
)

export const testMoto = ()=>{console.log("Funciona el controlador de moto");
}