//Collecting elements for easier reading later
var output = document.getElementById("output");
var link = document.getElementById("link");

function loadLink(){
    let url = link.value;
    /*Using try/catch functionality for this
    New JavaScript grammar
    */
    output.innerHTML = "<p>";
    fetch(url)
        .then(function(response) {
            output.innerHTML = "status is " + response.status;
            output.innerHTML += "<br>" + response.text();
        })
        .then(function(html) {
            output.innerHTML += "<br>HTML:" + html;
        })
        .then(function(status) {
            output.innerHTML += "<br>Status:" + status;
        })
        .then(function(ok) {
            output.innerHTML += "<br>OK:" + ok;
        })
        .then(function(headers) {
            output.innerHTML += "<br>Headers:" + headers;
        })
        .catch(function(error) {
            output.innerHTML += "Request failed";
        });
    output.innerHTML += "</p>";
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
