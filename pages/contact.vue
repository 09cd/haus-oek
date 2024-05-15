<script></script>

<template>
    <div class="contact-page">
        <main>
            <h1>Contact</h1>
            <div>Email, YouTube, Instagram</div>
            <div>Feel free to send me an Email or DM me on Instragram</div>
        </main>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped>
.contact-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 3.5rem);

    main {
        padding: 4rem 2rem 0rem;

        @media (min-width: $bp-lg) {
            padding-left: $pad-left-lg;
        }

        @media (min-width: $bp-xl) {
            padding-left: $pad-left-xl;
        }
    }
}
</style>
