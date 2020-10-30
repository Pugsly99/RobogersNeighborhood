//Business Logic
function robotSwitch(num) {
  const numArray = [];

  for (let i = 0; i <= num; i++) {
    if (i === 3) {
      numArray.push("Won't you be my neighbor?" + ", ")
    } else if (i === 2){
      numArray.push("Boop!" + ", ")
    } else if (i === 1){
      numArray.push("Beep!" + ", ")
    } else{
      numArray.push(i + ", ")
    }

  }
return numArray
}

// User Logic
$(document).ready(function() {
  $("form#textbar").submit(function() {
    event.preventDefault();

    let num = $("input#num").val();
    let result = robotSwitch(num);

    $("#output").append(result);
  });
});