// src/mixins/scrollMixin.js
export default {
    methods: {
        goToId(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}