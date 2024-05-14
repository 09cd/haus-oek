<template>
    <div class="blog-part"><slot /></div>
</template>

<style lang="scss">
.blog-part {
    width: 100%;

    @media (min-width: $bp-xl) {
        width: 75%;
    }

    h1 {
        font-size: 3rem;
    }

    h2,
    h3,
    h4 {
        font-size: 1.5rem;
        padding: 4rem 0 1.5rem;

        a {
            color: var(--secondary);
            text-decoration: none;
        }
    }

    p {
        font-size: 1.25rem;
        font-weight: 400;
        text-align: left;
        padding-bottom: 1rem;

        @media (min-width: $bp-sm) {
            text-align: justify;
        }
    }

    img {
        height: 24rem;
        width: 100%;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }
}
</style>
