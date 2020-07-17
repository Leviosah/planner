
var today = moment().format('MMMM Do YYYY');
console.log(today);

let dateHeader = $('#currentDay');
dateHeader.text(today);

let inputText = document.getElementById("textInput");
console.log(inputText)

// getting the current hour to set coloring
var currentHour = new Date().getHours();

console.log(currentHour)

// for loop building the elements, setting the time/color conditions, and save event listener
for(i=9; i<17; i++) {
  console.log(moment(i, "HH").format('hh a'));
  var description = localStorage.getItem(i);
  if(description==null)
  {
    description="";
  }
  if(i<currentHour)
  {
    blockColor="past";
  }
  else if(i==currentHour)
  {
    blockColor="present"
  }
  else{
    blockColor="future"
  }
  $("#schedule").append("<tr><td class=hour>"+moment(i, "HH").format('hh a')+"<td class="+blockColor+"><textarea data-hour"+i+" id = workHour" + i + ">"+description+"</textarea></td><td class=saveBtn id=saveHour" + i + "><i id=saveHour"+i+">Save</i></td></tr>");
};

// save function saving input in user val and then setting item to local storage
$(".saveBtn").on("click", function(event) {
    var idtext = event.target.id;
    var i = idtext.substring(8,10);
    event.preventDefault();
    var userInput = $("#workHour"+i).val();
    console.log("below is user input");
    console.log(userInput);
    console.log("the below is i");
    console.log(i);
    localStorage.setItem(i, userInput);

});

console.log("this is i " + i);
console.log(localStorage)
