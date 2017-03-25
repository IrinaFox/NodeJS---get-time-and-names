'use strict';

function getCurrentTime () {
    var date = new Date(),
        time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    return time;
}

exports.getCurrentTime = getCurrentTime;
