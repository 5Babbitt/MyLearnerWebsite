const clockTimeText = document.getElementById("clockTime");
const clockTimezoneText = document.getElementById("clockTimezone");

HelloWorld();

UpdateTimezone();
UpdateTime();
setInterval(UpdateTime, 1000)

function HelloWorld()
{
    console.log("Hello World");
}

function UpdateTime()
{
    let date = new Date();
    let time = TwoDigitNumber(date.getHours()) + ":" + TwoDigitNumber(date.getMinutes()) + ":" + TwoDigitNumber(date.getSeconds());

    clockTimeText.innerText = time;
}

function UpdateTimezone()
{
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    clockTimezoneText.innerText = timezone;
}

function TwoDigitNumber(number)
{
    return (number < 10) ? "0" + number.toString() : number.toString();
}