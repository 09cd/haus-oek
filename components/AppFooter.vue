<template>
    <footer class="footer">
        <div>Imprint, Privacy Policy</div>
        <div class="footer__copyright">Copyright © 2024 Haus Diep</div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;

    @media (min-width: $bp-sm) {
        flex-direction: row;
    }

    &__copyright {
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
}
</style>
