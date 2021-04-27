const checkSettings = (bg) => {
  let mode = window.localStorage.getItem("mode");
  let english =
    window.localStorage.getItem("language") === "english" ? true : false;
  let arabic =
    window.localStorage.getItem("language") === "arabic" ? true : false;

  if (mode === "dark") {
    document.body.style.background = "var(--black)";
  } else {
    console.log("what its working");

    document.body.style.background = bg;
  }
  if (arabic) {
    document.body.style.direction = "rtl";
  } else if (english) {
    document.body.style.direction = "ltr";
  }
};
export default checkSettings;
