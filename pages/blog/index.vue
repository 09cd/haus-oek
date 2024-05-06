<script setup>
const route = useRoute();

const { data: posts } = await useAsyncData("blog", () =>
    queryContent("blog").find()
);

const allPosts = computed(() => {
    return [...posts.value].sort((a, b) => new Date(b.date) - new Date(a.date));
});

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
};
const activeCategory = ref("all");
const filteredPosts = ref([...allPosts.value]);

const filterPosts = (category) => {
    activeCategory.value = category;
    console.log(activeCategory.value);
    if (category === "all") {
        filteredPosts.value = allPosts.value;
    } else {
        filteredPosts.value = allPosts.value.filter(
            (post) => post.category === category
        );
    }
};
</script>

<template>
    <div class="blog-page">
        <div>
            <h1>Blogs</h1>
            <div class="blog-container">
                <div class="categories">
                    <div
                        :class="{ active: activeCategory === 'all' }"
                        @click="filterPosts('all')"
                    >
                        01 All Arcticles
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
                <div class="blog-list">
                    <div class="category">01 All Arcticles</div>
                    <div class="all-blogs">
                        <NuxtLink
                            v-for="post in filteredPosts"
                            :to="post._path"
                            :key="post._id"
                            class="blog"
                        >
                            <div class="blog-name">{{ post.title }}</div>
                            <div class="blog-date">
                                {{ formatDate(post.date) }}
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

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

    .blog-container {
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

        .categories {
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
            }

            .active {
                color: $black;
            }
        }

        .blog-list {
            @media (min-width: $bp-lg) {
                padding-right: 2rem;
            }

            .all-blogs {
                // padding-top: 2rem;
                padding: 2rem 0 8rem;

                a {
                    color: $black;
                    text-decoration: none;
                }

                .blog {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 0.1rem solid $black;
                    padding: 0.4rem 0;
                    gap: 2rem;

                    .blog-date {
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
