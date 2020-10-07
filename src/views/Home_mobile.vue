<template>
    <div class="home">
        <div class="my-drawer" v-if="drawer">
            <div class="drawer-box">
                <div>
                    <img src="../assets/img/icon_menu_b.png" height="24" width="24" @click="drawer = false"
                         style="margin: 0 32px 4px 0;cursor: pointer"/>
                    <img src="../assets/img/logo_bitljus_3.png" height="36" width="88"/>
                </div>
                <div class="drawer-item1" style="margin-top: 33px" @click="reload">
                    {{$languageCom.gl("Home")}}
                </div>
                <div class="drawer-item1">
                    {{$languageCom.gl("Token")}}
                </div>
                <div class="drawer-item1" @click="isItem1Open=!isItem1Open">
                    C2C DeFi
                    <img height="14" width="14" class="drawer-img" :class="{up:(isItem1Open)}"/>
                </div>
                <div class="drawer-item1" @click="isItem2Open=!isItem2Open">
                    {{$languageCom.gl("Project_information")}}
                    <img height="14" width="14" class="drawer-img" :class="{up:(isItem2Open)}"/>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import icon_arrow_down from '@/assets/img/mobile/icon_arrow_down.png';
    import icon_arrow_up from '@/assets/img/mobile/icon_arrow_up.png';

    export default {
        name: "Home_mobile",
        data() {
            return {
                icon_arrow_down,
                icon_arrow_up,

                drawer: false,
                is_dropdown_show: false,
                isItem1Open: false,
                isItem2Open: false,
            }
        },
        methods: {
            setLanguage(index) {
                this.is_dropdown_show = false;
                this.$languageCom.setIndex(index);
            },
            reload() {
                location.reload();
            }
        },
    }
</script>

