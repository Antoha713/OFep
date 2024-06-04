function boilWater() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("water has been boiled");
        resolve();
      }, 2000);
    });
  }
  
  function addTeapack(teapack) {
    return new Promise((resolve, reject) => {
      if (!teapack) {
        reject("There is no teapack! Cannot make tea.");
      } else {
        setTimeout(() => {
          console.log("adding tea pack");
          resolve();
        }, 500);
      }
    });
  }
  
  function addSugar(sugar) {
    return new Promise((resolve, reject) => {
      if (!sugar) {
        console.log("No sugar added. You might want some for your tea."); 
      }
      setTimeout(() => {
        console.log("adding sugar");
        resolve();
      }, 2000);
    });
  }
  function sliceBread() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("bread has been sliced");
        resolve();
      }, 10000);
    });
  }
  
  function sliceSausage() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("sausage has been sliced");
        resolve();
      }, 10000);
    });
  }
  
  function addButter(butter) {
    return new Promise((resolve, reject) => {
      if (!butter) {
        reject("There is no butter for sandwich!");
      } else {
        setTimeout(() => {
          console.log("adding butter");
          resolve();
        }, 5000);
      }
    });
  }
  
  function cookBreakfast(teapack, sugar, bread, sausage, butter) {
    return Promise.all([boilWater(), sliceBread(), sliceSausage()]) 
      .then(() => Promise.all([addTeapack(teapack), addSugar(sugar), addButter(butter)]))
      .then(() => console.log("Breakfast is ready!")) 
      .catch(error => console.error("Error making breakfast:", error));
  }
  
 
  cookBreakfast("Lipton", null, "Wheat", "Sausage", "Butter");

  module.exports = boilWater, addTeapack, addSugar, sliceBread, sliceSausage, addButter, cookBreakfast;