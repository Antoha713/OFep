function main(callback1, callback2) {
    // Call callback1 asynchronously after 2 seconds
    setTimeout(() => callback1(), 2000);
  
    // Call callback2 three times with an interval of 1 second
    let intervalId = setInterval(callback2, 1000);
  
    // Optionally, clear the interval after the third call (3 seconds)
    setTimeout(() => clearInterval(intervalId), 3000);
  }
  
  function job() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("hello world"), 2000); // Resolve after 2 seconds with "hello world"
    });
  }
  
  // Call the main function to trigger asynchronous execution
  main(() => {
    console.log("callback1 executed asynchronously after 2 seconds");
  }, () => {
    console.log("callback2 executed every 1 second (3 times)");
  });
  
  // Call the job function to demonstrate promise resolution
  job()
    .then(data => console.log(data)) // Log "hello world" after 2 seconds (promise resolved)
    .catch(error => console.error(error)); // Handle potential errors (not applicable here)
module.exports = main;