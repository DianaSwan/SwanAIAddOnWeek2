document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Generating a poem...");

  let prompt = document.querySelector(".instructions").value.trim();
  let context = "Kenyan poem";
  let apiKey = "24a843192c3oc0c5tab227801f7a3edf";

  axios
    .get("https://api.shecodes.io/ai/v1/generate", {
      params: {
        prompt: prompt,
        context: context,
        key: apiKey,
      },
    })
    .then((response) => {
      const poem = response.data.text;

      const poemContainer = document.querySelector("#poem");
      poemContainer.innerHTML = "";

      const typewriter = new Typewriter(poemContainer, {
        loop: false,
        delay: 75,
      });

      typewriter.typeString(poem).start();
    })
    .catch((error) => {
      console.error("Error generating poem:", error);
      alert("Failed to generate a poem. Please try again.");
    });
});
