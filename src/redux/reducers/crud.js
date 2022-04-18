const initialState = [];
const singleState = {};

const crudOp = (state = initialState,action)=>{
   
    switch(action.type){
        case 'allData':
            let copyArr= state;
            copyArr.push(action.payload)
            state=copyArr
            return state
        
        // case 'singleData':
        //     console.log(state[action.payload]);
        //     return

        case 'deleteData':
            let deleteArr= state;
            deleteArr.splice(action.payload,1)
            // console.log("<<<><><><>><><>< Delete Data action");
            // let updatedState = state.splice(action.payload,1);
            // action.payload != null? state[action.payload] = null: state = state
            // console.log(state);
            state = deleteArr
            return state;
            
        default: 
            return state;
    }
}
const editOp = (state = singleState,action)=>{

    switch(action.type){
        case 'singleData':
            let data = initialState[action.payload];
            // console.log(data);
            state.name = data.name;
            state.email = data.email;
            state.age = data.age;
            state.phone = data.phone;
            // state.index = action.payload;

            // console.log(typeof(state))
            // console.log(">>>>>>>>>>>>>>>>>>",state);
            return state;

        default:
            return state;
    }
}


export default crudOp;
export {editOp};
