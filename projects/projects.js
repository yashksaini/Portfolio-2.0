const jsProjects = document.querySelector("#jsProjects");
const reactProjects = document.querySelector("#reactProjects");
const angularProjects = document.querySelector("#angularProjects");
const phpProjects = document.querySelector("#phpProjects");
const webProjects = document.querySelector("#webProjects");
const javascript = [
  {
    title: "Code Time Music",
    desc: "This site contain background music which can be played in background.",
    live: "https://codetimemusic.netlify.app/",
    source: "https://github.com/yashksaini/Code-Time-Music",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Bingo Vs Computer",
    desc: "It is game where you can play against computer",
    live: "https://cbingo.netlify.app/",
    source: "https://github.com/yashksaini/bingo-vs-computer",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Memory Game",
    desc: "It is game which played with the set of cards. Find pairs in minimum time.",
    live: "https://memrisegame.netlify.app/",
    source: "https://github.com/yashksaini/bingo-vs-computer",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Spin Dice",
    desc: "It is game which played between two players. Score 100 and win the game.",
    live: "https://spin-dice.netlify.app/",
    source: "https://github.com/yashksaini/Spin-Dice",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Tic Tac Toe",
    desc: "It is game in which two players take turns in drawing either an O or an X",
    live: "https://tic-tac-toe-yks.netlify.app/",
    source: "https://github.com/yashksaini/Tic-Tac-Toe",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Ludo",
    desc: "It is board game in which four players tries to finish the 4 tokens to the end.",
    live: "https://gameludo.netlify.app/",
    source: "https://github.com/yashksaini/Ludo",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Kill Virus Game",
    desc: "Try to stop the viruses at the other end of the box without hitting white tile.",
    live: "https://kill-virus-game.netlify.app/",
    source: "https://github.com/yashksaini/Kill-Virus-Game",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Number Puzzle",
    desc: "Try to arrange the number in the order in minimum number of steps.",
    live: "https://numpuzzle.netlify.app/",
    source: "https://github.com/yashksaini/Number-Puzzle",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Tic Tac Toe vs AI",
    desc: "Play Tic Tac Toe game against the computer and try to defeat.",
    live: "https://tictactoe-vs-ai.netlify.app/",
    source: "https://github.com/yashksaini/Tic-Tac-Toe-Vs-AI",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Dots Game",
    desc: "It is a two player game. The one who make more boxes will win the game.",
    live: "https://dots-box.netlify.app/",
    source: "https://github.com/yashksaini/Dots-Game",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "IPL 2021",
    desc: "Create your own IPL match. Choose favourite teams and play.",
    live: "https://2021ipl.netlify.app/",
    source: "https://github.com/yashksaini/IPL-2021",
    img: "#",
    tags: "#html,#css,#javascript,#jquery",
  },
  {
    title: "Rock Paper Scissor",
    desc: "A rock beats scissor, scissor beat paper , and paper beats rock .",
    live: "https://rps-yks.netlify.app/",
    source: "https://github.com/yashksaini/Rock-Paper-Scissor",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Spark Type",
    desc: "Increase your typing speed by practicing on spark type.",
    live: "https://spark-type.netlify.app/",
    source: "https://github.com/yashksaini/Spark-Type",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Car Roulette",
    desc: "It is a gambling game. Try your luck and make coins from it.",
    live: "https://car-roulette.netlify.app/",
    source: "https://github.com/yashksaini/Car-Roulette",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Daily Tracker",
    desc: "Track daily activities. All data is stored in webSQL in browser.",
    live: "https://tracker-daily.netlify.app/",
    source: "https://github.com/yashksaini/Daily-Tracker",
    img: "#",
    tags: "#websql,#html,#css,#javascript",
  },
  {
    title: "Music Player",
    desc: "It is simple music player with a small playlist. Play and enjoy music.",
    live: "https://music-player-yks.netlify.app/",
    source: "https://github.com/yashksaini/Music-Player",
    img: "#",
    tags: "#html,#css,#javascript",
  },
];
const react = [
  {
    title: "Tic Tac Toe (React)",
    desc: "It is game in which two players take turns in drawing either an O or an X.",
    live: "https://tictactoeyks.netlify.app/",
    source: "https://github.com/yashksaini/Tic-Tac-Toe-React",
    img: "#",
    tags: "#react,#css",
  },
  {
    title: "Cal Quiz",
    desc: "Sharp your mathematical calculations with CalQuiz. A quiz application.",
    live: "https://cal-quiz.netlify.app/",
    source: "https://github.com/yashksaini/Cal-Quiz",
    img: "#",
    tags: "#react,#scss",
  },
  {
    title: "Easy Contact",
    desc: "It is CURD application using react and firebase. Save contacts with images.",
    live: "https://easy-contact.netlify.app/",
    source: "https://github.com/yashksaini/Easy-Contact",
    img: "#",
    tags: "#react,#css,#firebase",
  },
  {
    title: "List Zone",
    desc: "A simple To-Do application that store data in local storage.",
    live: "https://list-zone.netlify.app/",
    source: "https://github.com/yashksaini/List-Zone",
    img: "#",
    tags: "#react,#css",
  },
  {
    title: "Movie Zone",
    desc: "An API application. Search for movie and get details of it.",
    live: "https://zone-movie.netlify.app/",
    source: "https://github.com/yashksaini/Movie-Zone",
    img: "#",
    tags: "#react,#css",
  },
  {
    title: "Self Tracker (React)",
    desc: "Track daily activities. Category wise detail option available.",
    live: "https://self-traker.netlify.app/",
    source: "https://github.com/yashksaini/Self-Tracker-React",
    img: "#",
    tags: "#react,#css,#mysql,#nodejs,#expressjs",
  },
  {
    title: "Portfolio (React)",
    desc: "A portfolio website that showcases my skills, projects and contact details.",
    live: "https://yashksportfolio.netlify.app/",
    source: "https://github.com/yashksaini/Portfolio-React",
    img: "#",
    tags: "#react,#scss",
  },
  {
    title: "Safe Notes",
    desc: "A notes application that store all notes locally.",
    live: "https://safe-notes.netlify.app/",
    source: "https://github.com/yashksaini/Safe-Notes",
    img: "#",
    tags: "#react,#css,#indexedDB",
  },
  {
    title: "IPL Edge",
    desc: "An interactive game. Select teams and players accordingly and play the game.",
    live: "https://ipl-edge.netlify.app/",
    source: "https://github.com/yashksaini/IPL-Edge",
    img: "#",
    tags: "#react,#css",
  },
  {
    title: "TagsNote",
    desc: "A notes application where tags can be added to notes which help in filtering.",
    live: "https://tags-note.netlify.app/",
    source: "https://github.com/yashksaini/Tags-Note",
    img: "#",
    tags: "#react,#scss,#firebase",
  },
];
const angular = [
  {
    title: "Classroom",
    desc: "Create classroom and add students and track the assignments.",
    live: "https://signup-cbcaa.firebaseapp.com/",
    source: "https://github.com/yashksaini/classroom",
    img: "#",
    tags: "#css,#angular,#typescript,#firebase",
  },
  {
    title: "ProjectNet",
    desc: "A project sharing platform. Create projects and share with other developers.",
    live: "https://projectnet-b4b88.firebaseapp.com/",
    source: "https://github.com/yashksaini/ProjectNet",
    img: "#",
    tags: "#css,#angular,#typescript,#firebase",
  },
  {
    title: "Blog Surface",
    desc: "A socio blogging platform. Create blogs and share with all.",
    live: "https://blogsurface.web.app/",
    source: "https://github.com/yashksaini/blog-surface",
    img: "#",
    tags: "#css,#angular,#typescript,#firebase",
  },
];
const php = [
  {
    title: "PinChat",
    desc: "A social networking site. Make friends, create posts and chat with friends.",
    live: "",
    source: "https://github.com/yashksaini/PinChat",
    img: "#",
    tags: "#html,#css,#php,#ajax,#mysql",
  },
  {
    title: "Data Collection",
    desc: "A website for colleting exam marks from teachers and output the data in excel format",
    live: "http://datacollection.epizy.com/",
    source: "https://github.com/yashksaini/Data-Collection",
    img: "#",
    tags: "#html,#css,#php,#ajax,#mysql",
  },
  {
    title: "NeoApp",
    desc: "A social networking site. Make friends, create posts and chat with friends.",
    live: "http://neoapp.epizy.com/",
    source: "https://github.com/yashksaini/NeoApp",
    img: "#",
    tags: "#html,#css,#php,#ajax,#mysql",
  },
  {
    title: "Que Paper Generator",
    desc: "Add questions one time and use forever. Generate question paper easily.",
    live: "",
    source: "https://github.com/yashksaini/Question-Paper-Generator",
    img: "#",
    tags: "#html,#css,#php,#ajax,#mysql",
  },
  {
    title: "Self Tracker (PHP)",
    desc: "Track daily activities. Category wise detail option available.",
    live: "http://self-tracker.epizy.com/",
    source: "https://github.com/yashksaini/Self-Tracker-PHP",
    img: "#",
    tags: "#html,#css,#php,#ajax,#mysql",
  },
];
const web = [
  {
    title: "Portfolio 1.0",
    desc: "A portfolio website that showcases my skills, projects and contact details.",
    live: "https://yksportfolio1.netlify.app/",
    source: "https://github.com/yashksaini/Portfolio-1.0",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Portfolio 1.1",
    desc: "A portfolio website that showcases my skills, projects and contact details.",
    live: "https://yks-portfolio.netlify.app/",
    source: "https://github.com/yashksaini/Portfolio-1.1",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Mathematics",
    desc: "A website in which YouTube Videos are organized and played in the website itself.",
    live: "https://babulaldms.github.io/maths/",
    source: "https://github.com/yashksaini/Mathematics-Website",
    img: "#",
    tags: "#html,#css,#javascript,#bootstrap",
  },
  {
    title: "Small Games",
    desc: "A website which contain all the games that I have created on the web.",
    live: "https://yksgames.netlify.app/",
    source: "https://github.com/yashksaini/Small-Games-Website",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Growth School Clone",
    desc: "Cloned the home page of the official Growth School website with responsive.",
    live: "https://growthschool-clone-yks.netlify.app/",
    source: "https://github.com/yashksaini/Growth-School-Clone",
    img: "#",
    tags: "#html,#css,#javascript",
  },
  {
    title: "Portfolio 2.0",
    desc: "Latest portfolio website that showcase my projects and skills.",
    live: "https://yashksaini.netlify.app/",
    source: "https://github.com/yashksaini/Portfolio-2.0",
    img: "#",
    tags: "#html,#css,#javascript",
  },
];

