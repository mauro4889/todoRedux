import { AGREGAR } from "../types/types"




const initialState ={
    count: 2
}

export function todoReducer(state = initialState, action){
    switch (action.type){
        case AGREGAR:{
            return {
                count: state.count + 1
            }
        }
        default:
            return state
    }
}
