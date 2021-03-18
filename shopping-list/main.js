const app = Vue.createApp({
    data() {
        return {
            state: 'default',
            header: 'shopping list app',
            newItem: '',
            items: []
        }
    },
    methods: {
        saveItem() {
            this.items.push(this.newItem)
            this.newItem = ''
        },
        changeState(newState) {
            this.state = newState
            this.newItem = ''
        }
    }
})
