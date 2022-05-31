class Shopping {

    constructor(shoppingLists=[], total = 0) {
        this.shoppingLists = shoppingLists;
        this.total = total;
    }
    getMyShopping() {
        return {
            shoppingLists: this.shoppingLists,
            total: this.total
        };
      }
    addShopping(newShoppingList){
       
       let myNewLists = this.shoppingLists;
       let myArray=[]
       let total=0;
       let newTotal = this.total;
      
       if(newShoppingList.length === 1){
        myNewLists.push(newShoppingList)
        console.log(newShoppingList[0].price);
        total = newShoppingList[0].price*newShoppingList[0].quantity;
        newTotal += total;
        myNewLists.push({total:newTotal});    
        return myNewLists;
       }

        for (const iterator of newShoppingList){
            
            myNewLists.push(iterator)
            total = iterator.price*iterator.quantity;
            newTotal += total;
        
        }
        myNewLists.push({total:newTotal});   
       
       return myNewLists;
    }
    isEmptyObject(object) {
        return Object.keys(object).length === 0;
    }

}

const myShop = new Shopping();
const shoppingInBasket =[
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
    }
]

console.log(myShop.addShopping(shoppingInBasket));
/*
module.exports = {
    Shopping:Shopping,
};*/
module.exports = Shopping