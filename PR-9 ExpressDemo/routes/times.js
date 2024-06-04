const express = require("express");

const router = express.Router();


router.route('/').get((req,res) => {
   
        const timestamp = Date.now(); // Отримати мілісекунди з 1 січня 1970 року
        const date = new Date(timestamp); // Створити об'єкт Date з мілісекундами
      
        const hours = date.getHours(); // Отримати години
        const minutes = date.getMinutes(); // Отримати хвилини
        const seconds = date.getSeconds(); // Отримати секунди
      
        const formattedTime = `${hours}:${minutes}:${seconds}`; // Форматувати час
      
      
    // res.send('<h1>Hello Times</h1>');
    res.send('<h1>Hello Times</h1>' + '<h2>' + formattedTime + '</h2>'); // Вивести час у консоль
})

module.exports = router;