/* Your Code Here */

function createEmployeeRecord(arr) 
{
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
 }
 
 function createEmployeeRecords ( employeeData)
 {
    return employeeData.map(employee => createEmployeeRecord(employee))
 }
 
 const createTimeInEvent = function(dateStamp)
 {
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour,10),
        date,
    })
    return this
 }
 
 const createTimeOutEvent = function(dateStamp)
 {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour,10),
        date,
    })
    return this
 }
 
 const hoursWorkedOnDate = function(dateObj)
 {
    let timeInEvent = this.timeInEvents.find(function(e){
        return e.date === dateObj
    })
    let timeOutEvent = this.timeOutEvents.find(function(e){
        return e.date === dateObj
    })
    return (timeOutEvent.hour -timeInEvent.hour)/100
    
 }
 
 const wagesEarnedOnDate = function(dateObj)
 {
    let wage = hoursWorkedOnDate.call(this, dateObj) * this.payPerHour
    return parseFloat(wage.toString())
 }
 
 function findEmployeeByFirstName (employeesArr, firstName)
{
    return employeesArr.find(employee => {
        return employee.firstName === firstName  
    })
 }
 
 const calculatePayroll = function(employeesRecords){
    return employeesRecords.reduce(function(memo,record){
        return memo + allWagesFor.call(record)
    }, 0)
 }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

