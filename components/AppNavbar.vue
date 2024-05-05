<script setup>
import { gsap } from "gsap";

const menuButton = ref(null);
const closeButton = ref(null);

const timeline = gsap.timeline({ paused: true });

onMounted(() => {
    gsap.set(".menu-item p", { y: 20 });

    menuButton.value = document.querySelector(".navbar-menu");
    closeButton.value = document.querySelector(".close-button");

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
        ".menu-item p",
        {
            duration: 0.7, //o.75
            y: 0,
            stagger: 0.1,
            ease: "power2.in",
        },
        "<"
    );

    menuButton.value.addEventListener("click", function () {
        timeline.play();
    });

    closeButton.value.addEventListener("click", function () {
        timeline.reverse();
    });
});
</script>

<template>
    <nav class="navbar">
        <ul class="navbar-container">
            <li>
                <NuxtLink to="/about-me" class="nav-link">About Me</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
            </li>
        </ul>
        <div class="navbar-logo">
            <NuxtLink to="/" class="nav-link">Haus Oek</NuxtLink>
        </div>
        <div class="navbar-menu">Menu</div>
    </nav>
    <div class="overlay">
        <div class="close-button">Close</div>
        <div class="overlay-menu">
            <div class="divider"></div>
            <div class="menu-item">
                <p>
                    <NuxtLink to="/about-me" @click="timeline.reverse()"
                        >About Me</NuxtLink
                    >
                </p>
            </div>
            <div class="divider"></div>
            <div class="menu-item">
                <p>
                    <NuxtLink to="/contact" @click="timeline.reverse()"
                        >Contact</NuxtLink
                    >
                </p>
            </div>
            <div class="divider"></div>
            <div class="menu-item">
                <p>
                    <NuxtLink to="/blog" @click="timeline.reverse()"
                        >Blog</NuxtLink
                    >
                </p>
            </div>
            <div class="divider"></div>
            <div class="menu-item">
                <p><a href="#" @click="timeline.reverse()">Dark Mode</a></p>
            </div>
            <div class="divider"></div>
            <div class="menu-item">
                <p><a href="#" @click="timeline.reverse()">Deutsch</a></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.navbar {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 1rem 2rem 1rem 2rem;
    position: sticky;
    top: 0;
    left: 0;
    background-color: $white;
    border-bottom: 1px solid $black;
    // z-index: 2;

    .navbar-container {
        display: none;
        @media (min-width: $bp-lg) {
            display: flex;
            justify-content: space-between;
            gap: 2rem;

            list-style: none;
        }
    }

    .navbar-logo {
        @media (min-width: $bp-lg) {
            position: absolute;
            left: $pad-left-lg;
            top: 1rem;
        }

        @media (min-width: $bp-xl) {
            left: $pad-left-xl;
        }
    }

    .nav-link {
        color: $black;
        text-decoration: none;
    }

    .navbar-menu {
        cursor: pointer;
    }
}

.overlay {
    .close-button {
        position: absolute;
        top: 1rem;
        right: 2rem;
        cursor: pointer;
        color: #fffefe; // $white
    }

    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #111314; // $black
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); /* full width, 0 height */
    will-change: transform;
    z-index: 3;

    .overlay-menu {
        position: fixed;
        bottom: 5.5rem;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .divider {
            width: 100%;
            height: 1px;
            background: #fffefe; // $white
            margin: 5.5rem 0 2rem;
        }

        .menu-item {
            // padding: 2rem 0 5.5rem;
            cursor: pointer;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

            a {
                padding-left: 2rem;
                color: #fffefe; // $white
                text-decoration: none;
                @media (min-width: $bp-sm) {
                    padding-left: 8rem;
                }
            }
        }
    }
}
</style>
