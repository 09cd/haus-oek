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
    document.querySelectorAll(".blog-part").forEach((part) => {
        gsap.to(part, {
            scrollTrigger: {
                trigger: part,
                start: "top+=4rem top",

                // Refactor this

                onEnter: () => {
                    let href = part.querySelector("h2 a").getAttribute("href");
                    document.querySelectorAll("main nav a").forEach((link) => {
                        let navHref = link.getAttribute("href");
                        if (navHref === `/blog/hello-world${href}`) {
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
                        if (navHref === `/blog/hello-world${href}`) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                },
            },
        });
    });

    document.querySelectorAll("h2").forEach((heading) => {
        allHeadings.value.push(heading.textContent);
    });

    for (let heading of allHeadings.value) {
        console.log(heading);
    }
});
</script>

<template>
    <main>
        <nav>
            <!-- <NuxtLink :to="{ path: route.path, hash: '#introduction' }"
                >01 Introduction</NuxtLink
            >
            <NuxtLink
                :to="{ path: route.path, hash: '#the-independent-spirit' }"
                >02 The Independent Spirit</NuxtLink
            >
            <NuxtLink :to="{ path: route.path, hash: '#curious-explorer' }"
                >03 Curious Explorer</NuxtLink
            >
            <NuxtLink :to="{ path: route.path, hash: '#purrfect-nap' }"
                >04 Purrfect Nap</NuxtLink
            > -->

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
</template>

<style lang="scss" scoped>
main {
    padding: 4rem 2rem 6rem;
    padding-left: calc(2rem + 40%);

    display: flex;

    nav {
        position: fixed;
        left: 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        a {
            // color: $black;
            color: grey;
            text-decoration: none;
        }
    }

    :deep(p) {
        /* font-size: 1.125rem; */
        font-size: 24px;
        padding-bottom: 1rem;
        text-align: justify;
    }

    :deep(h1) {
        /* font-size: 2rem; */
        font-size: 48px;
    }

    :deep(h2) {
        /* font-size: 1.25rem; */
        font-size: 24px;
        padding: 4rem 0 1.5rem;
    }

    :deep(h2, h3, h4) {
        a {
            color: $black;
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
    color: $black;
}
</style>
