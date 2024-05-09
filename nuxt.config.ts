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

    modules: ["@nuxt/content", "@nuxtjs/color-mode"],

    // content: {
    //     markdown: {
    //         anchorLinks: false,
    //     },
    // },

    colorMode: {
        // preference: "system", // default value of $colorMode.preference
        preference: "light",
        fallback: "light", // fallback value if not system preference found
    },

    router: {
        options: {
            scrollBehaviorType: "smooth",
        },
    },

    // FOR MOBILE TESTING
    devServer: {
        port: 8000, // default: 3000
        host: "0.0.0.0", // default: localhost
    },
});
