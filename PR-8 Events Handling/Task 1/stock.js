const evt = require('events');



let storage = {};
 storage['dress'] = 1;
 storage['t-shirt'] = 9;
 storage['pants'] = 4;
 storage['socks'] = 12;

function checkAvailability(key){



    return key in storage
 }


class Stock extends evt {
    constructor() {
        super();
    }

    availability(name,value){
        this.emit('availability')
        if (name in storage ) {
            this.emit('item_bool')
            if(storage[name] >= value){
            console.log('Дана кількість товару є в наявності: ' + value);
            return true;
        }
        else{
            console.log('Недостатня кількість товару на складі'); 
            return false;
        }
            
        } 
        else {
            console.log('Товара немає в наявності'); 
            return false;
        }
       
    }


}module.exports = Stock