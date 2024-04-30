<script></script>

<template>
    <footer class="footer">
        <div>Imprint, Privacy Policy</div>
        <div class="copyright">Copyright © 2024 Code With Sway</div>
    </footer>
    <!-- <AppFooter /> -->
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    padding: 0 2rem 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    .copyright {
        position: absolute;
        left: $pad-left-lg;

        @media (min-width: $bp-xl) {
            left: $pad-left-xl;
        }
    }
}
</style>
