const projects = [
  {
    name: "async game",
    id: "asyncGame",
    description:
      "a real-time text based game in python using\
      <a href='https://docs.python.org/3/library/asyncio.html'>asyncio</a> \
      and <a href='https://pypi.org/project/blessed/'>blessed</a>.\
       [python]",
    image: "images/async_game.png",
    hoverImage: "images/async_game.gif",
    site: "https://github.com/aaevan/asyncio_text_game"
  },
  {
    name: "led_border",
    id: "ledborder",
    description:
        "A v. hacky edge of screen media ambience light. [bash, arduino,\
         python]",
    image: "images/led_border.png",
    hoverImage: "images/led_border.gif",
    site: "https://github.com/aaevan/led_border"
  },
  {
    name: "caveExplore",
    id: "caveExplore",
    description:
      "early prototype of a 3D exploration game in javascript (react)\
       mostly an excuse to learn react-three-fiber and learn react hooks.\
       [javascript, react, react-three-fiber]",
    image: "images/caveExplore.png",
    hoverImage: "images/caveExplore.gif",
    site: "https://github.com/aaevan/caveExplore"
  },
  {
    name: "pomodoro.sh",
    id: "pomdoro",
    description: 
      "keeps track of work and break times. uses osd_cat to write directly to\
       the screen. a tool I made for myself and use daily. [bash]",
    image: "images/pomodoro.png",
    hoverImage: "images/pomodoro.gif",
    site: "https://github.com/aaevan/aaevan_rc_files/blob/master/scripts/pomodoro.sh"
  },
  {
    name: "pantry-monitor",
    id: "pantryMonitor",
    description: 
      "uses large satisfying buttons, notifications and a usb scale\
       to track pantry staples. features horrible manual byte manipulation.\
       [raspi, python, bash]",
    image: "images/pantry_monitor.png",
    hoverImage: "images/pantry_monitor.gif",
    site: "https://github.com/aaevan/pantry-monitor"
  },
  {
    name: "flashy_bullshit.sh\n(caution: flashing lights)",
    id: "flashy",
    description: 
      "aggresively garish text that overwrites everything else,\
       [python, bash]",
    image: "images/flashy_bullshit.png",
    hoverImage: "images/flashy_bullshit.gif",
    site: "https://github.com/aaevan/aaevan_rc_files/blob/master/scripts/flashy_bullshit"
  },
  {
    name: "osd_cat_pixels.py",
    id: "osdpixels",
    description: 
      "a ridiculously inefficient way of drawing sprites to the screen. spawns\
       a new osd_cat process for each pixel. [bash]",
    image: "images/osd_cat_pixels.png",
    hoverImage: "images/osd_cat_pixels.gif",
    site: "https://github.com/aaevan/aaevan_rc_files/blob/master/scripts/osd_cat_pixels.py"
  },
  {
    name: "Jenny Holzer hotkey",
    id: "holzer",
    description: `pulls a random quote from Jenny Holzer's <a href='http://www.arthistoryarchive.com/arthistory/contemporary/Jenny-Holzer.html'><i>Survival Series</i></a>
     and prints it to the screen. [xbindkeys, osd_cat, bash]`,
    image: "images/holzer_hotkey.png",
    hoverImage: "images/holzer_hotkey.gif",
    site: "https://github.com/aaevan/aaevan_rc_files/blob/master/scripts/randquote.sh"
  },
  {
    name: "avr_cricket",
    id: "cricket",
    description: "(2014) an imitation field cricket using an ATtiny85 that changes delay between chirps based on <a href='https://en.wikipedia.org/wiki/Dolbear%27s_law'>temperature</a>",
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