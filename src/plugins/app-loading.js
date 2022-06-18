import AppLoading from "../components/general/AppLoading.vue";
import Store from "./vuex"

export default {
    install(app, options) {
        app.component('AppLoading', AppLoading)
        app.config.globalProperties.$loading = {
            open: (msg) => {
                Store.dispatch("loading/open", msg)
            },
            close: () => {
                Store.dispatch("loading/close")
            },
        }
    }
}