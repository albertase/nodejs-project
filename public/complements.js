const publicServer = document.querySelector('.request');
const paragraph = document.querySelector('.complement')
const container = document.querySelector('.server-container')

// Styles
// publicServer.style.backgroundColor = "green";
// publicServer.style.cursor = "pointer";
// publicServer.style.padding = "7px";
// publicServer.style.borderRadius = "20px";
// paragraph.style.backgroundColor = "blue"
// paragraph.style.width = "300px"
// container.style.backgroundColor = "yellow"
// container.style.padding = "20px"
// container.style.width = "40%"
// container.style.border = "4px solid black"

 document.querySelector(".request-complement")
  .addEventListener("click", function () {
    fetch("./complement")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        document.querySelector(".complement").innerText = data.complement;
      })
      .catch(function (err) {
        console.error(err);
      });
  });
