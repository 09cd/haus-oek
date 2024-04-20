<script setup>
const props = defineProps({
    content: String,
});
</script>

<template>
    <div :class="content"><slot /></div>
</template>

<style scoped></style>
