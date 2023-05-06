Vue.createApp({
    data(){
        return{
           isLight:true

        }

    },
    methods:{
toggle(){
    this.isLight= !this.isLight
}
    }
}).mount('#app')