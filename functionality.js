function result() {
  var x = document.getElementById("value1").value;
  var y = document.getElementById("value2").value;
  var z = document.getElementById("operator").value;
  var p = document.getElementById("power_value").value;
  var res = document.getElementById("res");
  var c;
  if (z == "a") {
    c = +x + +y;
    res.value = c;
  } else if (z == "b") {
    c = +x - +y;
    res.value = c;
  } else if (z == "c") {
    c = +x * +y;
    res.value = c;
  } else if (z == "d") {
    c = +x / +y;
    res.value = c;
  } else if (z == "pp") {
    var rs1 = Math.pow(parseInt(x), parseInt(p));
    var rs2 = Math.pow(parseInt(y), parseInt(p));
    res.value = ` ${rs1} and ${rs2} `;
  }
}
