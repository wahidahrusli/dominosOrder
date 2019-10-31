import imgPersonal from '../images/size/personal.PNG'
import imgRegular from '../images/size/regular.PNG'
import imgLarge from '../images/size/large.PNG'

import imgClassic from '../images/crust/classic_hand_tossed.PNG'
import imgThin from '../images/crust/crunchy_thin_crust.PNG'
import imgNY from '../images/crust/new_york_crust.PNG'
import imgCheeseBurst from '../images/crust/cheese_burst.PNG'

import imgCheese from '../images/topping/simply_cheese.jpg'
import imgPepperoni from '../images/topping/chicken_pepperoni.jpg'
import imgSeafood from '../images/topping/seafood_delight.png'
import imgMeatasaurus from '../images/topping/meatasaurus.png'
import imgPrawn from '../images/topping/prawn_sensation.png'
import imgVegie from '../images/topping/vegie_fiesta.png'

import imgMineral from '../images/mineral_water.jpg'
import imgPepsi from '../images/pepsi_cola.jpg'
import imgLipton from '../images/lipton_ice_tea_lemon.jpg'
import imgTwister from '../images/twister_orange.jpg'

import imgBreadstix from '../images/side/breadstix.png'
import imgLavaCake from '../images/side/chocolate_lava_cake.png'
import imgLasagna from '../images/side/chicken_lasagna.jpg'
import imgWings from '../images/side/royale_chicken_wings.jpg'
import imgSpaghetti from '../images/side/spaghetti.jpg'

const initState = {
    sizes: [
        {
            id: 1,
            text: "PERSONAL 6 inch",
            value: "Personal",
            price: 10,
            img: imgPersonal
        },
    
        {
            id: 2,
            text: "REGULAR 9 inch",
            value: "Regular",
            price: 20,
            img: imgRegular
        },
        
        {
            id: 3,
            text: "LARGE 12 inch",
            value: "Large",
            price: 30,
            img: imgLarge
        }
        
    ],

    crusts : [
        {
            id: 1,
            text: "Classic Hand Tossed",
            value: "Classic Hand Tossed",
            price: 0,
            img: imgClassic
        },
    
        {
            id: 2,
            text: "Crunchy Thin Crust",
            value: "Crunchy Thin Crust",
            price: 2,
            img: imgThin
        },
        
        {
            id: 3,
            text: "New York Crust",
            value: "New York Crust",
            price: 2,
            img: imgNY
        },
        
        {
            id: 4,
            text: "Cheese Burst Crust",
            value: "Cheese Burst Crust",
            price: 5,
            img: imgCheeseBurst
        }
    ],

    toppings: [
        {
            id: 1,
            text: "Simply Cheese",
            value: "Simply Cheese",
            img: imgCheese
        },
    
        {
            id: 2,
            text: "Chicken Pepperoni",
            value: "Chicken Pepperoni",
            img: imgPepperoni
        },
        
        {
            id: 3,
            text: "Seafood Delight",
            value: "Seafood Delight",
            img: imgSeafood
        },
    
        {
            id: 4,
            text: "Meatasaurus",
            value: "Meatasaurus",
            img: imgMeatasaurus
        },
    
        {
            id: 5,
            text: "Prawn Sensation",
            value: "Prawn Sensation",
            img: imgPrawn
        },

        {
            id: 6,
            text: "Vegie Fiesta",
            value: "Vegie Fiesta",
            img: imgVegie
        }


    ],

    pizzas: [],
    
    sides: [
        {
            id: 1,
            title: "Breadstix",
            price: 7,
            img: imgBreadstix
        },
            
        {
            id: 2,
            title: "Chocolate Lava Cake",
             price: 10,
            img: imgLavaCake
        },
            
        {
            id: 3,
            title: "Chicken Lasagna",
            price: 12,
            img: imgLasagna
        },
            
        {
            id: 4,
             title: "Royale Chicken Wings",
             price: 13,
            img: imgWings
        },
            
        {
            id: 5,
            title: "Spaghetti Bolognese Chicken",
            price: 12,
            img: imgSpaghetti
        }
    ],

    beverages: [
        {
            id: 1,
            title: "Mineral Water",
            price: 2,
            img: imgMineral
        },
        
        {
            id: 2,
            title: "Pepsi Cola",
            price: 5,
            img: imgPepsi
        },

        {
            id: 3,
            title: "Lipton Ice Tea-Lemon",
            price: 8,
            img: imgLipton
        },

        {
            id: 4,
            title: "Twister Orange",
            price: 10,
            img: imgTwister
        }
    ],

    orderList: [],
    total: 0
}

export default initState