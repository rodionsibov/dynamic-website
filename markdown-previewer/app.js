const app = Vue.createApp({
    template: `
    <div>
        <h2 class="text-center m-4 text-white">Convert your Markdown</h2>
        <div class="row">
            <div class="col-6">
                <h6 class="text-center text-white">Enter your markdown here</h6>
                <textarea class="form-control" id="editor" :value="text" @keyup="handleChange"></textarea>
            </div>
            <div class="col-6">
                <h6 class="text-center text-white">See the result</h6>
                <div class="preview rounded p-2" v-html="markdown" id="preview">
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            text: `
# Heading
## Heading 2

This is a paragraph

**This is a bolded text**

> Block Quotes

- list item 1
- list item 2
- list item 3

[visit my website](https://github.com)

This is a inline \`<div></div>\`

This is a block of code

\`\`\`
let x = 1;
let y = 2;
let z = x + y;
\`\`\`

![Vue](https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg)
    
         `
        }
    },
    methods: {
        handleChange(e) {
            this.text = e.target.value
        }
    },
    computed: {
        markdown() {
            return marked(this.text, { breaks: true })
        },
    }
})

app.mount('#app')
