let app = Vue.createApp({
    data(){
        return{
            users: [],
            username: "",
            age: ""
        }
    },
    methods: {
        addUser(){
            let user={
                name: this.username,
                age: this.age
            }
            this.username = ""
            this.age = ""
            this.users.push(user)
            console.log(this.users)
        }
    }
})
app.component("user-form",{
    template: `<div class="user">
    <h2>User</h2>
    <p>Name:<i>{{name}}</i></p>
    <p>Age:<i>{{age}}</i></p>
    <hr>         
    `,
    props:{
        name: {
            type: String,
            required: true,
            default: "Username",
            validator: function(value){
                return value != "Bio" && value != ""
            }
        },
        age: {
            type: String,
            required: true,
            default: "2",
            validator: function(value){
                return value > 2
            }
        }
    }
})

app.mount("#app")