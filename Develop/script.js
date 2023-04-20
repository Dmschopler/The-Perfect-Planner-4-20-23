var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM DD "));

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var taskText = $(this).siblings(".task").text();
    console.log(taskText)
    var hours = $(this).siblings(".hour").val();
    console.log(hours)
    localStorage.setItem(hours, JSON.stringify(taskText));
    console.log(localStorage)
  });

$(".time-block").each(function() {
  var block = parseInt($(this).attr("id").split("-")[1]);
  var currentBlock = dayjs().format("H");
  if (block < currentBlock) {
    $(this).addClass("past");
  } else if (block == currentBlock) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});

