document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "data.txt", true);

  console.log("READYSTATE", xhr.readyState);

  // xhr.onload = function() {
  //   if (this.status === 200) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  };

  xhr.send();
}
