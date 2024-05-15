<script></script>

<template>
    <div class="about-page">
        <main>
            <h1>About Sway</h1>
            <div>
                Fusce vel urna in metus faucibus maximus eget eget tortor. Proin
                scelerisque, justo et accumsan ultricies, justo velit lobortis
                risus, sed vestibulum ligula eros sed ipsum. Integer nec lacinia
                sapien, ut lacinia mi. Nullam id libero vel ipsum ullamcorper
                congue non eget quam. Cras sed erat magna. Pellentesque
                tincidunt feugiat risus, vitae laoreet justo lobortis vel.
                Maecenas vestibulum felis ut massa sodales, ut convallis ligula
                placerat. <br />
                <br />
                Pellentesque tincidunt feugiat risus, vitae laoreet justo
                lobortis vel. Maecenas vestibulum felis ut massa sodales, ut
                convallis ligula placerat. Nulla facilisi. In in leo eu dui
                commodo cursus. Sed volutpat, elit vitae suscipit commodo,
                libero arcu placerat magna, ut scelerisque sapien nisi eu leo.
                Nam lacinia feugiat metus, sed sodales odio elementum nec.
                Aliquam erat volutpat. Mauris finibus dui et ultricies
                vestibulum. Fusce vel urna in metus faucibus maximus eget eget
                tortor. Proin scelerisque, justo et accumsan ultricies, justo
                velit lobortis risus, sed vestibulum ligula eros sed ipsum.
            </div>
        </main>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped>
.about-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 3.5rem);

    main {
        padding: 4rem 2rem 0rem;
        text-align: justify;

        @media (min-width: $bp-lg) {
            padding-left: $pad-left-lg;
        }

        @media (min-width: $bp-xl) {
            padding-left: $pad-left-xl;
        }
    }
}
</style>
