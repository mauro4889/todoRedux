import { AGREGAR } from "../types/types";



export const actionAgregar = text =>{
    return {
        type: AGREGAR, 
        payload: text
    }
}