<style scoped lang="scss">
    .home {
        width: 100%;
        height: 100%;
    }

    .my-drawer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.12);
        z-index: 100;

        .drawer-box {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 232px;
            height: auto;
            background: #FFFFFF;
            padding: 32px 24px;
            z-index: 50;

            .drawer-item1 {
                width: 202px;
                height: 16px;
                line-height: 16px;
                color: #1D2533;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                background: #FFFFFF;
                border-radius: 12px;
                padding: 15px 16px;
                margin-top: 2px;
                cursor: pointer;

                .drawer-img {
                    float: right;
                    content: url("../assets/img/icon_arrow_grey_down.png");
                }

                .drawer-img.up {
                    content: url("../assets/img/icon_arrow_grey_up.png")
                }
            }

            .drawer-item1:hover {
                color: #3B60F6;
                background: rgba(213, 237, 255, 0.2);

                .drawer-img {
                    content: url("../assets/img/icon_arrow_blue_down.png");
                }

                .drawer-img.up {
                    content: url("../assets/img/icon_arrow_blue_up.png")
                }
            }
        }
    }

    .header-bg {
        width: 100%;
        height: auto;
        z-index: -1;

        img {
            width: 100%;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }

    .header {
        height: auto;

        .header-cont {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;

            .header-cont-container {
                margin: 0 auto;
                padding: 24px 24px 0 24px;
            }

            .header-box1 {
                width: 100%;
                height: 28px;
                position: relative;

                .language-box {
                    width: 80px;
                    height: 26px;
                    border-radius: 14px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    float: right;
                    display: flex;
                    text-align: center;
                    cursor: pointer;

                    color: #FFFFFF;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    line-height: 28px;

                    img {
                        align-self: center;
                    }
                }

                .language-dropdown {
                    width: 112px;
                    height: 68px;
                    padding: 12px 0;
                    position: absolute;
                    top: 32px;
                    right: 0;
                    z-index: 100;
                    background: #FFFFFF;
                    box-shadow: 0 10px 30px 0 rgba(53, 46, 133, 0.08);
                    border-radius: 14px;
                    text-align: center;

                    .dropdown-item {
                        width: 112px;
                        height: 34px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #1D2533;
                        line-height: 34px;
                        cursor: pointer;
                    }

                    .dropdown-item:hover {
                        color: #3B60F6;
                    }
                }
            }

            .logo2 {
                margin-top: 50px;
            }

            .line2 {
                margin-top: 28px;
                height: 3px;

                img {
                    display: block;
                }
            }

            .header-text {
                margin: 18px 80px 0 0;
                height: 40px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 20px;
            }

            .header-box2 {
                margin-top: 76px;
                width: 300px;
                height: 50px;
                background: #FFFFFF;
                box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.1);
                border-radius: 14px;

                .header-btn {
                    width: 150px;
                    height: 50px;
                    float: left;
                    background: #FFFFFF;
                    border-radius: 14px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #1D2533;
                    text-align: center;
                    line-height: 50px;

                    img {
                        vertical-align: middle;
                    }
                }
            }
        }
    }

    .cont {
        padding: 56px 24px 68px 24px;

        .cont-title1 {
            height: 33px;
            font-size: 24px;
            font-family: PingFang-SC-Heavy, PingFang-SC;
            font-weight: 800;
            color: #202934;
            line-height: 33px;
            z-index: 10;
            position: relative;
        }

        .cont-title-bg1 {
            position: absolute;
            top: 16px;
            left: 0;
            width: 36px;
            height: 28px;
            background: linear-gradient(270deg, rgba(233, 240, 255, 0) 0%, #DBE6FF 100%);
            border-radius: 8px 0 0 8px;
            z-index: -1;
        }

        .cont-txt1 {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #939DAC;
            line-height: 18px;
            margin-top: 23px;
        }

        .cont-box1 {
            overflow-y: hidden;
            overflow-x: scroll;
            margin: 32px 0 64px 0;
        }

        .cont-box1 ul {
            list-style: none;
            display: -webkit-box;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;
        }

        .cont-card1 {
            width: 196px;
            height: 244px;
            background: url('../assets/img/mobile/rectangle.png') no-repeat;
            float: left;
            margin-right: 16px;

            img {
                margin: 30px 108px 20px 16px;
            }

            .card-title1 {
                height: 22px;
                font-size: 18px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #1D2533;
                line-height: 22px;
                margin-left: 16px;
            }

            .card-title1.eng {
                height: 44px;
            }

            .card-cont1 {
                width: 164px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #939DAC;
                line-height: 18px;
                margin: 10px 0 0 16px;
            }

            .card-cont1.eng {
                height: auto;
            }
        }

        .cont-card1.eng {
            height: 368px;
            background-size: 196px 368px;
        }

        .cont-box2 {
            width: 100%;
            height: auto;

            img {
                width: 100%;
                height: auto;
                max-width: 100%;
                max-height: 100%;
            }
        }

        .cont-box3 {
            width: 327px;
            height: 263px;
            margin: 32px auto 64px auto;
            position: relative;

            .cont-img-box {
                width: 54px;
                height: 263px;
                position: relative;
                float: left;
                margin-left: -9px;
            }

            .cont-info-box {
                width: 271px;
                height: 263px;
                float: left;
                margin-left: 11px;

                .cont-info-title {
                    height: 22px;
                    font-size: 16px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #1D2533;
                    line-height: 22px;
                    margin-top: 20px;
                }

                .cont-info-title.eng {
                    margin-top: 10px;
                }

                .cont-info-txt {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #939DAC;
                    line-height: 18px;
                    margin-top: 8px;
                }
            }
        }

        .cont-box4 {
            width: 100%;
            max-width: 500px;
            height: auto;
            margin: 39px auto 64px auto;
            position: relative;

            .cont-box4-bg {
                width: 100%;
                height: auto;
                max-width: 100%;
                max-height: 100%;
            }

            .cont-container1 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;

                .cont-container2{
                    align-self: center;
                    width: 250px;
                    margin: 0 auto;
                }

                .cont-box4-info{
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 18px;
                    margin-top: 22px;

                    img{
                        margin-right: 16px;
                    }
                }
            }
        }

        .cont-txt2{
            height: 18px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #939DAC;
            line-height: 18px;
            margin: 20px 0 20px 0;
        }

        .cont-box5{
            width: 100%;

            .icon-bg{
                width: 327px;
                height: 70px;
                background: url('../assets/img/mobile/logo.png') no-repeat;
                margin: 0 auto;
            }

            @media screen and (min-width: 717px) {
                .icon-bg{
                    width: 669px;
                    height: 28px;
                    background: url('../assets/img/logo.png') no-repeat;
                }
            }
        }
    }

    .footer {
        width: 100%;
        height: 167px;
        position: relative;
        background: #FFFFFF;

        .footer-bg1 {
            width: 35%;
            height: 166px;
            background: #020045;
            position: absolute;
            top: 1px;
        }

        .footer-bg2 {
            width: 100%;
            height: 167px;
            position: absolute;
            top: 0;
            z-index: 10;

            .footer-bgImg {
                width: 375px;
                height: 167px;
                margin: 0 auto;
                background: url('../assets/img/mobile/bg_5.png') no-repeat;
            }
        }

        .footer-container {
            width: 100%;
            position: absolute;
            top: 53px;
            z-index: 20;

            .footer-iconBox {
                width: 136px;
                height: 24px;
                margin: 0 auto 24px auto;

                img {
                    margin-right: 32px;
                }
            }

            .footer-txt2 {
                width: 327px;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 17px;
                text-align: center;
                margin: 0 auto;
            }
        }
    }

</style>