const todayDate = moment().format("D MMM YYYY");
$("#currentDay").text(todayDate);

$(document).ready(function(){

    $(".saveBtn").click(function(){
        alert("Timetable saved");

    var timeDay = $(this).parents("section").attr("id")
    var task =  $(this).parent().siblings(".form-control").val()

    console.log(timeDay);
    console.log(task);

    localStorage.setItem(timeDay, task);

    })
$("#9am .form-control").val(localStorage.getItem("9am"))
$("#10am .form-control").val(localStorage.getItem("10am"))
$("#11am .form-control").val(localStorage.getItem("11am"))
$("#12pm .form-control").val(localStorage.getItem("12pm"))
$("#1pm .form-control").val(localStorage.getItem("1pm"))
$("#2pm .form-control").val(localStorage.getItem("2pm"))
$("#3pm .form-control").val(localStorage.getItem("3pm"))
$("#4pm .form-control").val(localStorage.getItem("4pm"))
$("#5pm .form-control").val(localStorage.getItem("5pm"))

})