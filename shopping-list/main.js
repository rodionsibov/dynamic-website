const app = Vue.createApp({
    data() {
        return {
            state: 'default',
            header: 'shopping list app',
            newItem: '',
            items: [
                {
                    label: '10 party hats',
                    purchased: false,
                },
                {
                    label: '2 board games',
                    purchased: true,
                },
                {
                    label: '20 cups',
                    purchased: false,
                },
            ]
        }
    },
    methods: {
        saveItem() {
            if (this.newItem !== '')
                this.items.push({
                    label: this.newItem,
                    purchased: false
                })
            this.newItem = ''
        },
        changeState(newState) {
            this.state = newState
            this.newItem = ''
        },
        togglePurchased(item) {
            item.purchased = !item.purchased
        }
    },
    computed: {
        characterCount() {
            return this.newItem.length
        },
        reversedItems() {
            return this.items.slice(0).reverse()
        }
    }
})
