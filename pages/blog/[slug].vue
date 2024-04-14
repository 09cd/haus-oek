<script setup>
const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`, () =>
    queryContent().where({ _path: route.path }).findOne()
);
</script>

<template>
    <main>
        <nav>
            <div>01 Introduction</div>
            <div>02 The Independent Spirit</div>
            <div>03 Curious Explorer</div>
            <div>04 Purrfect Nap</div>
        </nav>
        <ContentRenderer :value="data" />
    </main>
</template>

<style scoped>
main {
    padding: 4rem 2rem 6rem;
    padding-left: calc(2rem + 40%);

    display: flex;

    nav {
        position: fixed;
        left: 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    :deep(p) {
        font-size: 1.125rem;
        padding-bottom: 1rem;
        text-align: justify;
    }

    :deep(h1) {
        font-size: 2rem;
    }

    :deep(h2) {
        font-size: 1.25rem;
        padding: 4rem 0 1.5rem;
    }

    :deep(img) {
        height: 16rem;
        width: 100%;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 3rem;
    }
}
</style>
