var todayDate = moment().format("D MMM YYYY");
$("#currentDay").text(todayDate);

$(document).ready(function(){

    $(".saveBtn").click(function(){
        alert("Timetable saved");

        let timeDay = $(this).parent().attr("id")
        let task = $(this).siblings(".input-group").val();

        console.log(timeDay);
        console.log(task);

        localStorage.setItem(timeDay, task);

        $(".notification").addClass
    })
    
    function hourUpdate(){
        const currentTime = moment().hours();

        $(".time-block").each(function(){
            let blockHour = parseInt($(this).attr("id").split("-")[1]);
            alert(blockHour);
        })

        console.log($(".time-block"))
    }

})