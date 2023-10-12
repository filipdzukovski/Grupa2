const initialState = {
    greeting: "Hi !",
    farewell:""
}

const SayHelloReducer = (state=initialState,action) => {

    switch(action.type){

        case "SAY_HELLO":
            return{
                ...state,
                greeting: action.payload
            }
        case "FAREWELL_USER":
            return{
                ...state,
                farewell:action.payload
            }

        default: return state;
    }

}


export default SayHelloReducer;