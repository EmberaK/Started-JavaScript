let userTime;
do{
    userTime = Number(prompt('Enter seconds, please', '85'));
} while(isNaN(userTime));

function transformationInMinutesAndSeconds(seconds){
    const secondsInTimer = seconds % 60; 
    const totalMinutes = Math.floor(seconds / 60);
    const hoursInTimer = Math.floor(totalMinutes / 60);
    const minutesInTimer = totalMinutes % 60;
    return `${hoursInTimer >= 10? '':'0'}${hoursInTimer}:${minutesInTimer >= 10? '':'0'}${minutesInTimer}:${secondsInTimer >= 10? '':'0'}${secondsInTimer}`;
}

function updateTimer(){
    const htmlTimer = document.querySelector('#timer');
    htmlTimer.textContent = transformationInMinutesAndSeconds(userTime);
    if(userTime <= 0){
        clearInterval(myTimeout);
        const headingTimer = document.querySelector('#heading');
        headingTimer.textContent = 'Done';
    } else{
        userTime--;
    }
}
let myTimeout = setInterval(updateTimer, 1000);
updateTimer;