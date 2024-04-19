// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/scss/main.scss"],

    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://use.typekit.net/ydx3bvs.css",
                },
            ],
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@use "~/assets/scss/_variables.scss" as *;',
                },
            },
        },
    },

    modules: ["@nuxt/content"],

    // content: {
    //     markdown: {
    //         anchorLinks: false,
    //     },
    // },

    router: {
        options: {
            scrollBehaviorType: "smooth",
        },
    },
});
