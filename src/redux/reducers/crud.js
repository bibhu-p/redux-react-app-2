const initialState = [{name:"user1",
email:'user1@gmail.com',
age:21,
phone:1324567980,
},
{name:"user2",
email:'user2@gmail.com',
age:21,
phone:1324567980,
}];
// const singleData = {};

const crudOp = (state = initialState,action)=>{
    // const len = state.length;
    // const data = action.payload;
    switch(action.type){
        case 'allData':
            // console.log(action.payload);
            let copyArr= state;
            copyArr.push(action.payload)
            state=copyArr
            return state
        // case 'singleData': 
        //     return state;
        default: 
            return state;
    }
}

export default crudOp;