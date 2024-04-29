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
                :class="{ active: activeCategory === 'Personal Development' }"
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
                    <div class="blog-date">{{ formatDate(post.date) }}</div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    padding: 4rem 2rem 2rem;
    padding-left: calc(2rem + 40%);
}

.blog-container {
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 2rem;

    .categories {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding-left: 2rem;

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
