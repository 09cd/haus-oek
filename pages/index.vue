<script setup>
// TODO: refactor (same code as in blog index page)

const route = useRoute();

const { data: posts } = await useAsyncData("blog", () =>
    queryContent("blog").find()
);

const allPosts = computed(() => {
    return [...posts.value]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
});

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
};

const time = ref("");

const updateTime = () => {
    const now = new Date();
    const options = {
        timeZone: "CET",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };
    time.value = now.toLocaleTimeString("en-US", options) + " CET";
    console.log(time.value);
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
        <div class="home-container">
            <div class="general-info">
                <div class="time">{{ time }}</div>
                <div class="location">51.2230° N, 6.7825° E</div>
            </div>
            <h1>
                Welcome to my Blog <br />
                This is my repository of all knowledge I gain
            </h1>
        </div>
        <div class="latest-articles">
            <div class="header">
                <div>(Latest Articles)</div>
                <div>(Date)</div>
            </div>
            <NuxtLink
                v-for="post in allPosts"
                :to="post._path"
                :key="post._id"
                class="article"
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
    // min-height: 100vh;
    // display: flex;
    // flex-direction: column;
    // gap: 12rem;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr auto auto;
    // margin-bottom: 2rem;

    .home-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 4rem 2rem 2rem;
        // padding: 4rem 2rem 75%;

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

    .latest-articles {
        grid-row: 3;
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
        width: 100%;
        // position: absolute;
        // bottom: 6rem;

        .header,
        .article {
            display: flex;
            justify-content: space-between;
            // border-bottom: 0.1rem solid $black;
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

        a {
            // color: $black;
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
        // margin-top: 2rem;
        position: static;
    }
}
</style>
