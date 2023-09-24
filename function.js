function enableDarkMode() {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
}

function enableLightMode() {
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");
}

function handleColorSchemeChange(e) {
  if (e.matches) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

darkModeMediaQuery.addEventListener("change", handleColorSchemeChange);

handleColorSchemeChange(darkModeMediaQuery);

const systemDarkMode = darkModeMediaQuery.matches;

if (systemDarkMode) {
  enableDarkMode();
} else {
  enableLightMode();
}
