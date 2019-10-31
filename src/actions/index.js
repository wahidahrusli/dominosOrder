import {
    COMBINE_PIZZA,
    ADD_BEVERAGE, 
    ADD_SIDE, 
    REMOVE_ITEM
} from './actionType'

export const combinePizza = (sizeId, crustId, toppingId) => {
    return {
        type: COMBINE_PIZZA,
        sizeId,
        crustId,
        toppingId
    }
}

export const addBeverage = (id) => {
    return {
        type: ADD_BEVERAGE,
        id
    }
}

export const addSide = (id) => {
    return {
        type: ADD_SIDE,
        id
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}