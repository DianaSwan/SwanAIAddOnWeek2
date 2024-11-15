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
  let apiKey = "24a843192c3oc0c5tab227801f7a3edf";  

  let context = "You are a poet in love. Share a poem of complete adoration";
  let aiPrompt = "Please tell me a poem about love.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${aiPrompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Generating your poem... please wait.";

 
  axios
    .get(apiUrl)
    .then(generatePoem)  
    .catch((error) => {
      console.error("Error generating poem:", 
