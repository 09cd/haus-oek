<script setup></script>

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

    .navbar-container {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        list-style: none;
    }

    .navbar-logo {
        position: absolute;
        left: calc(2rem + 40%);
        top: 1rem;
    }

    .nav-link {
        color: $black;
        text-decoration: none;
    }
}
</style>
