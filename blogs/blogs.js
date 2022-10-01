const blogsDiv = document.querySelector("#blogsDiv");

const blogs = [
  {
    title: "7 Common Mistakes of Beginner Developer",
    date: "25 Sept, 2022",
    duration: "4 Min",
    desc: "The purpose of this blog is to share some of the mistakes made as a beginner developer and how these mistakes can be overcome at an early stage.",
    link: "https://yashksaini.hashnode.dev/7-common-mistakes-of-a-beginner-developer",
  },
];

const showBlogs = () => {
  blogsDiv.innerHTML = "";
  for (let i = blogs.length - 1; i > -1; i++) {
    blogsDiv.innerHTML += `<div class="card">
    <h1>${blogs[i].title}</h1>
    <p>${blogs[i].desc}</p>
    <p>
      <span><i class="fa-regular fa-clock"></i> ${blogs[i].duration}</span>
      <b>|</b>
      <b> ${blogs[i].date}</b>
    </p>
    <a
      href="${blogs[i].link}"
      target="_blank"
      >Read More</a
    >
  </div>`;
  }
};
showBlogs();
