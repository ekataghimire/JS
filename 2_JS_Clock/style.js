const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
//1.create a function setDate
function setDate() {
    // console.log('hi'); //3.This is to check whether it is giving hi everysecond or not 
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegres = ((seconds / 60) * 360) + 90;  //4. making the seconds in the degree 
    secondHand.style.transform = `rotate(${secondsDegres}deg)`;
    // console.log(seconds);

    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegree}deg)`;

    const hour = now.getHours();
    const hoursDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

}

//2.run something everysecond - we use the setInterval 
setInterval(setDate, 1000);