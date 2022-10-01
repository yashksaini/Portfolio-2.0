const skills = document.querySelector("#skills");
const images = [
  "html",
  "css",
  "js",
  "php",
  "bootstrap",
  "jquery",
  "firebase",
  "nodeJS",
  "mysql",
  "c",
  "c++",
  "angular",
  "react",
  "python",
  "figma",
  "inkscape",
  "sass",
  "java",
];

const showSkills = () => {
  for (let i = 0; i < images.length; i++) {
    skills.innerHTML += `
        <div class="eachSkill">
            <img src="images/skills/${images[i]}.png"/>
            <p>${images[i]}</p>
      </div>`;
  }
};
showSkills();
