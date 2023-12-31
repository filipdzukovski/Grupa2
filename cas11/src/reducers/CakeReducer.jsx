import { BUY_CAKE,RESTOCK_CAKES } from "../constants/CakeConstants";

const initialState = {
    cakes: 10,
    //message:undefined -> 
    //da se dodade varijabla koja koga 
    //ke se klikne poveke torti 
    //nego sto ima da priakze poraka za greska
    //pr. klik na buy 3 cakes a ima samo 2
    // message: Not Enough cakes. Only 2 cakes left 
}

const CakeReducer = (state=initialState,action) => {

    switch(action.type){

        case BUY_CAKE:
            return{
                ...state,
                cakes: state.cakes - action.payload // 1
            }
        case RESTOCK_CAKES:
            return{
                ...state,
                cakes: state.cakes + action.payload
            }

        default: return state;
    }
}

export default CakeReducer;