// middleware/restrictRoutes.js
export default function restrictRoutes(to, from, next) {
    if (to.path !== '/') {
        next('/')
    } else {
        next()
    }
}
