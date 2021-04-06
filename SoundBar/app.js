let sounds = ['creativeminds',
    'littleidea',
    'ukulele',
    'happyrock']
let soundbar = document.getElementById('soundbar')
let prev ='';
let flag = false

sounds.forEach(sound => {
    let button = document.createElement('button')
    button.innerText = sound
    button.classList.add('btn')
    soundbar.append(button)
    button.addEventListener('click', () => {
        let bool=checkIfPlaying(prev,flag)
        if (bool) {
            let music = document.getElementById(sound)
            console.log(music)
            music.play()
            prev = sound
            flag = true
        }
    })
})

function checkIfPlaying(previous, curFlag) {
    console.log('previous is ' + previous)
    if (curFlag) {
        let music = document.getElementById(previous)
        music.pause()
        music.currentTime=0
    }
    curFlag = true;
    return curFlag
}

