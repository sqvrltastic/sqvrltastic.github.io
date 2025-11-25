const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const html = document.documentElement;

const sunIcon = "/assets/images/icons/sun.png";
const moonIcon = "/assets/images/icons/moon.png";

toggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Update icon
  icon.src = newTheme === "dark" ? moonIcon : sunIcon;
  icon.alt = newTheme === "dark" ? "Dark theme ON" : "Light theme ON";
});

// On page load: set icon to match current theme
const initialTheme = html.getAttribute("data-theme");
icon.src = initialTheme === "dark" ? moonIcon : sunIcon;
icon.alt = initialTheme === "dark" ? "Dark theme ON" : "Light theme ON";
