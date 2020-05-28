import {combineReducers} from 'redux'
import {KeepNoteTasks , Pinned} from  "./NoteReducer"



export const allReducer = combineReducers({
    KeepNoteTasks , 
    Pinned
})

