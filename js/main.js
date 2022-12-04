(() => {
    const { createApp } = Vue

    createApp({
        created() {
            console.log('vue instance is created');
            //fetch('./scripts/json2.php')
            fetch('./data.json')
                .then(res => res.json())
                .then(data => this.ProjectData = data)
            .catch(error => console.error(error));
        },

        data() {
            console.log('vue data check');
            return {
                ProjectData: {},
            }
        },
        
        components: {
        }
    }).mount('#app')

    createApp({
        created() {
            console.log('vue instance is created');
        },

        data() {
            console.log('vue data check');
            return {
                ProjectData: {},
            }
        },
        
        components: {
        }
    }).mount('#sidebar')

    createApp({
        created() {
            console.log('vue instance is created');
        },

        data() {
            console.log('vue data check');
            return {
                ProjectData: {},
            }
        },
        
        components: {
        }
    }).mount('#profile')
    
})()