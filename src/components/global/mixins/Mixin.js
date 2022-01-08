import Vue from 'vue'
Vue.mixin({
    methods: {
        goToId(id) {
            document.getElementById(id).scrollIntoView();
        },
    }
})