import React from 'react'
import './style.css'
import {Container , Grid , Card , Icon , Divider } from 'semantic-ui-react'
// var FontAwesome = require('react-fontawesome');
import {useSelector , useDispatch} from 'react-redux'
import {Delete, Pin , DelPin , UnPin} from '../../Actions'

const TaskView = () => {
const other = useSelector(state => state.KeepNoteTasks)
const pinned = useSelector(pinn => pinn.Pinned)
const update = useDispatch()

 return (
<Container style={{marginTop : '30px'}} >
  {other.length < 1 && pinned.length <1 &&
  <h3 style={{color : 'white'}}>No Task Added</h3> }


{pinned.length  > 0 && 
  <Grid  columns={4}>
  
    <Grid.Row>   
    <h5 style={{color : 'white'}}>Pinned</h5>
  {pinned.map((element , i )=> (

<Grid.Column>
<div className="cardView"> 
  <div style={{width : '100%' , display : 'flex' , paddingRight:'20px'}}>
  <h3 readOnly>{element.title}</h3>
  <Icon name="pin" inverted link={true} circular  className="iconTack"  onClick={() => {update(UnPin(element.id, element.title , element.value))}}   />
  </div>
  <p>{element.value}</p>

<Icon  name='close' link className="iconBottom" onClick={() => {update(DelPin(element.id, element.title , element.value))}}  />

  </div>

  </Grid.Column>
  ))}
  </Grid.Row>
</Grid> }


  

{other.length > 0 ?
<Grid  columns={4}>
  <Grid.Row>
  <h5 style={{color : 'white'}}>Others</h5>
  {other.map((element , i )=> (
  <Grid.Column>
    {console.log(element.id + " " + element.title+ " " + element.value)}
  <div className="cardView"  > 
    <div style={{width : '100%' , display : 'flex' , paddingRight:'20px'}}>
    <h3 readOnly>{element.title}</h3>
    <Icon name="pin" inverted link={true} circular  className="iconTack"  onClick={() => {update(Pin(element.id, element.title , element.value))}}   />
    </div>
    <p>{element.value}</p>


  

  <Icon  name='close' link className="iconBottom" onClick={() => {update(Delete(element.id))}} />

    </div>
  
    </Grid.Column>
  ))}
  </Grid.Row>
  </Grid> 
  
 :  null }


       </Container>
    )
}


export default TaskView