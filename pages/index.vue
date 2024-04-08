<script></script>

<template>
    <div class="home-container">
        <div class="general-info">
            <div class="time">10:56 AM CET</div>
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
        <div class="article">
            <div>Nullam id enim sit amet</div>
            <div>03 March, 2024</div>
        </div>
        <div class="article">
            <div>Sed consequat libero at magna sodales</div>
            <div>February 12, 2024</div>
        </div>
        <div class="article">
            <div>Fusce at justo sit amet lorem iaculis lacinia</div>
            <div>January 05, 2024</div>
        </div>
        <div class="article">
            <div>Proin at condimentum velit</div>
            <div>January 01, 2024</div>
        </div>
        <div class="article">
            <div>Curabitur ac diam quis metus ultrices fermentum</div>
            <div>December 23, 2023</div>
        </div>
    </div>
</template>

<style lang="scss">
.home-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 2rem 2rem;
    padding-left: calc(2rem + 40%);
}

.latest-articles {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    width: 100%;
    position: absolute;
    bottom: 6rem;

    .header,
    .article {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.1rem solid $black;
        padding: 0.2rem;
    }

    .header {
        font-style: italic;
    }
}
</style>
