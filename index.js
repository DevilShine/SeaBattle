var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var ships = ['1-a', '3-a', '4-a', '6-b', '2-c', '6-c', '2-d', '2-e', '6-f', '7-f', '8-f', '1-h', '2-h', '3-h', '4-h'];

function createBtn(i, letter) {
  var btn = document.createElement("button");
  btn.classList.add("button");
  btn.setAttribute("data-id", i + "-" + letter);
  btn.innerHTML = i + " " + letter;
  var wrap = document.querySelector(".wrap");
  wrap.append(btn)
}

for (var i = 0; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    createBtn(j, alphabet[i])
  }
}

var wrap = document.querySelector(".wrap");
wrap.addEventListener("click", function (e) {
  var elem = e.target;
  var check = elem.matches(".button");
  if (check) {
    console.log(elem.dataset.id);
    var ch;
    for (let i = 0; i < ships.length; i++) {
      if (ships[i] == elem.dataset.id) {
        ch = "true";
        break;
      } else {
        ch = "false";
      }
    }
    console.log(ch);
    if (ch == "true") {
      alert("Nise Shot)");
    } else {
      alert("Miss((");
    }
  }
})