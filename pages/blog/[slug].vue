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
                // markers: true,

                // Refactor this

                onEnter: () => {
                    let href = part.querySelector("h2 a").getAttribute("href");
                    document.querySelectorAll("main nav a").forEach((link) => {
                        let navHref = link.getAttribute("href");
                        if (navHref === `/blog/${route.params.slug}${href}`) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                },
                onEnterBack: () => {
                    let href = part.querySelector("h2 a").getAttribute("href");
                    document.querySelectorAll("main nav a").forEach((link) => {
                        let navHref = link.getAttribute("href");
                        if (navHref === `/blog/${route.params.slug}${href}`) {
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
    <div class="blog-article">
        <main>
            <nav>
                <NuxtLink
                    v-for="(heading, index) in allHeadings"
                    :key="heading"
                    :to="{
                        path: route.path,
                        hash: '#' + heading.toLowerCase().replace(/\s+/g, '-'),
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
}

.all-blogs-link {
    // padding: 2rem 2rem 0;
    // color: var(--secondary);
    color: grey;
    text-decoration: none;
    font-size: 0.8rem;
    overflow: hidden;

    padding-left: 0.75rem;

    display: block;
    position: relative;

    // transition: padding 0.3s;

    // &:hover {
    //     padding-left: 1.5rem;
    // }

    // @media (min-width: $bp-lg) {
    //     padding-left: $pad-left-lg;
    // }

    // @media (min-width: $bp-xl) {
    //     padding-left: $pad-left-xl;
    // }

    // &::before {
    //     content: url("/assets/images/left-arrow.svg");
    //     padding-right: 0.5rem;
    //     // display: none;
    //     position: relative;
    //     // clip-path: polygon(100% 100%, 100% 100%, 100% 0, 100% 0);
    //     transition: padding 0.3s;
    //     fill: red;
    // }

    // &:hover::before {
    //     padding-right: 1rem;
    //     padding-left: 0.5rem;
    //     // clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
    //     // display: inline;
    // }
}
.blog-article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 6.5rem);
}
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

    display: flex;

    nav {
        display: none;

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
    }

    :deep(p) {
        font-size: 1.125rem;
        // font-size: 24px;
        padding-bottom: 1rem;
        text-align: left;

        @media (min-width: $bp-sm) {
            text-align: justify;
        }
    }

    :deep(h1) {
        font-size: 2rem;
        // font-size: 48px;
    }

    :deep(h2) {
        font-size: 1.25rem;
        // font-size: 24px;
        padding: 4rem 0 1.5rem;
    }

    :deep(h2, h3, h4) {
        a {
            color: var(--secondary);
            text-decoration: none;
        }
    }

    :deep(img) {
        height: 16rem;
        width: 100%;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 3rem;
    }
}

.active {
    color: var(--secondary);
}
</style>
