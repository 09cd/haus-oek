<script setup>
import { gsap } from "gsap";

const colorMode = useColorMode();

colorMode.preference = "light";
const isDarkMode = ref(colorMode.preference === "dark");

function changeColorMode() {
    timeline.reverse();

    if (colorMode.preference === "light") {
        colorMode.preference = "dark";
        isDarkMode.value = true;
    } else {
        colorMode.preference = "light";
        isDarkMode.value = false;
    }
}

const timeline = gsap.timeline({ paused: true });

onMounted(() => {
    const menuButton = document.querySelector(".navbar__menu-btn");
    const closeButton = document.querySelector(".overlay__close-btn");

    isDarkMode.value = colorMode.preference === "dark";

    gsap.set(".menu-item span", { y: 20 });

    timeline.set(".overlay", { display: "block" });

    timeline.to(".overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.in",
    });

    timeline.from(
        ".divider",
        {
            duration: 0.7,
            width: "0%",
            ease: "power2.in",
            stagger: 0.1,
        },
        "<0.5"
    );

    timeline.to(
        ".menu-item span",
        {
            duration: 0.7,
            y: 0,
            stagger: 0.1,
            ease: "power2.in",
        },
        "<"
    );

    menuButton.addEventListener("click", function () {
        document.querySelector(".color-mode-btn").textContent = isDarkMode.value
            ? "Light Mode"
            : "Dark Mode";
        timeline.play();
    });

    closeButton.addEventListener("click", function () {
        timeline.reverse();
    });
});
</script>

<template>
    <nav class="navbar">
        <ul class="navbar__links">
            <li>
                <NuxtLink to="/about-me" class="link">About Me</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact" class="link">Contact</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog" class="link">Blog</NuxtLink>
            </li>
        </ul>
        <div class="navbar__logo">
            <NuxtLink to="/" class="link">Haus Diep</NuxtLink>
        </div>
        <div class="navbar__menu-btn">Menu</div>
    </nav>
    <div class="overlay">
        <div class="overlay__close-btn">Close</div>
        <div class="overlay__menu">
            <div class="divider"></div>
            <NuxtLink to="/" @click="timeline.reverse()" class="menu-item">
                <p>
                    <span>Home</span>
                </p>
            </NuxtLink>
            <div class="divider"></div>
            <NuxtLink
                to="/about-me"
                @click="timeline.reverse()"
                class="menu-item"
            >
                <p>
                    <span>About Me</span>
                </p>
            </NuxtLink>
            <div class="divider"></div>
            <NuxtLink
                to="/contact"
                @click="timeline.reverse()"
                class="menu-item"
            >
                <p>
                    <span>Contact</span>
                </p>
            </NuxtLink>
            <div class="divider"></div>
            <NuxtLink to="/blog" @click="timeline.reverse()" class="menu-item">
                <p>
                    <span>Blog</span>
                </p>
            </NuxtLink>
            <div class="divider"></div>
            <div class="menu-item" @click="changeColorMode()">
                <p>
                    <span class="color-mode-btn">Dark Mode</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.navbar {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    position: sticky;
    top: 0;
    left: 0;
    padding: 1rem 2rem;
    background-color: var(--primary);
    border-bottom: 1px solid var(--secondary);
    z-index: 2; // !!!

    &__links {
        display: none;
        list-style: none;

        @media (min-width: $bp-lg) {
            display: flex;
            justify-content: space-between;
            gap: 2rem;
        }
    }

    &__logo {
        @media (min-width: $bp-lg) {
            position: absolute;
            left: $pad-left-lg;
            top: 1rem;
        }

        @media (min-width: $bp-xl) {
            left: $pad-left-xl;
        }
    }

    &__menu-btn {
        cursor: pointer;
    }

    .link {
        color: var(--secondary);
        text-decoration: none;
    }
}

.overlay {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    will-change: transform;
    z-index: 3;

    &__close-btn {
        position: absolute;
        top: 1rem;
        right: 2rem;
        color: $white;
        cursor: pointer;
    }

    &__menu {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, auto 1fr);
        height: 100%;
        width: 100%;
        padding: 3rem 0;
        gap: 0.5rem;

        @media (min-height: $bp-sm) {
            padding: 12rem 0 2rem;
            gap: 1rem;
        }

        .divider {
            width: 100%;
            height: 1px;
            background: $white;
        }

        .menu-item {
            cursor: pointer;

            p {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                overflow: hidden;
                // height: 100%;

                span {
                    padding-left: 2rem;
                    color: $white;
                    text-decoration: none;
                    display: inline-block;
                    // width: 100%;
                    // height: 100%;

                    @media (min-width: $bp-sm) {
                        padding-left: 8rem;
                    }
                }
            }
        }
    }
}
</style>
