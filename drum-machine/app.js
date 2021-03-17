const app = Vue.createApp({
    template:
        /*html*/
        `
    <div id="drum-machine" class="container">
        <div id="display" ref="display" class="display">
            <div class="drum-pad" v-for="(drumPad, index) in drumPads" :key="index" @click="play(index)">
               {{ drumPad.key }}
               <audio :src="drumPad.url" class="clip" :id="drumPad.key"></audio>
            </div>
            <div class="song" ref="song">?</div>
        </div>
    </div>
    `,
    data() {
        return {
            drumPads: [
                {
                    "key": "Q",
                    "song": "Heater-1",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                },
                {
                    "key": "W",
                    "song": "Heater-2",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                },
                {
                    "key": "E",
                    "song": "Heater-3",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                },
                {
                    "key": "A",
                    "song": "Heater-4",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                },
                {
                    "key": "S",
                    "song": "Heater-6",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                },
                {
                    "key": "D",
                    "song": "Dsc_Oh",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                },
                {
                    "key": "Z",
                    "song": "Kick_n_Hat",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                },
                {
                    "key": "X",
                    "song": "RP4_KICK_1",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                },
                {
                    "key": "C",
                    "song": "Cev_H2",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                }
            ],
        }
    },
    methods: {
        play(index) {
            // e.target.children[0].play()
            const audio = new Audio()
            audio.src = this.drumPads[index].url
            audio.play()

            this.$refs.song.textContent = `${this.drumPads[index].song}`
            
            this.$refs.display.children[index].classList.add('active')
            this.$refs.display.children[index].style.background = `hsl(${Math.floor(Math.random() * 360)},50%,50%)`
            setTimeout(() => {
                this.$refs.display.children[index].classList.remove('active')
            }, 200)
        },
        move(e) {
            if (document.getElementById(e.key.toUpperCase())) {
                document.getElementById(e.key.toUpperCase()).pause()
            }
            this.drumPads.forEach((drumPad, index) => {
                if (e.key.toUpperCase() === drumPad.key) {

                    const audio = new Audio()
                    audio.src = drumPad.url
                    audio.play()

                    this.$refs.song.textContent = drumPad.song

                    this.$refs.display.children[index].classList.add('active')
                    this.$refs.display.children[index].style.background = `hsl(${Math.floor(Math.random() * 360)},50%,50%)`
                    // setTimeout(() => {
                    //     this.$refs.display.children[index].classList.remove('active')
                    // }, 200)
                    audio.addEventListener('ended', () => {
                        this.$refs.display.children[index].classList.remove('active')
                    })
                }
            })
        }
    },
    computed: {

    },
    mounted() {
        window.addEventListener('keydown', this.move);
    },
    unmounted() {
        window.removeEventListener('keydown', this.move);
    }
})
