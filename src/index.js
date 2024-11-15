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
  let aiPrompt = document.querySelector(".instructions").value.trim();
  let context = "You are a poet in love. Share a 4 line poem of adoration";
  let apiKey = "24a843192c3oc0c5tab227801f7a3edf";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${aiPrompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Generating your poem... please wait.";

  axios
    .get(apiUrl)
    .then(generatePoem)
    .catch((error) => {
      console.error("Error generating poem:", error);
      alert("Failed to generate poem. Please try again.");
    });
}

function generatePoem(response) {
  let poemElement = document.querySelector("#poem");
  if (response.data && response.data.poem) {
    poemElement.innerHTML = response.data.poem;
  } else {
    poemElement.innerHTML = "Error: Poem not found in response.";
  }
}

document.querySelector("form").addEventListener("submit", showPoemResponse);
