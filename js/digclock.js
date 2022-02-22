//Create a time data function
function currentTime() {
  var d = new Date(); //Get current date
  var hr = d.getHours(); //Get current hours
  var min = d.getMinutes(); //Get current minutes
  var sec = d.getSeconds(); //Get current seconds
  var ampm; //Declare empty variable to store AM or PM
  var utchr = d.getUTCHours(); //Get Greenwich time
  var timezone; //Declare empty variable to store timezone
  //Add 0 to single digits for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }
  //Add 0 to single digits for minutes
  if (min < 10) {
    min = "0" + min;
  }
  //Determine timezone
  if (utchr >= hr) {
    if (utchr - hr == 8) {
      timezone = "PT";
    } else if (utchr - hr == 7) {
      timezone = "MT";
    } else if (utchr - hr == 6) {
      timezone = "CT";
    } else if (utchr - hr == 5) {
      timezone = "ET";
    } else {
      timezone = "unknown";
    }
  } else {
    if (utchr + 24 - hr == 8) {
      timezone = "PT";
    } else if (utchr + 24 - hr == 7) {
      timezone = "CT";
    } else if (utchr + 24 - hr == 6) {
      timezone = "CT";
    } else if (utchr + 24 - hr == 5) {
      timezone = "ET";
    } else {
      timezone = "unknown";
    }
  }
  //Determine AM or PM string
  if (hr == 12) {
    ampm = "PM"; //Set to PM
  } else if (hr > 12) {
    hr -= 12; //Deduct 12 hours greater than 12
    ampm = "PM"; //Set to PM
  } else {
    ampm = "AM"; //Set to AM
  }
  //Assemble time format to display
  var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timezone;
  //Display current local time and time zone on HTML elements
  document.getElementById("clock").innerText = time; //Adding time
  //Run time data function every 1 second
  setInterval(currentTime, 1000); //setting timer
}
//Initial run of time data function
currentTime();
//Use Javascript to import the Partner Pics
var picnames = [];
var partners = [];
var partnerList = [];
var image;
var openList = "<li id='partner'>";
var closeList = "</li>";

for (var i = 0; i < 6; i++) {
  picnames.push("partner" + (i + 1));
  partners.push("<img src='images/" + picnames[i] + ".png'>");
  image = openList + partners[i] + closeList;
  partnerList.push(image);
}
document.getElementById("partners").innerHTML = partnerList.join("");
