<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`, () =>
    queryContent().where({ _path: route.path }).findOne()
);

const allHeadings = ref([]);

onMounted(() => {
    document.querySelectorAll("h2").forEach((heading) => {
        allHeadings.value.push(heading.textContent);
    });

    document.querySelectorAll(".blog-part").forEach((part) => {
        gsap.to(part, {
            scrollTrigger: {
                trigger: part,
                start: "top 45%",
                end: "bottom 45%",

                onEnter: () => {
                    let headingHref = part
                        .querySelector("h2 a")
                        .getAttribute("href");
                    document.querySelectorAll("main nav a").forEach((link) => {
                        let navHref = link.getAttribute("href");
                        if (
                            navHref ===
                            `/blog/${route.params.slug}${headingHref}`
                        ) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                },
                onEnterBack: () => {
                    let headingHref = part
                        .querySelector("h2 a")
                        .getAttribute("href");
                    document.querySelectorAll("main nav a").forEach((link) => {
                        let navHref = link.getAttribute("href");
                        if (
                            navHref ===
                            `/blog/${route.params.slug}${headingHref}`
                        ) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                },
            },
        });
    });

    onUnmounted(() => {
        ScrollTrigger.getAll().forEach((trigger) => {
            trigger.kill();
        });
    });
});
</script>

<template>
    <div class="back-link">
        <svg
            fill="grey"
            height="12px"
            width="12px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 476.213 476.213"
            xml:space="preserve"
        >
            <polygon
                points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 
	                57.427,253.107 476.213,253.107 "
            />
        </svg>
        <NuxtLink to="/blog" class="all-blogs-link">All Blogs</NuxtLink>
    </div>
    <div class="blog-container">
        <main>
            <nav>
                <NuxtLink
                    v-for="(heading, index) in allHeadings"
                    :key="heading"
                    :to="{
                        path: route.path,
                        hash:
                            '#' +
                            heading
                                .toLowerCase()
                                .replace(/[\p{P}\p{S}]/gu, '')
                                .replace(/\s+/g, '-'),
                    }"
                >
                    {{ (index + 1).toString().padStart(2, "0") }} {{ heading }}
                </NuxtLink>
            </nav>
            <ContentRenderer :value="data" />
        </main>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped>
.back-link {
    display: flex;
    padding-left: 2rem;
    padding-top: 2rem;
    align-items: center;

    @media (min-width: $bp-lg) {
        padding-left: $pad-left-lg;
    }

    @media (min-width: $bp-xl) {
        padding-left: $pad-left-xl;
    }

    a {
        display: block;
        position: relative;
        color: grey;
        text-decoration: none;
        font-size: 0.8rem;
        padding-left: 0.75rem;
    }
}

.blog-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 6.5rem);

    main {
        padding: 2rem 2rem 0rem;
        display: flex;
        flex-direction: column;
        gap: 4rem;

        @media (min-width: $bp-lg) {
            display: block;
            padding-left: $pad-left-lg;
        }

        @media (min-width: $bp-xl) {
            padding-left: $pad-left-xl;
        }

        nav {
            display: none;
            max-width: 18rem;

            @media (min-width: $bp-lg) {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                position: fixed;
                left: 2rem;
            }

            a {
                color: grey;
                text-decoration: none;
            }

            .active {
                color: var(--secondary);
            }
        }
    }
}
</style>
