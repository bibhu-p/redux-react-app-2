const initialState = [];
// const singleData = {};

const crudOp = (state = initialState,action)=>{
   
    switch(action.type){
        case 'allData':
            let copyArr= state;
            copyArr.push(action.payload)
            state=copyArr
            return state
        
        case 'singleData':
            console.log(state[action.payload]);
            return
            
        default: 
            return state;
    }
}

export default crudOp;