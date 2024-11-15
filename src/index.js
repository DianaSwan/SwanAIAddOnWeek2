function generatePoem(response) {
  console.log(response.data.text);
  const poemContainer = document.querySelector("#poem");

  poemContainer.innerHTML = "";

  new Typewriter(poemContainer, {
    strings: response.data.text,
    autoStart: true,
    cursor: "",
    delay: 75,
  });
}

function showPoemResponse(event) {
  event.preventDefault();

  let prompt = document.querySelector(".instructions").value.trim();
  let context = "Kenyan poem";
  let apiKey = "24a843192c3oc0c5tab227801f7a3edf";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  const poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Generating your poem... please wait.";

  axios
    .get(apiUrl)
    .then(generatePoem)
    .catch((error) => {
      console.error("Error generating poem:", error);
      alert("Failed to generate poem. Please try again.");
    });
}

document.querySelector("form").addEventListener("submit", showPoemResponse);
