import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Radio, Header, Icon, Form, Button, Transition, Message, Dropdown } from 'semantic-ui-react'

const dateOptions = [
    {
        key: 'Today',
        text: 'Today',
        value: 'Today'
    },
    {
        key: 'Tomorrow',
        text: 'Tomorrow',
        value: 'Tomorrow'
    }
]

const timeOptions = [
    {
        key: 'Now',
        text: 'Now',
        value: 'Now'
    },
    {
        key: 'In 1 hour',
        text: 'In 1 hour',
        value: 'In 1 hour'
    },
    {
        key: 'In 2 hours',
        text: 'In 2 hours',
        value: 'In 2 hours'
    },
    {
        key: 'In 3 hours',
        text: 'In 3 hours',
        value: 'In 3 hours'
    },
]

class Payment extends Component{
    state = {
        open: false,
        value: 'cash',
        paymentMessage: '',
        visibleDelivery: false,
        visibleCheckout: false,
        visibleCheckoutSegment: false,

        dateValue:dateOptions[0].value,
        timeValue:timeOptions[0].value,
        addressValue:''
    }

    handleChange = (e, {value}) => (this.setState({value}))

    toggleDelivery = () => (this.setState({ visibleDelivery : true }))
    toggleCheckout = () => (this.setState({ visibleCheckout : true }))

    updateDate = (e, {value}) => (this.setState({ dateValue: value }))
    updateTime = (e, {value}) => (this.setState({ timeValue: value }))
    updateAddress = (e) => (this.setState({ 
        addressValue: e.target.value,
        visibleCheckoutSegment: true
     }))
    
    render() {

        let tax = this.props.total * 0.06
        let grandTotal = this.props.total + tax
        
        var visiblePayment
        if (grandTotal > 0){
            visiblePayment = true
        } else {
            visiblePayment = false
        }

        var paymentMessage
        if (this.state.value === 'cash') {
            paymentMessage = 'Payment will be done during delivery!'
        } else {
            paymentMessage = 'Payment Confirmed!'
        }

        var addressEntered
        if (this.state.addressValue.length === 0){
            addressEntered = false
        } else {
            addressEntered = true
        }

        

        return(
            <div className="container">
                <Segment>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                        <p>Sub Total:</p>
                        <p>Service Tax (6%):</p>
                        <p><b>Grand Total:</b></p>                        
                        </Grid.Column>
                        <Grid.Column>
                        <p>RM {this.props.total.toFixed(2)}</p>
                        <p>RM {tax.toFixed(2)}</p>
                        <p><b>RM {grandTotal.toFixed(2)}</b></p>
                        </Grid.Column>                                
                    </Grid>
                </Segment>

                <Transition visible={this.state.visibleDelivery === false && visiblePayment === true}>
                <Segment>
                    <Header as='h4' className="center">
                        <Icon name='payment' />
                        Payment Method
                    </Header>
                    <Form>
                        <Form.Field>
                            <Radio 
                                label= 'Cash On Delivery'
                                name='method'
                                value='cash'
                                checked= {this.state.value === 'cash'}
                                onChange= {this.handleChange}
                                disabled= {this.visibleDelivery}
                            />
                        </Form.Field>
                        <Form.Field >
                            <Radio 
                                defaultChecked
                                label= 'Online Banking'
                                name='method'
                                value='online'
                                checked= {this.state.value === 'online'}
                                onChange= {this.handleChange}
                                disabled= {this.visibleDelivery}
                            />
                            
                            
                        </Form.Field>
                    </Form>
                    <br/>
                    
                        <Button
                            fluid 
                            content='Proceed'
                            positive
                            onClick={this.toggleDelivery}
                            disabled={this.state.visibleDelivery === true}
                        />
                </Segment>
                
                </Transition>

                <Transition visible={this.state.visibleDelivery}>
                    <Segment>
                        <Header as='h3' block>
                            <Icon name='check' />
                            {paymentMessage}
                            
                        </Header>

                    
                        <Header as='h4' className="center">
                            <Icon name='motorcycle'/>
                            Delivery Details
                        </Header>

                        <Form>
                            Date:
                            <Dropdown 
                                fluid
                                selection
                                options={dateOptions}
                                placeholder={this.state.dateValue}
                                value={this.state.dateValue}
                                onChange={this.updateDate}
                            />

                            <br/>
                            Time:
                            <Dropdown 
                                fluid
                                selection
                                options={timeOptions}
                                placeholder={this.state.timeValue}
                                value={this.state.timeValue}
                                onChange={this.updateTime}
                            />

                            <br/>
                            <Form.TextArea 
                                label='Address' 
                                placeholder='Enter your full address...'
                                value={this.state.addressValue}
                                onChange={this.updateAddress}
                            />

                            <Transition visible={this.state.visibleCheckoutSegment}>
                            <Form.Button
                                fluid 
                                content='CHECKOUT'
                                positive
                                size='big'
                                onClick={this.toggleCheckout}
                                disabled={this.state.visibleCheckout === true && addressEntered === false}
                            />
                            </Transition>
                            
                        </Form>
                    </Segment>
                </Transition>

                <Transition visible={this.state.visibleCheckout}>
                    <Segment>
                        <Header as='h3' block>

                            <Message success header='ORDER CONFIRMED!' content="
                            Thank you for ordering with us. Have a nice day!
                            " />

                            <p>Date: {this.state.dateValue}</p>
                            <p>Time: {this.state.timeValue}</p>
                            <p>Address: {this.state.addressValue}</p>
                        </Header> 

                    </Segment>
                </Transition>

                

            </div>

            

        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        orderList: state.orderList,
        total: state.total
    }
}

export default connect(mapStateToProps)(Payment)