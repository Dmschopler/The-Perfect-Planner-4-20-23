var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM DD "));

$(function () {
  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var taskText = $(this).siblings(".task").val();
    var hours = $(this).siblings(".hour").text();
    localStorage.setItem(hours, JSON.stringify(taskText));
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

  // for ( var i = 1; i < 13; i++) {
  //   document.getElementById(i).textContent = localStorage.getitem(i+"")
  // }
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});

