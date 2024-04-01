<script setup></script>

<template>
    <!-- TODO: Replace with Nuxt Link -->
    <nav class="navbar">
        <ul class="navbar-container">
            <li>
                <a href="#" class="nav-link">About Me</a>
            </li>
            <li>
                <a href="#" class="nav-link">Contact</a>
            </li>
            <li>
                <a href="#" class="nav-link">Blog</a>
            </li>
        </ul>
        <div class="navbar-logo">
            <a href="#" class="nav-link">Code with Sway</a>
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
