var i = 0, text;
function typing() {
  text = "Hi, I'm Badhusha  Shaji";
  if (i < text.length) {
    setTimeout(typing, 100);
    document.getElementById("name").innerHTML += text.charAt(i);
    i++;
  }
}
typing();