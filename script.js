const { body } = document;

function changeBackground(number) {
  let prebviousBackground;

  if (body.className) {
    prebviousBackground = body.className;
  }

  body.className = "";

  switch (number) {
    case "1":
      return prebviousBackground === "background-1"
        ? false
        : body.classList.add("background-1");
    case "2":
      return prebviousBackground === "background-2"
        ? false
        : body.classList.add("background-2");
    case "3":
      return prebviousBackground === "background-3"
        ? false
        : body.classList.add("background-3");

    default:
        break;
  }
}
