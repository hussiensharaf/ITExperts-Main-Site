export default {
    
    data: () => ({
        scrollPosition: null,
        solutionsData: [
            {
              title: "Software Solutions",
              subTitle: `websites, cloud based Solutions, data analysis, data integrations and data synchronization systems `,
              icon: "fas fa-globe",
            },
            {
              title: "System integration",
              subTitle: `with us you can have your new system or integrate with existing
                    systems or cloud services`,
              icon: "fas fa-project-diagram",
            },
            {
              title: "Hosting",
              subTitle: `we provide domain names, websites hosting, and dataBases hosting, maintinance and monitoring  `,
              icon: "fa fa-server",
            },
          ],
    })
    ,
    mounted() {
        window.addEventListener("scroll", ()=>{
            this.scrollPosition = window.scrollY;
        });
    }

}