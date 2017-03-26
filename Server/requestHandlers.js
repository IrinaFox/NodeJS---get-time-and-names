'use strict';

var names = require('./names');

function getCurrentTime () {
    var date = new Date(),
        time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    return time;
}

function getNames () {
    var returnedNames = JSON.stringify(names);
    return returnedNames;
}

exports.getCurrentTime = getCurrentTime;
exports.getNames = getNames;

