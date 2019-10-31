import React from 'react'
import { connect } from 'react-redux'
import { Header, Image, Container, Segment, Grid, Button, Transition, Icon, Dropdown, GridRow } from 'semantic-ui-react'

import { combinePizza } from '../actions/index'

class Pizza extends React.Component {

    state = {
        sizeId: this.props.sizes[0].id,
        sizeValue: this.props.sizes[0].value,

        crustId: this.props.crusts[0].id,
        crustValue: this.props.crusts[0].value,

        toppingId: this.props.toppings[0].id,
        toppingValue: this.props.toppings[0].value
    }

    handleChangeSize = (e, { value }) => {
        this.setState({
            sizeId: e.target.id,
            sizeValue: value
        })
    }

    handleChangeCrust = (e, { value }) => {
        this.setState({
            crustId: e.target.id,
            crustValue: value
        })
    }

    handleChangeTopping = (e, { value }) => {
        this.setState({
            toppingId: e.target.id,
            toppingValue: value
        })
    }

    handleClick = (sizeId, crustId, toppingId) => {
        
        this.props.combinePizza(sizeId, crustId, toppingId)
    }


    render(){
        let sizeImg = this.props.sizes.map(item => {
            return(
                <Grid.Column>
                    <Image centered src={item.img} />
                </Grid.Column>
            )
        })

        let sizeDesc = this.props.sizes.map(item => {
            return (
                <Grid.Column>
                <Header as='h3' textAlign='center'>
                    {item.text}
                    <Header.Subheader>From RM {item.price}</Header.Subheader>
                </Header>
            </Grid.Column>
            )
        })

        let crustImg = this.props.crusts.map(item => {
            return(
                <Grid.Column>
                    <Image centered src={item.img} />
                </Grid.Column>
            )
        })
    
        let crustDesc = this.props.crusts.map(item => {
            return (
                <Grid.Column>
                    <Header as='h3' textAlign='center'>
                        {item.text}
                        <Header.Subheader>From RM {item.price}</Header.Subheader>
                    </Header>
                </Grid.Column>
            )
        })

        let topping = this.props.toppings.map(item => {
            return (
                <Grid.Column>
                    <Image centered src={item.img} rounded/>
                    <Header as='h3' textAlign='center'>
                        {item.text}
                    </Header>
                    <br/>
                </Grid.Column>
            )
        })

        return(
            <div>
                <Container>
                    <Header as='h2' attached='top' textAlign='center'>Select Pizza Size...</Header>
                    <Segment attached>
                        <Grid columns={3} divided>
                            <Grid.Row>{sizeImg}</Grid.Row>
                            <Grid.Row>{sizeDesc}</Grid.Row>
                        </Grid>

                        <Dropdown 
                            fluid
                            placeholder={this.state.sizeValue}
                            selection
                            options={this.props.sizes}
                            onChange={this.handleChangeSize}
                        />

                        <Header as='h3' block>
                            <Icon name='toggle on'/>
                            You have selected {this.state.sizeValue}.
                        </Header>
                    </Segment>

                    <Header as='h2' attached='top' textAlign='center'>Select Pizza Crust...</Header>
                    <Segment attached>
                        <Grid columns={4} divided>
                            <Grid.Row>{crustImg}</Grid.Row>
                            <Grid.Row>{crustDesc}</Grid.Row>
                        </Grid>

                        <Dropdown 
                            fluid
                            placeholder={this.state.crustValue}
                            selection
                            options={this.props.crusts}
                            onChange={this.handleChangeCrust}
                        />

                        <Header as='h3' block>
                            <Icon name='toggle on'/>
                            You have selected {this.state.crustValue}.
                        </Header>                        
                    </Segment>

                    <Header as='h2' attached='top' textAlign='center'>Select Pizza Topping...</Header>
                    <Segment attached>
                        <Grid columns={3} divided>
                            <GridRow>{topping}</GridRow>
                        </Grid>

                        <Dropdown 
                            fluid
                            placeholder={this.state.toppingValue}
                            selection
                            options={this.props.toppings}
                            onChange={this.handleChangeTopping}
                        />

                        <Header as='h3' block>
                            <Icon name='toggle on'/>
                            You have selected {this.state.toppingValue}.
                        </Header>
                    </Segment>

                    <Segment>
                        <Button 
                            fluid
                            content='Add To Cart'
                            positive
                            onClick={() => {this.handleClick(this.state.sizeId, this.state.crustId, this.state.toppingId)}}
                        />
                    </Segment>

                </Container>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        sizes: state.sizes,
        crusts: state.crusts,
        toppings: state.toppings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        combinePizza: (sizeId, crustId, toppingId) => {
            dispatch(combinePizza(sizeId, crustId, toppingId))            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizza)