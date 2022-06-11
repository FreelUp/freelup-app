import AppLoading from "../components/AppLoading.vue";
import Store from "./vuex"

export default {
    install(app, options) {
        app.component('AppLoading', AppLoading)
        app.config.globalProperties.$loading = {
            show: (msg) => {
                Store.dispatch("loading/show", msg)
            },
            close: () => {
                Store.dispatch("loading/close")
            },
        }
    }
}