// Function for displaying the project cards
const showProjects = (array, idName) => {
  idName.innerHTML = "";
  for (let i = array.length - 1; i > -1; i--) {
    let allTags = array[i].tags.split(",");
    let showTag = "";
    for (let j = 0; j < allTags.length; j++) {
      showTag += `<span>${allTags[j]}</span>`;
    }
    if (array[i].live) {
      idName.innerHTML += `
      <div class="projectCard">
        <div class="center">
          <h1>${array[i].title}</h1>
          <button class="expandBtn">
          <i class="fa-regular fa-circle-check"></i>
          </button>
        </div>
        <p class="projectDesc">
        ${array[i].desc}
        </p>
        <p class="projectTags">
          ${showTag}
        </p>
        <div class="center">
          <a href="${array[i].source}" class="center srcBtn" target="_blank"
            ><i class="fa-solid fa-code"></i> View Source</a
          >
          <a href="${array[i].live}" target="_blank" class="liveBtn">Live Project</a>
        </div>
      </div>`;
    } else {
      idName.innerHTML += `
        <div class="projectCard">
          <div class="center">
            <h1>${array[i].title}</h1>
            <button class="expandBtn">
            <i class="fa-regular fa-circle-check"></i>
            </button>
          </div>
          <p class="projectDesc">
          ${array[i].desc}
          </p>
          <p class="projectTags">
            ${showTag}
          </p>
          <div class="center">
            <a href="${array[i].source}" class="center srcBtn" target="_blank"
              ><i class="fa-solid fa-code"></i> View Source</a
            >
          </div>
        </div>`;
    }
  }
};
showProjects(javascript, jsProjects);
showProjects(react, reactProjects);
showProjects(angular, angularProjects);
showProjects(php, phpProjects);
showProjects(web, webProjects);
