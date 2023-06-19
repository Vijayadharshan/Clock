function Time() {
    var date = new Date();
    var Hour = date.getHours();
    var Minute = date.getMinutes();
    var Second = date.getSeconds();

    Hour = update(Hour);
    Minute = update(Minute);
    Second = update(Second);

    document.getElementById("clock").innerText = Hour + "." + Minute + "." + Second;

    setTimeout(Time, 1000);
}

function update(time) {
    if (time < 10) {
        return "0" + time;
    }
    else {
        return time;
    }
}

Time();