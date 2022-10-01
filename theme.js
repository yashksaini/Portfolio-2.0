let themeBtn = document.querySelector("#theme");

let themeValue = true;

function changeTheme() {
  themeValue = !themeValue;
  theme(themeValue);
  themeBtn.classList.toggle("active");
}
const theme = (value) => {
  if (value === false) {
    document.documentElement.style.setProperty("--dark", "#fcfcfc");
    document.documentElement.style.setProperty("--white", "#20242e");
    document.documentElement.style.setProperty("--grey", "#e9e9e9");
    document.documentElement.style.setProperty("--light", "#e9e9e9");
    document.documentElement.style.setProperty("--song", "#304253");
    document.documentElement.style.setProperty("--card", "#2B2F3B");
    document.documentElement.style.setProperty("--border", "#727272");
  } else {
    document.documentElement.style.setProperty("--dark", "#20242e");
    document.documentElement.style.setProperty("--white", "#fcfcfc");
    document.documentElement.style.setProperty("--grey", "#c5c5c5");
    document.documentElement.style.setProperty("--light", "#4d5765");
    document.documentElement.style.setProperty("--song", "#f6f6f6");
    document.documentElement.style.setProperty("--card", "#fff");
    document.documentElement.style.setProperty("--border", "#e8e8e8");
  }
};
