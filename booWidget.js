var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("booWidget").innerHTML = this.responseText;
	 console.log(this.responseText);
  }
};
xhttp.open("GET", "https://solentLibrary.github.io/boo-query-gen/booContent.html", true);
xhttp.send();
