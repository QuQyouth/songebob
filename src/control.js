import string from "./css";
const textContent = document.querySelector('#textContent')
const textCss = document.querySelector('#textCss')

const player = {
    n: 1,
    time: 0,
    id: undefined,
    events: {
        '#btnPause': 'clearPlay',
        '#btnPlay': 'keepOn',
        '#btnSlow': 'slow',
        '#btnEnd': 'end'

    },
    init: () => {

        // 初始计时器
        player.play()
        player.bindEvents()
    },

    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }

        }
    },
    run: () => {
        player.n++
            if (player.n > string.length) {
                window.clearInterval(player.id)
                return
            }
        textContent.innerText = string.substring(0, player.n)
        textCss.innerText = string.substring(0, player.n)
        textContent.scrollTop = textContent.scrollHeight
    },
    play: () => {
        // return setInterval(player.run, time)
        player.id = setInterval(player.run, player.time)
    },
    clearPlay: () => {
        window.clearInterval(player.id)
    },
    keepOn: () => {
        player.time = 0
        player.clearPlay()
        player.play()
    },
    slow: () => {
        player.clearPlay()
        player.time += 10
        player.play()
    },
    end: () => {
        player.clearPlay()
        textContent.innerText = string
        textCss.innerText = string
        textContent.scrollTop = textContent.scrollHeight
    }
}

player.init()