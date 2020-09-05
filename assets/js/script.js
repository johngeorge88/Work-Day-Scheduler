var tasks = JSON.parse(localStorage.getItem("tasks")) || {};

// Show current date
var timeDisplay = $("#currentDay");
var today = moment();
timeDisplay.text(today.format("dddd, MMMM Do YYYY"));

console.log(today.hour())



// Coloring the times
var children = $(".container").children()
function updateColors () {
    for (var i = 0; i < children.length; i++){
        var currentChild = $(children[i]);
        var currentId = currentChild.attr("id");
        var currentHour = Number(currentId.split("-")[1]);

        if (currentHour < moment().hour()){
            $("#" + currentId + " textarea").addClass("past");
            $("#" + currentId + " textarea").removeClass("present future");
        } else if (currentHour === moment().hour()){
            $("#" + currentId + " textarea").addClass("present");
            $("#" + currentId + " textarea").removeClass("past future");
        } else if (currentHour > moment().hour()){
            $("#" + currentId + " textarea").addClass("future");
            $("#" + currentId + " textarea").removeClass("present past");
        }
    }
};
setInterval(updateColors, (1000 * 60) *30);

// Saving the tasks
$(".saveBtn").click(function(){
        var currentChild =$(this).parent().attr("id");
        var textContent = $(this).siblings(".description").val().trim();

        localStorage.setItem(currentChild, textContent);
});

function displayTasks() {
    for (var i = 0; i < children.length; i++) {
        var currentChild =$(children[i]).attr("id");
        var textContent = localStorage.getItem(currentChild);
        $("#" + currentChild + " .description").val(textContent);
    }
};

updateColors()
displayTasks();
