//Business Logic
function robotSwitch(num, name) {
  const numArray = [];
  for (let i = 0; i <= num; i++) {
    let check = i.toString();

    if (check.includes(3)) {
      numArray.push("Won't you be my neighbor " + name + "?" + ", ")
    } else if (check.includes(2)){
      numArray.push("Boop!" + ", ")
    } else if (check.includes(1)){
      numArray.push("Beep!" + ", ")
    } else{
      numArray.push(i + ", ")
    }

  }
return numArray
}

// User Logic
$(document).ready(function() {
  $("form#firstName").submit(function() {
    event.preventDefault();
    let name = $("input#name").val();

    $("#firstName").hide();
    $("#textbar").show();

    $("form#textbar").submit(function() { 
      event.preventDefault();
      let num = $("input#num").val();
      let result = robotSwitch(num, name);

      $("#textbar").hide()
      $("#reset").show();
      $(".card").show();

      $("#output").append(result);
      $("form#textbar")[0].reset();
    });

    $( "button#robotReset" ).click(function() {
      $("#textbar").show();
      $( "p").empty();
      $(".card").hide();
      $("#reset").hide();
    });
  });
});