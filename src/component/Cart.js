import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon, Button } from 'semantic-ui-react'
import Payment from './Payment'

import { 
    removeItem
} from '../actions/index'

class Cart extends React.Component{
    
    handleRemove = (id) => {this.props.removeItem(id)}
    handleAddQty = (id) => {this.props.addQty(id)}
    handleSubQty = (id) => {this.props.subQty(id)}

    render() {

        let addedItem = this.props.orderList.length ? (
            this.props.orderList.map (item => {
                return(
                    <li className="collection-item avatar" key={item.id}>
                        <div className="item-img">
                            <img src={item.img} alt={item.title}/>
                        </div>

                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                            <p><b>Price: RM {item.price}</b></p>
                            <p><b>Quantity: {item.quantity}</b></p>

                            <Button onClick={() => {this.handleRemove(item.id)}}>Remove</Button>
                        </div>
                    </li>
                )
            }) 
        ) : (
            <p>No item in list</p>
        )

        return (
            <div className="container">
                <div className="cart">
                    <h1>You have ordered: </h1>
                    <ul className="collection">{addedItem}</ul>
                </div>
            <Payment/>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        orderList: state.orderList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {dispatch(removeItem(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)