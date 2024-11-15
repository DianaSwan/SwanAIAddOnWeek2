document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const fakePoem = `
      Your wings are strong, <br>
      Flap them into a song, <br>
      Soar high like an eagle.
    `;

  document.querySelector("#fakeContent").innerHTML = fakePoem;
});
