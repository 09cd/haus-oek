<script setup>
const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`, () =>
    queryContent().where({ _path: route.path }).findOne()
);
</script>

<template>
    <main>
        <ContentRenderer :value="data" />
    </main>
</template>