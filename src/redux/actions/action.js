export const allUser =(data)=>{
    // console.log(data);
    return {
        type :'allData',
        payload:data,
        
    }
}

export const singleUser =(userIndex)=>{
    return{
        type : 'singleData',
        payload:userIndex,
    }
}
