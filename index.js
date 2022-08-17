var wrap = document.querySelector(".wrap");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

function createBtn(i, letter) {
  var btn = document.createElement("button");
  btn.classList.add("button");
  btn.innerHTML = i + " " + letter;
  wrap.append(btn)
}

for (var i = 0; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    createBtn(j, alphabet[i])
  }
}