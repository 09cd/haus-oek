<script setup>
const time = ref("");

const { data: posts } = await useAsyncData("blog", () =>
    queryContent("blog").find()
);

const allPosts = computed(() => {
    return [...posts.value]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
});

const updateTime = () => {
    const now = new Date();
    const options = {
        timeZone: "CET",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };
    time.value = now.toLocaleTimeString("en-US", options) + " CET";
};

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
};

let timer;

onMounted(() => {
    updateTime();
    timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>

<template>
    <div class="home">
        <main class="home__hero">
            <div>
                <div>{{ time }}</div>
                <div>51.2230° N, 6.7825° E</div>
            </div>
            <h1>
                Welcome to my Blog <br />
                This is my repository of all knowledge I gain
            </h1>
        </main>
        <div class="home__latest-blogs">
            <div class="header">
                <div>(Latest Blogs)</div>
                <div>(Date)</div>
            </div>
            <NuxtLink
                v-for="post in allPosts"
                :to="post._path"
                :key="post._id"
                class="blog"
            >
                <div>{{ post.title }}</div>
                <div>{{ formatDate(post.date) }}</div>
            </NuxtLink>
        </div>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped>
.home {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr auto auto;

    &__hero {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 4rem 2rem 2rem;

        @media (min-width: $bp-lg) {
            padding-left: $pad-left-lg;
        }

        @media (min-width: $bp-xl) {
            padding-left: $pad-left-xl;
        }

        h1 {
            padding: 0;
        }
    }

    &__latest-blogs {
        grid-row: 3;
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
        width: 100%;

        .header,
        .blog {
            display: flex;
            justify-content: space-between;
            border-bottom: 0.1rem solid var(--secondary);
            padding: 0.4rem 0;
        }

        .header {
            font-style: italic;

            div:last-child {
                display: none;
                @media (min-width: $bp-md) {
                    display: block;
                }
            }
        }

        .blog {
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

                &::before {
                    height: 100%;
                }

                div {
                    color: var(--primary);
                }
            }
        }

        a {
            color: var(--secondary);
            text-decoration: none;

            div:last-child {
                display: none;

                @media (min-width: $bp-md) {
                    display: block;
                }
            }
        }
    }

    .footer {
        grid-row: 4;
    }
}
</style>
