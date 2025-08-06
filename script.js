// NAVIGATION RESPONSIVE CODE

function navigation() {
    var x = document.getElementById("mytopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
