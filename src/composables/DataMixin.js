import { ref, onMounted, onUnmounted } from 'vue'

export function DataMixin() {
    const scrollPosition = ref(null)
    const solutionsData = ref([
        {
            title: "Software Solutions",
            subTitle: "websites, cloud based Solutions, data analysis, data integrations and data synchronization systems",
            icon: "ri-global-fill",
            image: "global.png"
        },
        {
            title: "System integration",
            subTitle: "with us you can have your new system or integrate with existing systems or cloud services",
            icon: "ri-bar-chart-fill",
            image: "integrations.png"
        },
        {
            title: "Hosting",
            subTitle: "we provide domain names, websites hosting, and dataBases hosting, maintinance and monitoring",
            icon: "ri-server-fill",
            image: "servers.png"
        },
    ])

    const handleScroll = () => {
        scrollPosition.value = window.scrollY
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    return {
        scrollPosition,
        solutionsData
    }
}