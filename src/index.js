document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Generating a poem...");

  const poemContainer = document.querySelector("#poem");
  poemContainer.innerHTML = "";

  const typewriter = new Typewriter(poemContainer, {
    loop: false,
    delay: 75,
  });

  typewriter.typeString("Your wings are strong,").start();
});
