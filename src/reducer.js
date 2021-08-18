export const initialState={
    basket: [],
    user : "Sign In",
};




function reducer(state, action){
    console.log(action);
    console.log(state);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user,
            }
        case "ADD_TO_BASKET":
            //add to basket
            
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
            break;
        case "REMOVE_FROM_BASKET":
            //remove
            let newBasket =[...state.basket];

            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id)

            
            if(index >=0){
                newBasket.splice(index,1)
            //item exists , remove
            }
            else{
                console.log("can't remove")
            }

            return { 
            ...state,
            basket: newBasket,    
            };

            break;
        default:
            return state ;
    }
}

export default reducer