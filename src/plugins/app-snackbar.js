import AppSnackbar from "../components/general/AppSnackbar.vue";
import Store from "./vuex"

export default {
    install(app, options) {
        app.component('AppSnackbar', AppSnackbar)
        app.config.globalProperties.$snackbar = {
            open: (text) => {
                Store.dispatch("snackbar/open", text)
            },
            close: () => {
                Store.dispatch("snackbar/close")
            },
        }
    }
}