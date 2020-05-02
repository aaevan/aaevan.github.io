const projects = [
  {
    name: "async game",
    id: "asyncGame",
    description:
      "a real-time text based game in python using asyncio and blessed",
    image: "images/async_game.png",
    hoverImage: "images/async_game.gif",
    site: "https://github.com/aaevan/asyncio_text_game"
  },
  {
    name: "caveExplore",
    id: "caveExplore",
    description:
      "early prototype of a 3D exploration game in javascript (react)\
       mostly an excuse to learn react-three-fiber and learn react-hooks",
    image: "images/caveExplore.png",
    hoverImage: "images/caveExplore.gif",
    site: "https://github.com/aaevan/caveExplore"
  },
  {
    name: "pomodoro.sh",
    id: "pomdoro",
    description: "leverages osd_cat to write directly to the screen. a tool I made for myself and use daily.",
    image: "images/pomodoro.png",
    hoverImage: "images/pomodoro.gif",
    site: "https://github.com/aaevan/aaevan_rc_files/blob/master/scripts/pomodoro.sh"
  },
  {
    name: "pantry-monitor",
    id: "pantryMonitor",
    description: "large satisfying buttons, notifications and a usb scale (featuring horrible manual byte manipulation)",
    image: "images/pantry_monitor_1.png",
    hoverImage: "images/pantry_monitor_1.png",
    site: "https://github.com/aaevan/pantry-monitor"
  },
  {
    name: "flashy_bullshit.sh\n(flashing lights)",
    id: "flashy",
    description: "comical misuse of osd_cat",
    image: "images/flashy_bullshit.png",
    hoverImage: "images/flashy_bullshit.gif",
    site: "https://github.com/aaevan/aaevan_rc_files/blob/master/scripts/flashy_bullshit"
  },
  {
    name: "Survival Series hotkey (Jenny Holzer)",
    id: "holzer",
    description: "xbindkeys + shell script \n(why? because she's great)",
    image: "images/holzer_hotkey.png",
    hoverImage: "images/holzer_hotkey.gif",
    site: "https://github.com/aaevan/aaevan_rc_files/blob/master/scripts/randquote.sh"
  },
  {
    name: "avr_cricket",
    id: "cricket",
    description: "(2014) An imitation cricket using an ATtiny85. changes delay between chirps based on temperature",
    image: "images/avr_cricket.png",
    hoverImage: "images/avr_cricket.gif",
    site: "https://github.com/aaevan/avr_cricket"
  },
]

const main = () => {
  const projectContainer = document.querySelector(".project-container");
  for (let project of projects) {
    let tempProject = document.createElement("div");
    let styling = {
      color: "red"
    }
    tempProject.innerHTML =
      `
        <div class="project" id="${project.id}" href="${project.site}">
          <h2><a href="${project.site}">${project.name}</a></h2>
          <p>${project.description}</p>
        </div>
      `
    projectContainer.appendChild(tempProject);
    const projectElement = document.querySelector(`#${project.id}`)
    projectElement.style.backgroundImage = `url("${project.image}")`
    projectElement.addEventListener('mouseover', () => {
      projectElement.style.backgroundImage = `url("${project.hoverImage}")`
    })
    projectElement.addEventListener('mouseout', () => {
      projectElement.style.backgroundImage = `url("${project.image}")`
    })
  }
}

document.addEventListener('DOMContentLoaded', main, false)