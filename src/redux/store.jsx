import { createStore } from "redux";
import { todoReducer} from '../reducer/todoReducer'
import { AGREGAR } from "../types/types";



const store = createStore(todoReducer)

console.log(store)


export default store