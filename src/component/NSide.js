import React from 'react'
import { connect } from 'react-redux'
import { addSide } from '../actions/index'
import { Card, Image, Container, Header, Button, Segment } from 'semantic-ui-react'

class NSide extends React.Component{
    
    handleClick = (id) => (
        this.props.addSide(id)
    )

    render(){
        let itemList = this.props.sides.map(item => {
            return (
                <Card key={item.id}>
                    <Image src={item.img} />

                    <Card.Content>
                        <Card.Header>{item.title}</Card.Header>
                        <Card.Description>Price: RM {item.price}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button 
                            fluid
                            content='Add To Cart'
                            positive
                            onClick={() => {this.handleClick(item.id)}}
                        />
                    </Card.Content>
                </Card>
            )
        })
        return(
            <div>
                <Container>
                    <Header as='h1' textAlign='center' attached='top'>SIDES</Header>
                    <Segment attached>
                        <Card.Group centered>
                            {itemList}                  
                        </Card.Group>
                    </Segment>
                    
                    
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sides: state.sides
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSide: (id) => {dispatch(addSide(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NSide) 