import React from 'react'
import "./style.css"
import {Container , Segment} from 'semantic-ui-react'
import {connect} from 'react-redux'


class TaskAdd extends React.Component {
    state = {
        view : false, 
        taskTitle : '' , 
        taskContent : '' 
    }
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    submit = () => {
        this.setState({view : false})
        this.props.storedTasks(this.state.taskTitle , this.state.taskContent)
    }
    render(){
    
    return (
        <Container centered='true'  className="main" textAlign="center"  >
     
     {this.state.view ? 
     
<div className="mainNote">
            <input name="taskTitle" placeholder="Title" onChange={this.handleChange}/>
            <textarea name="taskContent" placeholder = "Take a Note ... "  rows = '6' onChange={this.handleChange}></textarea>
            <button onClick={this.submit} >Save</button>
            <button onClick={this.submit} >Close</button>
          </div>
:
<input placeholder="Take a Note ..." className="note" onFocus={() => {this.setState({view : true})}} />
    }
 </Container>
    )
}
}

const mapsActionToProps = (dispatch) => {
        return ({
                storedTasks : (taskTitle , taskValue) => {dispatch({type : "TaskAdd" , title : taskTitle , value : taskValue})}
                
            })
}


export default connect(null , mapsActionToProps)( TaskAdd )