const mainFun = require('./module.js'); 
 
mainFun(callback1,callback2);

function callback1(){
    setTimeout(() => console.log("a"), 2000);;
}
function callback2(){
   let timerId= setInterval(() => console.log('тік'), 1000)
    setTimeout(() => { clearInterval(timerId); }, 4000);
}



