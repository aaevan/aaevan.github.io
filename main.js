//the problem: loop through an array and populate the styles of each project from a list of values:

console.log("running main.js! (line 3)")

const projects = [
  {
    name: "async game",
    description:
      "a real-time text based game in python using asyncio and blessed"
  },
  {
    name: "caveExplore",
    description:
      "Mostly an excuse to play with\
       react-three-fiber and learn react-hooks"
  },
  {
    name: "pomodoro.sh",
    description: "leverages osd_cat to write directly to the screen. a tool I made for myself and use daily."
  },
  {
    name: "flashy_bullshit.sh",
    description: "comical misuse of osd_cat"
  },
]

//project-container
const main = () => {
  const projectContainer = document.querySelector(".project-container");
  for (let project of projects) {
    //console.log(project)
    let tempProject = document.createElement("div");
    tempProject.innerHTML =
      `
        <div class="project">
          <h2>${project.name}</h2>
          <p>${project.description}</p>
        </div>
      `
    projectContainer.appendChild(tempProject);
  }
}

//window.onload(main())
document.addEventListener('DOMContentLoaded', main, false)