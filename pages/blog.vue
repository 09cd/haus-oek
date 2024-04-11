<script></script>

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
                <div class="blog">
                    <div class="blog-name">Nullam id enim sit amet</div>
                    <div class="blog-date">March 03, 2024</div>
                </div>
                <div class="blog">
                    <div class="blog-name">
                        Sed consequat libero at magna sodales
                    </div>
                    <div class="blog-date">February 12, 2024</div>
                </div>
                <div class="blog">
                    <div class="blog-name">
                        Fusce at justo sit amet lorem iaculis lacinia
                    </div>
                    <div class="blog-date">January 05, 2024</div>
                </div>
                <div class="blog">
                    <div class="blog-name">Proin at condimentum velit</div>
                    <div class="blog-date">January 01, 2024</div>
                </div>
                <div class="blog">
                    <div class="blog-name">
                        Curabitur ac diam quis metus ultrices fermentum
                    </div>
                    <div class="blog-date">December, 2023</div>
                </div>
                <div class="blog">
                    <div class="blog-name">Justo sit amet</div>
                    <div class="blog-date">January 05, 2024</div>
                </div>
                <div class="blog">
                    <div class="blog-name">Nullam id enim sit amet</div>
                    <div class="blog-date">March 03, 2024</div>
                </div>
                <div class="blog">
                    <div class="blog-name">
                        Sed consequat libero at magna sodales
                    </div>
                    <div class="blog-date">February 12, 2024</div>
                </div>
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
