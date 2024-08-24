let userTime;
do{
    userTime = Number(prompt('Enter seconds, please', '85'));
} while(isNaN(userTime));

function transformationInMinutesAndSeconds(seconds){
    const minutesInTimer = Math.floor(seconds / 60);
    const secondsInTimer = seconds % 60; 
    return `${minutesInTimer >= 10? '':'0'}${minutesInTimer}:${secondsInTimer >= 10? '':'0'}${secondsInTimer}`;
}

function updateTimer(){
    const htmlTimer = document.querySelector('#timer');
    htmlTimer.textContent = transformationInMinutesAndSeconds(userTime);
    if(userTime <= 0){
        clearInterval(myTimeout);
        alert('Completed timer')
    } else{
        userTime--;
    }
}
let myTimeout = setInterval(updateTimer, 1000);
updateTimer;