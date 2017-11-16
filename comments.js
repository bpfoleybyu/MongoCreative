$(document).ready(function(){
  $("#postComment").click(function(){
      var myobj = {Comment:$("#picture").val()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
	var url = "comment";
	$.ajax({
	url:url,
	type: "POST",
	data: jobj,
	contentType: "application/json; charset=utf-8",
})
  });

 $("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<div id='slideshow'>";
      for(var comment in data) {
        com = data[comment];
        everything += "<div data-cycle-auto-height=container><img src='" + com.Comment + "' width='620'></div>";
      }
      everything += "</div>";
      $("#comments").html(everything);
    })
  });

 $("#deleteComments").click(function() {
    console.log("delete Function called");
	var url = "comment";   
 	$.ajax({
     	 url:url,
    	 type: "DELETE",
	 success: function(data,textStatus) {
		$("#done").html(textStatus);
}
})
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
   // .fadeOut(1000)
    .next()
   // .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
})
