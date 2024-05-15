<script setup>
const { data: posts } = await useAsyncData("blog", () =>
    queryContent("blog").find()
);

const allPosts = computed(() => {
    return [...posts.value].sort((a, b) => new Date(b.date) - new Date(a.date));
});

const activeCategory = ref("All Articles");
const filteredPosts = ref([...allPosts.value]);

const filterPosts = (category) => {
    activeCategory.value = category;
    if (category === "All Articles") {
        filteredPosts.value = allPosts.value;
    } else {
        filteredPosts.value = allPosts.value.filter(
            (post) => post.category === category
        );
    }
};

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
};
</script>

<template>
    <div class="blog-page">
        <main>
            <h1>Blogs</h1>
            <div class="blogs">
                <div class="blogs__categories">
                    <div
                        :class="{
                            active: activeCategory === 'All Articles',
                        }"
                        @click="filterPosts('All Articles')"
                    >
                        01 All Articles
                    </div>
                    <div
                        :class="{ active: activeCategory === 'Programming' }"
                        @click="filterPosts('Programming')"
                    >
                        02 Programming
                    </div>
                    <div
                        :class="{ active: activeCategory === 'Web Design' }"
                        @click="filterPosts('Web Design')"
                    >
                        03 Web Design
                    </div>
                    <div
                        :class="{
                            active: activeCategory === 'Personal Development',
                        }"
                        @click="filterPosts('Personal Development')"
                    >
                        04 Personal Development
                    </div>
                    <div
                        :class="{ active: activeCategory === 'Health' }"
                        @click="filterPosts('Health')"
                    >
                        05 Health
                    </div>
                </div>
                <div class="blogs__list">
                    <div>{{ activeCategory }}</div>
                    <div class="list">
                        <NuxtLink
                            v-for="post in filteredPosts"
                            :to="post._path"
                            :key="post._id"
                            class="blog"
                        >
                            <div>{{ post.title }}</div>
                            <div class="blog__date">
                                {{ formatDate(post.date) }}
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </main>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped>
.blog-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 3.5rem);

    h1 {
        padding: 4rem 2rem 2rem;

        @media (min-width: $bp-lg) {
            padding-left: $pad-left-lg;
        }

        @media (min-width: $bp-xl) {
            padding-left: $pad-left-xl;
        }
    }

    .blogs {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        padding: 0 2rem;

        @media (min-width: $bp-lg) {
            display: grid;
            grid-template-columns: $pad-base-lg 1fr;
            gap: 2rem;
            padding: 0;
        }

        @media (min-width: $bp-xl) {
            grid-template-columns: $pad-base-xl 1fr;
        }

        &__categories {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            @media (min-width: $bp-lg) {
                padding-left: 2rem;
            }

            div {
                color: grey;

                &:hover {
                    cursor: pointer;
                }

                &.active {
                    color: var(--secondary);
                }
            }
        }

        &__list {
            @media (min-width: $bp-lg) {
                padding-right: 2rem;
            }

            .list {
                padding: 2rem 0 8rem;

                .blog {
                    display: flex;
                    justify-content: space-between;
                    gap: 2rem;
                    padding: 0.4rem 0;
                    border-bottom: 0.1rem solid var(--secondary);
                    color: var(--secondary);
                    text-decoration: none;
                    position: relative;
                    transition: 0.3s;

                    &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 0;
                        background: var(--secondary);
                        transition: 0.3s;
                        z-index: -1;
                    }

                    &:hover {
                        padding: 0.4rem 0.4rem;

                        &:before {
                            height: 100%;
                        }

                        div {
                            color: var(--primary);
                        }
                    }

                    &__date {
                        text-align: right;
                        display: none;

                        @media (min-width: $bp-md) {
                            display: block;
                        }
                    }
                }
            }
        }
    }
}
</style>
