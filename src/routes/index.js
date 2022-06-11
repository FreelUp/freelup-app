import Login from "./../pages/Login.vue"
import Register from "./../pages/Register.vue"
import Home from "./../pages/Home.vue"

export default [
    {
        path: "/",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/home",
        component: Home
    }
]