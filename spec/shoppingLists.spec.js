const Shopping = require("../src/shopping.js")

describe("Show Shopping List", () => {

    it("Single Shopping List", () => {
        const myShop = new Shopping();
        const shoppingLists = 
            [{
                'productName': 'Chocolate',
                'price': 1.50,
                'quantity': 2
            }]
        
        const expected = [
            [{
                'productName': 'Chocolate',
                'price': 1.50,
                'quantity': 2
            }],
            { 'total': 3 }
        ]
        myShop.addShopping(shoppingLists)
        expect(myShop.shoppingLists).toEqual(expected)
    })
    it("2 products In Shopping List", () => {

        const myShop = new Shopping();
        const shoppingLists = [
            {
                'productName': 'Chocolate',
                'price': 1.50,
                'quantity': 2
            },
            {
                'productName': '4 pints Milk',
                'price': 2,
                'quantity': 1
            },
        ]
        const expected = [
            {
                'productName': 'Chocolate',
                'price': 1.50,
                'quantity': 2
            },
            {
                'productName': '4 pints Milk',
                'price': 2,
                'quantity': 1
            },
            { 'total': 5 }
        ]
        myShop.addShopping(shoppingLists)
        expect(myShop.shoppingLists).toEqual(expected)

    })
    it("3 products In Shopping List", () => {

        const myShop = new Shopping();
        const shoppingLists = [
            {
                'productName': 'Chocolate',
                'price': 1.50,
                'quantity': 2
            },
            {
                'productName': '4 pints Milk',
                'price': 2,
                'quantity': 1
            },
            {
                'productName': '4 pack Toilet papers',
                'price': 3.20,
                'quantity': 20
            },
        ]
        const expected =
            [
                {
                    'productName': 'Chocolate',
                    'price': 1.50,
                    'quantity': 2
                },
                {
                    'productName': '4 pints Milk',
                    'price': 2,
                    'quantity': 1
                },
                {
                    'productName': '4 pack Toilet papers',
                    'price': 3.20,
                    'quantity': 20
                },
                { 'total': 69 }
            ]
        myShop.addShopping(shoppingLists)
        expect(myShop.shoppingLists).toEqual(expected)

    })


})

