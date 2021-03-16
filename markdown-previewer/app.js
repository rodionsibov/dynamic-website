const app = Vue.createApp({
    template: `
    <div>
        <h2 class="text-center m-4">Convert your Markdown</h2>
        <div class="row">
            <div class="col-6">
                <h6 class="text-center">Enter your markdown here</h6>
                <textarea class="form-control" id="editor" :value="text" @keyup="handleChange"></textarea>
            </div>
            <div class="col-6" id="preview">
                <h6 class="text-center">See the result</h6>
                <div class="preview rounded" v-html="markdown">
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
         text: '',
        }
    },
    methods: {
       handleChange(e) {
           this.text = e.target.value
       }
    },
    computed: {
        markdown() {
            return marked(this.text)
        }
    }
})

app.mount('#app')
