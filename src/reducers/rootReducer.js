import initState from './initState'

import {
    COMBINE_PIZZA,
    ADD_BEVERAGE,
    ADD_SIDE,
    REMOVE_ITEM
} from '../actions/actionType'

const rootReducer = (state = initState, action) => {

    if (action.type === COMBINE_PIZZA){
        let choosenSize = state.sizes.find(item => item.id === Number(action.sizeId))
        let choosenCrust = state.crusts.find(item => item.id === Number(action.crustId))
        let choosenTopping = state.toppings.find(item => item.id === Number(action.toppingId))

        let pizzaId = choosenTopping.id
        let pizzaPrice = choosenSize.price + choosenCrust.price
        let pizzaTitle = choosenSize.value + " | " + choosenCrust.value + " | " + choosenTopping.value
        let pizzaImg = choosenTopping.img

        return {
            ...state,
            total: state.total + pizzaPrice,
            orderList: [...state.orderList, {
                id: pizzaId,
                title: pizzaTitle,
                price: pizzaPrice,
                img: pizzaImg,
                quantity: 1,
                value: 'pizza'
            }]
        }
    }

    if (action.type === ADD_BEVERAGE){
        let addedItem = state.beverages.find(item => item.id === action.id)
        let existed_item = state.orderList.find(item => action.id === item.id)

        if (existed_item){
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1
            return {
                ...state,
                orderList: [...state.orderList, addedItem],
                total: state.total + addedItem.price
            }
        }
        
        
    }

    if (action.type === ADD_SIDE){
        let addedItem = state.sides.find(item => item.id === action.id)
        let existed_item = state.orderList.find(item => action.id === item.id)

        if (existed_item){
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1
            return {
                ...state,
                orderList: [...state.orderList, addedItem],
                total: state.total + addedItem.price
            }
            
        }
    }

    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.orderList.find(item => action.id === item.id)
        let new_items = state.orderList.filter(item => action.id !== item.id)

        return {
            ...state,
            orderList: new_items,
            total: state.total - (itemToRemove.price * itemToRemove.quantity)
        }
    }
 
    return state
    
}

export default rootReducer