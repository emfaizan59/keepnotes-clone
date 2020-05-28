import React from 'react'
import {Container , Input , Grid , Icon , Image, Header} from 'semantic-ui-react'
const HeaderView = () => {
    return (

        <Container fluid style={{ height : '80px' ,backgroundColor : '#2b2b26' , borderBottom : '1px solid #595954'}} >
            <Grid>
                <Grid.Column floated='right'  width={3}  >
                <div style={{display : 'flex'  }}>
              <Image src='./images/keep.png' style={{width : '60px' , height : '60px'}}  />
                <Header as="h2" style={{margin : '15px 0px 0px 15px' , }} inverted>Keep Notes</Header>
                </div>
                </Grid.Column>
                <Grid.Column width={8} >
                <input placeholder="Search"  style={{width:'100%' , height:'45px' , borderRadius :'10px' , 
                backgroundColor:'#383834' , 
               border : '1px solid #595954' , 
               marginTop : '10px',
               color : 'white' , 
               outline : 'none',
               paddingLeft : '10px' 
            }}  />
                </Grid.Column>
                <Grid.Column floated='right' width={4}>
                <div style={{display : 'flex' , height: '70px' , marginTop : '5px' }}>
                <Image circular src='./images/elliot.jpg' style={{width : '45px' , height : '45px'}}  />
                <Header as="h5" style={{margin : '15px 0px 0px 15px' , }} inverted>user@ygmail.com</Header>
                </div>
                </Grid.Column>
            </Grid>
        </Container>
    )
}


export default HeaderView