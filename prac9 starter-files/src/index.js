const shanghai = document.getElementById("shanghai");
shanghai.addEventListener("click", () => {
  fetch("http://localhost:3000/api/update", {
    method: "POST",
    body: "City=Shanghai&CountryCode=CHN&Pop=24183300",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    }
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok");
    })
    .then(function(result) {
      let appDiv = document.getElementById("app");
      appDiv.innerHTML = JSON.stringify(result);
    })
    .catch(function(error) {
      console.log(
        "There has been a problem with your fetch operation: ",
        error.message
      );
    });
});

const tokyo = document.getElementById("tokyo");
tokyo.addEventListener("click", () => {
  fetch("http://localhost:3000/api/update", {
    method: "POST",
    body: JSON.stringify({
      City: "Tokyo",
      CountryCode: "JPN",
      Pop: "13515271"
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok");
    })
    .then(function(result) {
      let appDiv = document.getElementById("app");
      appDiv.innerHTML = JSON.stringify(result);
    })
    .catch(function(error) {
      console.log(
        "There has been a problem with your fetch operation: ",
        error.message
      );
    });
});
