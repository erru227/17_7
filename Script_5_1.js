//Collecting elements for easier reading later
var output = document.getElementById("output");
var link = document.getElementById("link");

function loadLink(){
    let url = link.value;
    /*Using try/catch functionality for this
    New JavaScript grammar
    */
    fetch(url)
        .then(function(response) {
            output.innerHTML = "<p>status is " + response.status;
            output.innerHTML += "<br>" + response.text()+ "</p>";
        })
        .then(function(html) {
            output.innerHTML += "<p>HTML:" + html + "</p>";
        })
        .catch(function(error) {
            output.textContent = "Request failed";
        });
}
/*
let url = "https://learn.zybooks.com/";
fetch(url)
   .then(function(response) {
      output.textContent = "status is " + response.status;
          return response.text();
   })
   .then(function(html) {
      output.textContent = html;
   })
   .catch(function(error) {
      output.textContent = "Request failed";
});
*/