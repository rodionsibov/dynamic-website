const app = Vue.createApp({
    data() {
        return {
            author: "Kevin Kruse",
            quote: "Life isn’t about getting and having, it’s about giving and being.",
            message: "Random Quote Machine",
            backgroundColor: "red"
        }
    },
    methods: {
        async getQuotes() {
            const res = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            const { quotes } = await res.json()
            // console.log(quotes)

            let random = Math.floor(Math.random() * quotes.length + 1)

            this.author = quotes[random].author
            this.quote = quotes[random].quote

            let randomColor = Math.floor(Math.random() * 360)
            document.querySelector('body').style.backgroundColor = `hsl(${randomColor}, 50%, 50%)`
            document.querySelector('.fa-quote-left').style.color = `hsl(${randomColor}, 50%, 50%)`

        },
    },
})

app.mount('#app')
