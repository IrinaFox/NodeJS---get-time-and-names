'use strict';

var names = require('./names'),
    studentList = require('./studentList.json');

function getCurrentTime () {
    var date = new Date(),
        time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    return time;
}

function getNames () {
    var returnedNames = JSON.stringify(names);
    return returnedNames;
}

function getStudentList () {
    var studentsString = JSON.stringify(studentList);
    return studentsString;
}

exports.getCurrentTime = getCurrentTime;
exports.getNames = getNames;
exports.getStudentList = getStudentList;
