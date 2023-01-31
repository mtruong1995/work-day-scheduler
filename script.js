const todayDate = moment().format("D MMM YYYY");
$("#currentDay").text(todayDate);

$(document).ready(function(){

    $(".saveBtn").click(function(){
        alert("Timetable saved");

    const timeDay = $(this).parent().attr(".form-control")
    const task =  $(".form-control").val()

    console.log(timeDay);
    console.log(task);

    localStorage.setItem(timeDay, task);

    })


    
   function hourUpdate(){
         const currentTime = moment().hours();

        for(let i = 0; i < $(".time-block").length; i++){
            let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
            if(hour < currentTime) {
                $(".time-block")[i].classLlist.add("past")
            } else if(hour === currentTime){
                $(".time-block")[i].classLlist.add("past")
                $(".time-block")[i].classLlist.add("present")
            } else {
                $(".time-block")[i].classLlist.add("past")
                $(".time-block")[i].classLlist.add("present")

            }
                }     }

})