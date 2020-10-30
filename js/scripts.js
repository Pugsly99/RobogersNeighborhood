//Business Logic
function robotSwitch(num) {
  const numArray = [];

  for (let i = 0; i <= num; i++) {
    let check = i.toString();

    if (check.includes(3)) {
      numArray.push("Won't you be my neighbor?" + ", ")
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
  $("form#textbar").submit(function() {
    event.preventDefault();

    let num = $("input#num").val();
    let result = robotSwitch(num);

    $("#output").append(result);
  });
});