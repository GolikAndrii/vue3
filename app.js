const App = {
    data(){
        return{
            counter: 42,
            title: 'Счетчик'
        }
    }
}

Vue.createApp(App).mount('#app')