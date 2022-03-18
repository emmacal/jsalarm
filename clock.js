
const display = document.getElementById('txt');
const audio = new Audio('alarm.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function currentTime() {
    const date = new Date();

    const hour = displayTime(date.getHours());
    const minutes = displayTime(date.getMinutes());
    const seconds = displayTime(date.getSeconds());



    display.innerText=`${hour} : ${minutes} : ${seconds}`
}

function displayTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}

function deleteAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm deleted');
    }
}

setInterval(currentTime, 1000);