const apiKey = 'eab72c9b9317ab92fddcc4efd7523ada';
let city = 'Poltava'; // Значение по умолчаниюа

const currentDate = new Date();



function getRealDataAndTime(){

    const months = [
        "Jan", 
        "Feb", 
        "Mar", 
        "Apr", 
        "May", 
        "Jun", 
        "Jul", 
        "Aug", 
        "Sep", 
        "Oct", 
        "Nov", 
        "Dec"
    ]
    const daysOfWeek = [
        "Sun", // Воскресенье
        "Mon", // Понедельник
        "Tue", // Вторник
        "Wed", // Среда
        "Thu", // Четверг
        "Fri", // Пятница
        "Sat"  // Суббота
    ];

    const getMonth = currentDate.getMonth();
    const getMonthName = months[getMonth];

    const getData = currentDate.getUTCDate();
    const getDataName = getData < 10? "0" + getData : getData;

    const getYear = currentDate.getFullYear();

    const getDay = currentDate.getDay();
    const getDayName = daysOfWeek[getDay];


    document.getElementById('data').textContent = `${getMonthName} ${getDataName}, ${getYear} - ${getDayName}`;

    let getHours = currentDate.getHours();
    getHours = getHours? getHours:12;
    const getHoursFormatForPM = getHours % 2;
    const getMinutes = currentDate.getMinutes();
    const getHoursFormat = getHours <= 12?
        `${getHours}:${getMinutes} AM`:`${getHoursFormatForPM}:getMinutes PM`;

    document.getElementById('time').textContent = `${getHoursFormat}`;

}



getRealDataAndTime();