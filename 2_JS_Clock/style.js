const secondHand = document.querySelector('.second-hand');
//1.create a function setDate
function setDate() {
    // console.log('hi'); //3.This is to check whether it is giving hi everysecond or not 
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegres = ((seconds / 60) * 360);  //4. making the seconds in the degree 
    console.log(seconds);
}

//2.run something everysecond - we use the setInterval 
setInterval(setDate, 1000);