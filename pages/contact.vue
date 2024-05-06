<script></script>

<template>
    <div class="contact">
        <div class="container">
            <h1>Contact</h1>
            <div class="contact-links">Email, LinkedIn, Instagram</div>
            <div class="message">
                Feel free to send me an Email or DM me on Instragram
            </div>
        </div>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped>
.contact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 3.5rem);

    .container {
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
