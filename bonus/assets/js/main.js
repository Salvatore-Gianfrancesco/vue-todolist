const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: "",
            error: false,
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
        },
        addTask(taskText) {
            // console.log(this.newTask);
            // console.log(this.newTask.length);

            if (taskText.length < 5) {
                this.error = true;
            } else {
                this.tasks.unshift({
                    text: taskText,
                    done: false
                });
                this.newTask = "";
                this.error = false;
            }
        },
        markTask(i) {
            // console.log("Marked task", i);
            if (this.tasks[i].done) {
                this.tasks[i].done = false;
            } else {
                this.tasks[i].done = true;
            }
        }
    }
}).mount('#app');