export const allUser =(data)=>{
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

export const deleteUser =(userIndex)=>{
    return{
        type : 'deleteData',
        payload:userIndex,
    }
}