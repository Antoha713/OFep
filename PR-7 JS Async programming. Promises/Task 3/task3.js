function main(callback1, callback2) {
   
    setTimeout(() => {
      callback1();
      console.log("callback1 executed asynchronously after 2 seconds");
    }, 2000);
  
    let intervalId = setInterval(callback2, 1000);
  
   
    setTimeout(() => clearInterval(intervalId), 3000);
  }
  
  function job() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("hello world"), 2000); 
    });
  }
  
  function main(data) {
    return new Promise((resolve, reject) => {
      if (typeof data !== "number") {
        reject("error");
        console.error("Data provided to main is not a number"); 
      } else if (data % 2 !== 0) {
        setTimeout(() => resolve("odd"), 1000); 
        console.log("Data is odd, resolving with 'odd' after 1 second");
      } else {
        setTimeout(() => reject("even"), 2000); 
        console.log("Data is even, rejecting with 'even' after 2 seconds");
      }
    });
  }
  
  
  main(5)
    .then(data => console.log(data)) 
    .catch(error => console.error(error)); 
  
  
  main("hello")
    .then(data => console.log(data))
    .catch(error => console.error(error)); 

    module.exports = job, main;