import React from 'react'
import { connect } from 'react-redux'
import { addBeverage } from '../actions/index'
import { Icon } from 'semantic-ui-react'

class NBeverage extends React.Component{

    handleClick = (id) => (
        this.props.addBeverage(id)
    )

    render(){
        let itemList = this.props.beverages.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title}/>
                        
                        
                    </div>

                    <div className="card-content">
                        <p className="card-title">{item.title}</p>
                        <p><b>Price: RM {item.price}</b></p>
                        <Icon className="right" link circular inverted color='red' name='add to cart' size='large' onClick={() => {this.handleClick(item.id)}}></Icon>
                    </div>
                </div>
            )
        })

        return(
            <div className="container">
                <br/>
                <h1 className="center">BEVERAGES</h1>
                <div className="box">{itemList}</div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        beverages: state.beverages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBeverage: (id) => {dispatch(addBeverage(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NBeverage)