let Taskid = -1 
let iState = []
let pinned = []
let combine = []


export const KeepNoteTasks = (state = iState , action) => {
    switch(action.type){
        case "TaskAdd":
            {
                Taskid++

                combine = [...combine , {
                    id  : Taskid , 
                    title : action.title , 
                    value : action.value , 
                    pin : false
                }]
                console.log("Combine Array")
                console.log(combine)
                state = [...combine]     


                //Ni Smjh ari other wala tab bnanay ki 
                // state = []
                // let count = 0
                // for(var i =0 ; i<iState.length ;i++)
                // {
                //     if(iState[i].pin == false)
                //     {   
                //         state.push(iState[i])
                //     }
                // }
                // iState = [...state]
                //Ni Smjh ari other wala tab bnanay ki 
                


                console.log("State")
                // iState = [...combine]
                console.log([...state])
                
                return [...state ]
            }
            case "DELETE" :
                {
                    for(var i=0 ; i < state.length ; i++ )
                    {
                        if(state[i].id === action.id)
                        {
                            state.splice(i , 1)
                        }
                    }
                
                    combine = []
                    combine = [...state]
                    return [...state]

                }
                
        
            default : {

            return [...state]
        }
    }
}

export const Pinned = (pinn = pinned , act)=>
{
    switch(act.type){
    case "PIN" :
            {
                console.log("Combine Array Pinn")
                console.log([...combine])
                combine[act.id].pin = true
                pinn = []
                for(var i =0 ; i<combine.length ;i++)
                {
                    if(combine[i].pin)
                    {   
                       pinn.push(combine[i]) 
                    }
                }
    
                console.log("Pinn Array")
                console.log([...pinn])
                pinned = [...pinn]
                return [...pinn]

                // console.log(act.id)
                // console.log(combine[act.id].id)
                

                //    state = [...state , {
                //     id : act.id,
                //     title : act.title ,
                //     value : act.value 
                // }]
                // console.log([...combine])               
                // for(var i=0 ; i < combine.length ; i++ )
                // {
                //     if(combine[i].id === act.id)
                //     {
                //         combine.splice(i , 1)
                //     }
                // }
                // console.log([...combine])

                // console.log(act.id)
                // console.log(state[act.id])

                // return state
                

                // return iState

            }
            case "UNPINNED" :
                {
                    console.log("Combine Array Pinn")
                    console.log([...combine])
                    combine[act.id].pin = false
                    pinn = []
                    for(var i =0 ; i<combine.length ;i++)
                    {
                        if(combine[i].pin)
                        {   
                           pinn.push(combine[i]) 
                        }
                    }
        
                    console.log("Pinn Array")
                    console.log([...pinn])
                    pinned = [...pinn]
                    return [...pinn]
                }
            case "DELPINNED" : 
            {
                
                for(var i=0 ; i < pinned.length ; i++ )
                {
                    if(pinned[i].id === act.id)
                    {
                        pinned.splice(i , 1)
                    }
                }
            
                pinn = []
                pinn = [...pinned]
                return [...pinn]


            }
    default :
            return pinned
    }
}