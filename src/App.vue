<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                isMobile: false,
            }
        }
    }
</script>

<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
    }

    .font-light {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #939DAC;
        line-height: 18px;
    }

    .font-light:hover {
        color: #3B60F6;
    }

    @media screen and (max-width: 360px) {
        .font-light {
            font-size: 12px;
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .fadeIn {
        -webkit-animation-name: fadeIn;
        -webkit-animation-duration: 4s;
        animation-name: fadeIn;
        animation-duration: 4s;
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            -webkit-transform: translateY(60px);
            -ms-transform: translateY(60px);
            transform: translateY(60px);
        }

        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
        }
    }

    .fadeInUp {
        -webkit-animation-name: fadeInUp;
        -webkit-animation-duration: 1s;
        animation-name: fadeInUp;
        animation-duration: 1s;
    }

</style>
