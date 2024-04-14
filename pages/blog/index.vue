<script setup lang="ts">
const route = useRoute();

const { data: posts } = await useAsyncData("blog", () =>
    queryContent("blog").find()
);
</script>

<template>
    <h1>Blogs</h1>
    <div class="blog-container">
        <div class="categories">
            <div>01 All Arcticles</div>
            <div>02 Programming</div>
            <div>03 Web Design</div>
            <div>04 Personal Development</div>
            <div>05 Health</div>
        </div>
        <div class="blog-list">
            <div class="category">01 All Arcticles</div>
            <div class="all-blogs">
                <NuxtLink
                    :to="post._path"
                    class="blog"
                    v-for="post in posts"
                    :key="post._id"
                >
                    <div class="blog-name">{{ post.title }}</div>
                    <div class="blog-date">{{ post.date }}</div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    padding: 4rem 2rem 0;
    padding-left: calc(2rem + 40%);
}

.blog-container {
    display: grid;
    grid-template-columns: 40% 1fr;
    padding: 2rem 0;
    gap: 2rem;

    .categories {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding-left: 2rem;

        div {
            color: grey;
        }

        div:first-child {
            color: $black;
        }
    }

    .blog-list {
        padding-right: 2rem;

        .all-blogs {
            padding-top: 2rem;

            a {
                color: $black;
                text-decoration: none;
            }

            .blog {
                display: flex;
                justify-content: space-between;
                border-bottom: 0.1rem solid $black;
                padding: 0.4rem 0;
            }
        }
    }
}
</style>
