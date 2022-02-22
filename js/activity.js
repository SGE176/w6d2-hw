$(document).ready(function(){
       $("td").click(function () {
    var content = $(this).text();
    if (content != "Not Available") {
      $(this).css("cursor", "pointer");
      $(this).toggleClass("tdhighlight");

      if ($(this).hasClass("tdhighlight")) {
        $("#displaySelected").css({
          visibility: "visible",
          "margin-top": "2em",
        });
        $("#result").append("<p>" + content + "</p>");
      } else {
        $("#result p:contains(" + content + ")").remove();
      }
      
      if ($("#result").has("p").length == false) {
        $("#displaySelected").css({
          visibility: "hidden",
          "margin-top": "0",
        });
      }
    }
  })
})