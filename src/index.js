document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Fake content to display
  const fakePoem = `
      Your wings are strong, <br>
      Flap them into a song, <br>
      Soar high like an eagle.
    `;

  // Add the fake content to the page
  document.querySelector("#fakeContent").innerHTML = fakePoem;
});
