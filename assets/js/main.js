import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "Learn HTML",
                    done: true
                },
                {
                    text: "Learn CSS",
                    done: false
                },
                {
                    text: "Learn JS",
                    done: false
                }
            ]
        }
    }
}).mount('#app');