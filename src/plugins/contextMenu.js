export default {
    install(Vue) {
        if (this.installed) {
            return;
        }

        this.installed = true;

        Vue.prototype.$contextMenu = {
            EventBus: new Vue(),
            show() {
                this.EventBus.$emit('show');
            },
        }
    }
}