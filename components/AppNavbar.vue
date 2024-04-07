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
            <NuxtLink to="/" class="nav-link">Code with Sway</NuxtLink>
        </div>
        <div class="navbar-menu">Menu</div>
    </nav>
</template>

<style lang="scss">
.navbar {
    display: grid;
    grid-template-columns: auto repeat(4, 1fr) auto;
    gap: 2rem;
    padding: 2rem;

    .navbar-container {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        list-style: none;
        grid-column: 1 / 2;
    }

    .navbar-logo {
        grid-column: 3 / 6;
    }

    .navbar-menu {
        grid-column: 6 / 7;
    }

    .nav-link {
        color: $black;
        text-decoration: none;
    }
}
</style>
