function offb(){
  document.getElementById("heading").textContent="switch-off";
  document.getElementById("off").style.backgroundColor="#cbd2d9";
  document.getElementById("on").style.backgroundColor="green";
  document.getElementById("light").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

}
function onb(){
  document.getElementById("heading").textContent="switch-on";
  document.getElementById("on").style.backgroundColor="#cbd2d9";
  document.getElementById("off").style.backgroundColor="#e12d39";
  document.getElementById("light").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";

}