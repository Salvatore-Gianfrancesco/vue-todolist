const { createApp } = Vue;

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
    },
    methods: {
        cancelTask(i) {
            // console.log(i);
            this.tasks.splice(i, 1);
        }
    }
}).mount('#app');