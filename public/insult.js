document.querySelector(".request-insult")
  .addEventListener("click", function () {
    fetch("./insult")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        document.querySelector(".insult").innerText = data.insult;
        document.querySelector(".insult").style.color = "red";
      })
      .catch(function (err) {
        console.error(err);
      });
  });