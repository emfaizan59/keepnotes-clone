export const Delete = (id) => {
    return ({
        type : "DELETE" , 
        id : id
    })
}


export const Pin = (id , title , value) => {
    return ({
        type : "PIN" , 
        id : id , 
        title : title ,
        value : value
    })
}


export const DelPin = (id , title , value) => {
    return ({
        type : "DELPINNED" , 
        id : id ,
        title : title ,
        value : value
    })
}


export const UnPin = (id , title , value) => {
    return ({
        type : "UNPINNED" , 
        id : id ,
        title : title ,
        value : value
    })
}
