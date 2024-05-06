<script></script>

<template>
    <footer class="footer">
        <div>Imprint, Privacy Policy</div>
        <div class="copyright">Copyright © 2024 Code With Sway</div>
        <!-- <div class="copyright-short">© 2024 Code With Sway</div> -->
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 2rem 2rem;
    // position: absolute;
    // bottom: 0;
    // left: 0;
    width: 100%;

    @media (min-width: $bp-sm) {
        flex-direction: row;
    }

    .copyright {
        position: static;
        display: none;

        @media (min-width: $bp-sm) {
            display: block;
        }

        @media (min-width: $bp-lg) {
            position: absolute;
            left: $pad-left-lg;
        }

        @media (min-width: $bp-xl) {
            left: $pad-left-xl;
        }
    }

    .copyright-short {
        display: block;

        @media (min-width: $bp-sm) {
            display: none;
        }
    }
}
</style>
