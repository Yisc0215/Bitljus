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
                    <img src="../assets/img/icon_arrow_grey_down.png" height="14" width="14" class="drawer-img"
                         :class="{up:(isItem1Open)}"/>
                </div>
                <div class="drawer-item1" @click="isItem2Open=!isItem2Open">
                    {{$languageCom.gl("Project_information")}}
                    <img src="../assets/img/icon_arrow_grey_down.png" height="14" width="14" class="drawer-img"
                         :class="{up:(isItem2Open)}"/>
                </div>
            </div>
        </div>

        <div id="home-pc">
            <div class="header">
                <div class="header-bg">
                    <img class="bg_banner_none" src="../assets/img/bg_banner_none.png"/>
                </div>
                <div class="header-cont">
                    <div class="header-cont-container">
                        <div class="line1"></div>
                        <div class="header-box1">
                            <img src="../assets/img/icon_menu.png" height="24" width="24" @click="drawer = true"
                                 style="margin: 0 32px 4px 0;cursor: pointer"/>
                            <img src="../assets/img/icon_logo_bitljus.png" height="36" width="88" @click="reload"
                                 style="cursor: pointer"/>
                            <div class="language-box" @click="is_dropdown_show=!is_dropdown_show">
                                <img src="../assets/img/icon_language.png" height="16" width="16"
                                     style="margin: 0 8px"/>
                                <span>{{$languageCom.languageArray[$languageCom.languageIndex]}}</span>
                                <img :src="icon_arrow_down" style="margin: 0 8px" v-show="!is_dropdown_show">
                                <img :src="icon_arrow_up" style="margin: 0 8px" v-show="is_dropdown_show">
                            </div>

                            <div class="language-dropdown" v-show="is_dropdown_show">
                                <div class="dropdown-item" @click="setLanguage(1)">{{$languageCom.gl("language1")}}
                                </div>
                                <div class="dropdown-item" @click="setLanguage(0)">{{$languageCom.gl("language2")}}
                                </div>
                            </div>
                        </div>

                        <div class="logo2">
                            <img src="../assets/img/logo_bitljus_2.png" height="52" width="248"/>
                        </div>
                        <div class="line2">
                            <img src="../assets/img/line.png" height="3" width="80"/>
                        </div>
                        <div class="header-text" :class="{eng:($languageCom.languageIndex==1)}">
                            {{$languageCom.gl("headerTxt1")}}
                        </div>

                        <div class="header-box2">
                            <div class="header-btn">
                                <img src="../assets/img/icon_gonggao.png" height="24" width="24"/>
                                {{$languageCom.gl("announcement")}}
                            </div>
                            <div class="header-btn"
                                 style="background: linear-gradient(53deg, #55E5FC 0%, #A9EBFD 100%, #FFE8A9 100%);">
                                <img src="../assets/img/icon_C2c.png" height="24" width="24"/>
                                C2C DeFi
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cont">
                <div class="cont-title1">
                    {{$languageCom.gl("contentTxt1")}}
                </div>
                <div class="cont-box1">
                    <div class="cont-title-bg1" :class="{eng:($languageCom.languageIndex==1)}"></div>
                </div>

                <div class="font-light">
                    <div class="cont-txt1" style="margin-top: 48px">
                        {{$languageCom.gl("contentTxt2")}}
                    </div>
                    <div class="cont-txt1">
                        {{$languageCom.gl("contentTxt3")}}
                    </div>
                </div>

                <div ref="cont_card1" class="cont-box2" :class="{eng:($languageCom.languageIndex==1)}">
                    <div name="cont-card1" class="cont-card1" :class="{eng:($languageCom.languageIndex==1)}"
                         @mouseleave="cont_card1_change">
                        <img src="../assets/img/icon_1.png" height="72" width="72"/>
                        <div v-show="cont_card1_show" class="fadeIn">
                            <div class="card-title1" :class="{eng:($languageCom.languageIndex==1)}">
                                {{$languageCom.gl("cardTitle1")}}
                            </div>
                            <div class="card-cont1 font-light" :class="{eng:($languageCom.languageIndex==1)}">
                                {{$languageCom.gl("cardCont1")}}
                            </div>
                        </div>
                    </div>
                    <div name="cont-card1" class="cont-card1" :class="{eng:($languageCom.languageIndex==1)}"
                         @mouseleave="cont_card1_change">
                        <img src="../assets/img/icon_2.png" height="72" width="72"/>
                        <div v-show="cont_card1_show" class="fadeIn">
                            <div class="card-title1" :class="{eng:($languageCom.languageIndex==1)}">
                                {{$languageCom.gl("cardTitle2")}}
                            </div>
                            <div class="card-cont1 font-light" :class="{eng:($languageCom.languageIndex==1)}">
                                {{$languageCom.gl("cardCont2")}}
                            </div>
                        </div>

                    </div>
                    <div name="cont-card1" class="cont-card1" :class="{eng:($languageCom.languageIndex==1)}"
                         @mouseleave="cont_card1_change">
                        <img src="../assets/img/icon_3.png" height="72" width="72"/>
                        <div v-show="cont_card1_show" class="fadeIn">
                            <div class="card-title1" :class="{eng:($languageCom.languageIndex==1)}">
                                {{$languageCom.gl("cardTitle3")}}
                            </div>
                            <div class="card-cont1 font-light" :class="{eng:($languageCom.languageIndex==1)}">
                                {{$languageCom.gl("cardCont3")}}
                            </div>
                        </div>

                    </div>
                    <div name="cont-card1" class="cont-card1" :class="{eng:($languageCom.languageIndex==1)}"
                         style="margin-right: 0"
                         @mouseleave="cont_card1_change">
                        <img src="../assets/img/icon_4.png" height="72" width="72"/>
                        <div v-show="cont_card1_show" class="fadeIn">
                            <div class="card-title1" :class="{eng:($languageCom.languageIndex==1)}">
                                {{$languageCom.gl("cardTitle4")}}
                            </div>
                            <div class="card-cont1 font-light" :class="{eng:($languageCom.languageIndex==1)}">
                                {{$languageCom.gl("cardCont4")}}
                            </div>
                        </div>

                    </div>
                </div>

                <div class="cont-box3">
                    <div ref="cont_bg2" v-show="cont_bg2_show" class="fadeIn">
                        <img class="cont-bg2" src="../assets/img/bg_2.png" height="701" width="634"/>
                    </div>

                    <div ref="cont_box3">
                        <div v-show="cont_box3_show" class="cont-bg3 fadeInUp">
                            <img src="../assets/img/bg_1.png" height="399" width="539"/>
                        </div>
                        <div class="cont-left">
                            <div class="cont-container1">
                                <div class="cont-title2">
                                    {{$languageCom.gl('User_Requirement')}}
                                </div>
                                <div class="cont-title-bg2"></div>

                                <div class="cont-img-box">
                                    <img src="../assets/img/icon_bg_1.png" height="116" width="116"
                                         style="position: absolute;top: 0;left: -28px"/>
                                    <img src="../assets/img/icon_5.png" height="40" width="40"
                                         style="position: absolute;top: 28px;left: 10px"/>
                                    <img src="../assets/img/icon_bg_1.png" height="116" width="116"
                                         style="position: absolute;top: 105px;left: -28px"/>
                                    <img src="../assets/img/icon_6.png" height="40" width="40"
                                         style="position: absolute;top: 133px;left: 10px"/>
                                    <img src="../assets/img/icon_bg_1.png" height="116" width="116"
                                         style="position: absolute;top: 210px;left: -28px"/>
                                    <img src="../assets/img/icon_7.png" height="40" width="40"
                                         style="position: absolute;top: 238px;left: 10px"/>
                                </div>

                                <div v-show="cont_box3_show" class="cont-info-box fadeInUp">
                                    <div class="cont-info-title" :class="{eng:($languageCom.languageIndex==1)}">
                                        {{$languageCom.gl('User_Group')}}
                                    </div>
                                    <div class="cont-info-txt font-light">{{$languageCom.gl('User_Group_info')}}</div>
                                    <div class="cont-info-title" :class="{eng:($languageCom.languageIndex==1)}">
                                        {{$languageCom.gl('Bullish')}}
                                    </div>
                                    <div class="cont-info-txt font-light">{{$languageCom.gl('Bullish_info')}}</div>
                                    <div class="cont-info-title" :class="{eng:($languageCom.languageIndex==1)}">
                                        {{$languageCom.gl('Bearish')}}
                                    </div>
                                    <div class="cont-info-txt font-light">{{$languageCom.gl('Bearish_info')}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cont-box4">
                    <div class="cont-title1" style="margin-bottom: 80px">
                        {{$languageCom.gl("Our_Future")}}
                    </div>
                    <div class="cont-box1">
                        <div class="cont-title-bg1" style="width: 180px"></div>
                    </div>
                    <div ref="cont_card2" v-show="cont_card2_show" class="cont-card2 fadeInUp"
                         onmouseout="this.className='cont-card2 cont-card2-hoverOut'">
                        <img src="../assets/img/bg_4.png" height="158" width="280" class="cont-card2-bg"/>
                        <img src="../assets/img/oval.png" height="148" width="148" class="oval"/>
                        <img src="../assets/img/icon_8.png" height="48" width="48" class="icon_8"/>
                        <div class="cont-card2-txt">{{$languageCom.gl("Our_Future1")}}</div>
                        <div class="line3"></div>
                    </div>
                    <div class="cont-card2  fadeInUp" v-show="cont_card2_show"
                         onmouseout="this.className='cont-card2 cont-card2-hoverOut'">
                        <img src="../assets/img/bg_4.png" height="158" width="280" class="cont-card2-bg"/>
                        <img src="../assets/img/oval.png" height="148" width="148" class="oval"/>
                        <img src="../assets/img/icon_9.png" height="48" width="48" class="icon_8"/>
                        <div class="cont-card2-txt">{{$languageCom.gl("Our_Future2")}}</div>
                        <div class="line3"></div>
                    </div>
                    <div class="cont-card2 fadeInUp" v-show="cont_card2_show"
                         onmouseout="this.className='cont-card2 cont-card2-hoverOut'"
                         style="margin-right: 0">
                        <img src="../assets/img/bg_4.png" height="158" width="280" class="cont-card2-bg"/>
                        <img src="../assets/img/oval.png" height="148" width="148" class="oval"/>
                        <img src="../assets/img/icon_10.png" height="48" width="48" class="icon_8"/>
                        <div class="cont-card2-txt">{{$languageCom.gl("Our_Future3")}}</div>
                        <div class="line3"></div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <div class="footer-box1">
                    <div class="footer-title1">
                        {{$languageCom.gl("More_wallet")}}
                    </div>
                    <div class="footer-txt1 font-light">
                        {{$languageCom.gl("More_wallet_info")}}
                    </div>
                    <div class="footer-img"></div>
                </div>

                <div class="footer-box2">
                    <div class="footer-box2-bg1" style="left: 0"></div>
                    <div class="footer-box2-bg2">
                        <div class="footer-box2-bgImg"></div>
                    </div>
                    <div class="footer-box2-bg1" style="right: 0"></div>

                    <div class="footer-container">
                        <div class="footer-iconBox">
                            <img src="../assets/img/icon_logo_1.png" height="24" width="24"/>
                            <img src="../assets/img/icon_logo_2.png" height="24" width="24"/>
                            <img src="../assets/img/icon_logo_3.png" height="24" width="24" style="margin-right: 0"/>
                        </div>

                        <div class="footer-txt2">© 2020 Sterling-Cipher International Ltd (BVI #2027654).</div>
                        <div class="footer-txt2">All Rights Reserved. Contact Us</div>
                    </div>

                </div>
            </div>
        </div>

        <div id="home-mobile">
            <div class="header">
                <div class="header-bg">
                    <img src="../assets/img/mobile/bg_banner.png"/>
                </div>
                <div class="header-cont">
                    <div class="header-cont-container">
                        <div class="header-box1">
                            <img src="../assets/img/mobile/icon_menu.png" height="24" width="24" @click="drawer = true"
                                 style="margin: 2px 32px 2px 0;cursor: pointer"/>
                            <div class="language-box" @click="is_dropdown_show=!is_dropdown_show">
                                <img src="../assets/img/mobile/icon_language.png" height="16" width="16"
                                     style="margin: 0 8px"/>
                                <span>{{$languageCom.languageArray[$languageCom.languageIndex]}}</span>
                                <img :src="icon_arrow_down" style="margin: 0 8px" v-show="!is_dropdown_show">
                                <img :src="icon_arrow_up" style="margin: 0 8px" v-show="is_dropdown_show">
                            </div>

                            <div class="language-dropdown" v-show="is_dropdown_show">
                                <div class="dropdown-item" @click="setLanguage(1)">{{$languageCom.gl("language1")}}
                                </div>
                                <div class="dropdown-item" @click="setLanguage(0)">{{$languageCom.gl("language2")}}
                                </div>
                            </div>
                        </div>

                        <div class="logo2">
                            <img src="../assets/img/mobile/logo_bitljus_3.png" height="30" width="143"/>
                        </div>
                        <div class="line2">
                            <img src="../assets/img/line.png" height="3" width="80"/>
                        </div>
                        <div class="header-text">
                            {{$languageCom.gl("headerTxt1")}}
                        </div>

                        <div class="header-box2">
                            <div class="header-btn">
                                <img src="../assets/img/icon_gonggao.png" height="24" width="24"/>
                                {{$languageCom.gl("announcement")}}
                            </div>
                            <div class="header-btn"
                                 style="background: linear-gradient(53deg, #55E5FC 0%, #A9EBFD 100%, #FFE8A9 100%);
                                    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.14);">
                                <img src="../assets/img/icon_C2c.png" height="24" width="24"/>
                                C2C DeFi
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cont">
                <div class="cont-title1">
                    {{$languageCom.gl("contentTxt1")}}
                    <div class="cont-title-bg1"></div>
                </div>

                <div class="cont-txt1 font-light">
                    {{$languageCom.gl("contentTxt4")}}
                </div>

                <div class="cont-box1">
                    <ul>
                        <li>
                            <div class="cont-card1" :class="{eng:($languageCom.languageIndex==1)}">
                                <img src="../assets/img/icon_1.png" height="72" width="72"/>
                                <div>
                                    <div class="card-title1" :class="{eng:($languageCom.languageIndex==1)}">
                                        {{$languageCom.gl("cardTitle1")}}
                                    </div>
                                    <div class="card-cont1 font-light" :class="{eng:($languageCom.languageIndex==1)}">
                                        {{$languageCom.gl("cardCont1")}}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="cont-card1" :class="{eng:($languageCom.languageIndex==1)}">
                                <img src="../assets/img/icon_2.png" height="72" width="72"/>
                                <div>
                                    <div class="card-title1" :class="{eng:($languageCom.languageIndex==1)}">
                                        {{$languageCom.gl("cardTitle2")}}
                                    </div>
                                    <div class="card-cont1 font-light" :class="{eng:($languageCom.languageIndex==1)}">
                                        {{$languageCom.gl("cardCont2")}}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="cont-card1" :class="{eng:($languageCom.languageIndex==1)}">
                                <img src="../assets/img/icon_3.png" height="72" width="72"/>
                                <div>
                                    <div class="card-title1" :class="{eng:($languageCom.languageIndex==1)}">
                                        {{$languageCom.gl("cardTitle3")}}
                                    </div>
                                    <div class="card-cont1 font-light" :class="{eng:($languageCom.languageIndex==1)}">
                                        {{$languageCom.gl("cardCont3")}}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="cont-card1" :class="{eng:($languageCom.languageIndex==1)}">
                                <img src="../assets/img/icon_4.png" height="72" width="72"/>
                                <div>
                                    <div class="card-title1" :class="{eng:($languageCom.languageIndex==1)}">
                                        {{$languageCom.gl("cardTitle4")}}
                                    </div>
                                    <div class="card-cont1 font-light" :class="{eng:($languageCom.languageIndex==1)}">
                                        {{$languageCom.gl("cardCont4")}}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="cont-title1">
                    {{$languageCom.gl("User_Requirement")}}
                    <div class="cont-title-bg1"></div>
                </div>

                <div class="cont-box2">
                    <img src="../assets/img/mobile/bg_banner_2.png"/>
                </div>

                <div class="cont-box3">
                    <div class="cont-img-box">
                        <img src="../assets/img/mobile/icon_bg_1.png" height="54" width="54"
                             style="position: absolute;top: 0;left: 0"/>
                        <img src="../assets/img/mobile/icon_5.png" height="23" width="23"
                             style="position: absolute;top: 10px;left: 16px"/>

                        <img src="../assets/img/mobile/icon_bg_1.png" height="54" width="54"
                             style="position: absolute;top: 85px;left: 0"/>
                        <img src="../assets/img/mobile/icon_6.png" height="23" width="23"
                             style="position: absolute;top: 95px;left: 16px"/>

                        <img src="../assets/img/mobile/icon_bg_1.png" height="54" width="54"
                             style="position: absolute;top: 190px;left: 0"/>
                        <img src="../assets/img/mobile/icon_7.png" height="23" width="23"
                             style="position: absolute;top: 200px;left: 16px"/>
                    </div>

                    <div class="cont-info-box">
                        <div class="cont-info-title" :class="{eng:($languageCom.languageIndex==1)}"
                             style="margin-top: 6px">
                            {{$languageCom.gl('User_Group')}}
                        </div>
                        <div class="cont-info-txt font-light">{{$languageCom.gl('User_Group_info')}}</div>
                        <div class="cont-info-title" :class="{eng:($languageCom.languageIndex==1)}">
                            {{$languageCom.gl('Bullish')}}
                        </div>
                        <div class="cont-info-txt font-light">{{$languageCom.gl('Bullish_info')}}</div>
                        <div class="cont-info-title" :class="{eng:($languageCom.languageIndex==1)}">
                            {{$languageCom.gl('Bearish')}}
                        </div>
                        <div class="cont-info-txt font-light">{{$languageCom.gl('Bearish_info')}}</div>
                    </div>
                </div>

                <div class="cont-title1">
                    {{$languageCom.gl("Our_Future")}}
                    <div class="cont-title-bg1"></div>
                </div>

                <div class="cont-box4">
                    <img class="cont-box4-bg" src="../assets/img/mobile/bg_3.png"/>

                    <div class="cont-container1">
                        <div class="cont-container2">
                            <div class="cont-box4-info" style="margin-top: 0">
                                <img src="../assets/img/mobile/bg_dot_2.png" height="10" width="10"/>
                                <span>{{$languageCom.gl("Our_Future1")}}</span>
                            </div>
                            <div class="cont-box4-info">
                                <img src="../assets/img/mobile/bg_dot_2.png" height="10" width="10"/>
                                <span>{{$languageCom.gl("Our_Future2")}}</span>
                            </div>
                            <div class="cont-box4-info">
                                <img src="../assets/img/mobile/bg_dot_2.png" height="10" width="10"/>
                                <span>{{$languageCom.gl("Our_Future3")}}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cont-title1">
                    {{$languageCom.gl("More_wallet")}}
                    <div class="cont-title-bg1"></div>
                </div>

                <div class="cont-txt2 font-light">
                    {{$languageCom.gl("More_wallet_info")}}
                </div>

                <div class="cont-box2">
                    <img src="../assets/img/mobile/logo.png"/>
                </div>
            </div>

            <div class="footer">

                <div class="cont-box2">
                    <img src="../assets/img/mobile/bg_5.png"/>
                </div>

                <div class="footer-container">
                    <div class="footer-iconBox">
                        <img src="../assets/img/icon_logo_1.png" height="24" width="24"/>
                        <img src="../assets/img/icon_logo_2.png" height="24" width="24"/>
                        <img src="../assets/img/icon_logo_3.png" height="24" width="24" style="margin-right: 0"/>
                    </div>

                    <div class="footer-txt2">© 2020 Sterling-Cipher International Ltd (BVI #2027654).</div>
                    <div class="footer-txt2">All Rights Reserved. Contact Us</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import icon_arrow_down from '@/assets/img/icon_arrow_down.png';
    import icon_arrow_up from '@/assets/img/icon_arrow_up.png';

    export default {
        name: 'Home',
        data() {
            return {
                icon_arrow_down,
                icon_arrow_up,

                isMobile: false,
                drawer: false,
                is_dropdown_show: false,
                isItem1Open: false,
                isItem2Open: false,

                cont_card1_show: false,
                cont_bg2_show: false,
                cont_box3_show: false,
                cont_card2_show: false
            }
        },
        methods: {
            /*检测终端浏览器类型*/
            _browserRedirect() {
                let sUserAgent = navigator.userAgent.toLowerCase()
                //输出：sUserAgent mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko) version/9.0 mobile/13b143 safari/601.1
                let bIsIpad = sUserAgent.match(/ipad/i) || false
                let bIsIphoneOs = sUserAgent.match(/iphone/i) || false
                let bIsMidp = sUserAgent.match(/midp/i) || false
                let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) || false
                let bIsUc = sUserAgent.match(/ucweb/i) || false
                let bIsAndroid = sUserAgent.match(/android/i) || false
                let bIsCE = sUserAgent.match(/windows ce/i) || false
                let bIsWM = sUserAgent.match(/windows mobile/i) || false
                if (bIsIpad[0] || bIsIphoneOs[0] || bIsMidp[0] || bIsUc7[0] || bIsUc[0] || bIsAndroid[0] || bIsCE[0] || bIsWM[0]) {
                    this.isMobile = true;
                }
            },
            setLanguage(index) {
                this.is_dropdown_show = false;
                this.$languageCom.setIndex(index);
            },
            cont_card1_change() {
                if (this.$languageCom.languageIndex == 0) {
                    document.getElementsByName("cont-card1").className = "cont-card1 cont-card1-hoverOut";
                } else if (this.$languageCom.languageIndex == 1) {
                    document.getElementsByName("cont-card1").className = "cont-card1 eng cont-card1-hoverOut";
                }
            },
            reload() {
                location.reload();
            },

            handleScroll() { // 实现当滚动到指定位置，触发动画
                // let scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 获取窗口滚动条高度
                // this.gdjz('earth', 'earth animated bounceInDown', 50)
                let _this = this
                let refArray = [
                    {ref: 'cont_card1', show: 'cont_card1_show', height: 1050},
                    {ref: 'cont_bg2', show: 'cont_bg2_show', height: 1280},
                    {ref: 'cont_box3', show: 'cont_box3_show', height: 1400},
                    {ref: 'cont_card2', show: 'cont_card2_show', height: 2096}
                ]
                refArray.forEach((r, i) => { // eslint-disable-line no-unused-vars
                    _this.gdjz(r.ref, 40, r.height, () => {
                        _this[r.show] = true
                    })
                })
            },
            gdjz(div, offset, height, callback) {
                let dom = this.$refs[div] // 等同于document.querySelector('.earth') true
                if (dom) {
                    let a, b, c, d;     // eslint-disable-line no-unused-vars
                    //d = dom.offsetTop // 元素距离相对父级的高度，这里父级指的是body
                    // a = eval(d + offset)
                    b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop //  获取窗口滚动条高度
                    c = document.documentElement.clientHeight || document.body.clientHeight // 获取浏览器可视区的高度
                    if (b + c > height + offset) {
                        callback && callback()
                    }
                }
            },
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            this._browserRedirect();
        }
    }
</script>

<style scoped lang="scss">
    .home {
        min-width: 1200px;
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
            width: 272px;
            height: auto;
            background: #FFFFFF;
            padding: 32px 24px;
            z-index: 50;

            .drawer-item1 {
                width: 242px;
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

        @media screen and (max-width: 450px) {
            .drawer-box {
                width: 232px;

                .drawer-item1 {
                    width: 202px;
                }
            }
        }
    }

    #home-pc {
        display: block;

        .header-bg {
            width: 100%;
            height: auto;
            z-index: -1;

            .bg_banner_none {
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
                    width: 1096px;
                    margin: 0 auto;
                    padding: 0 50px;
                }

                .line1 {
                    width: 100%;
                    height: 20px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                }

                .header-box1 {
                    width: 100%;
                    height: 36px;
                    margin-top: 16px;
                    position: relative;

                    .language-box {
                        width: 80px;
                        height: 26px;
                        border-radius: 14px;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        float: right;
                        margin-top: 6px;
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
                        top: 42px;
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
                    margin-top: 123px;
                }

                .line2 {
                    margin-top: 24px;
                    height: 3px;

                    img {
                        display: block;
                    }
                }

                .header-text {
                    margin-top: 18px;
                    width: 643px;
                    height: 28px;
                    font-size: 20px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 28px;
                }

                .header-text.eng {
                    width: 723px;
                }

                .header-box2 {
                    margin-top: 72px;
                    height: 56px;

                    .header-btn {
                        width: 156px;
                        height: 56px;
                        float: left;
                        margin-right: 24px;
                        background: #FFFFFF;
                        box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.14);
                        border-radius: 14px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #1D2533;
                        text-align: center;
                        cursor: pointer;
                        line-height: 56px;

                        img {
                            vertical-align: middle;
                        }
                    }
                }
            }
        }

        .cont {
            margin: 47px 50px 116px 50px;
            position: relative;

            .cont-title1 {
                text-align: center;
                height: 40px;
                font-size: 28px;
                font-family: PingFang-SC-Heavy, PingFang-SC;
                font-weight: 800;
                color: #202934;
                line-height: 40px;
            }

            .cont-box1 {
                width: 100%;
                position: absolute;
                top: 17px;
                z-index: -1;
            }

            .cont-title-bg1 {
                width: 276px;
                height: 47px;
                margin: 0 auto;
                background: linear-gradient(270deg, rgba(233, 240, 255, 0) 0%, #DBE6FF 100%);
                border-radius: 12px 0 0 12px;
            }

            .cont-title-bg1.eng {
                width: 344px;
            }

            .cont-txt1 {
                width: 738px;
                height: 18px;
                text-align: center;
                margin: 0 auto;
            }

            .cont-box2 {
                width: 1066px;
                margin: 60px auto 0 auto;
                height: 258px;
            }

            .cont-box2.eng {
                height: 388px;
            }

            .cont-card1 {
                width: 244px;
                height: 258px;
                background: #FFFFFF;
                box-shadow: 0 10px 30px 0 rgba(53, 46, 133, 0.08);
                border-radius: 20px;
                float: left;
                margin-right: 30px;

                img {
                    margin: 32px 148px 40px 24px;
                }

                .card-title1 {
                    height: 22px;
                    font-size: 18px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #1D2533;
                    line-height: 22px;
                    margin-left: 26px;
                }

                .card-title1.eng {
                    height: 44px;
                }

                .card-cont1 {
                    width: 192px;
                    height: 36px;
                    margin: 16px 0 0 26px;
                }

                .card-cont1.eng {
                    height: auto;
                }
            }

            .cont-card1.eng {
                height: 388px;
            }

            .cont-card1:hover {
                transform: translate(0, -10px);
                transition-delay: 0s !important;
                transition-duration: 0.5s;
            }

            .hoverOut {
                transform: translate(0, 0);
                transition-delay: 0s !important;
                transition-duration: 0.3s;
            }

            .cont-box3 {
                width: 100%;
                height: 700px;
                position: relative;
                margin-top: 117px;

                .cont-bg2 {
                    position: absolute;
                    top: 0;
                    left: -50px;
                    width: 50%;
                    max-width: 634px;
                }

                .cont-bg3 {
                    position: absolute;
                    top: 116px;
                    left: 124px;
                }

                @media screen and (max-width: 1350px) {
                    .cont-bg3 {
                        left: 20px;
                    }
                }

                .cont-left {
                    width: 50%;
                    height: 389px;
                    position: absolute;
                    top: 123px;
                    left: 50%;

                    .cont-container1 {
                        width: 487px;
                        height: 389px;
                        margin: 0 auto;
                        position: relative;

                        .cont-title2 {
                            height: 40px;
                            font-size: 28px;
                            font-family: PingFang-SC-Heavy, PingFang-SC;
                            font-weight: 800;
                            color: #202934;
                            line-height: 40px;
                            margin-left: 12px;
                        }

                        .cont-title-bg2 {
                            width: 180px;
                            height: 47px;
                            background: linear-gradient(270deg, rgba(233, 240, 255, 0) 0%, #DBE6FF 100%);
                            border-radius: 12px 0 0 12px;
                            position: absolute;
                            top: 17px;
                            left: 0;
                            z-index: -1;
                        }

                        .cont-img-box {
                            width: 86px;
                            height: 305px;
                            margin-top: 44px;
                            position: relative;
                            float: left;
                        }

                        .cont-info-box {
                            width: 400px;
                            height: 321px;
                            margin-top: 28px;
                            float: left;

                            .cont-info-title {
                                height: 25px;
                                font-size: 18px;
                                font-family: PingFangSC-Semibold, PingFang SC;
                                font-weight: 600;
                                color: #1D2533;
                                line-height: 25px;
                                margin-top: 36px;
                            }

                            .cont-info-title.eng {
                                margin-top: 18px;
                            }

                            .cont-info-txt {
                                margin-top: 16px;
                            }
                        }
                    }
                }
            }

            .cont-box4 {
                width: 983px;
                height: 448px;
                margin: 0 auto;
                position: relative;

                .cont-card2 {
                    width: 280px;
                    height: 332px;
                    background: #FFFFFF;
                    box-shadow: 0 10px 30px 0 rgba(53, 46, 133, 0.08);
                    border-radius: 20px;
                    position: relative;
                    float: left;
                    margin-right: 71px;

                    .cont-card2-bg {
                        content: url("../assets/img/bg_4.png")
                    }

                    .oval {
                        position: absolute;
                        top: 58px;
                        left: 66px;
                    }

                    .icon_8 {
                        position: absolute;
                        top: 100px;
                        left: 116px;
                    }

                    .cont-card2-txt {
                        width: 240px;
                        height: 18px;
                        font-size: 16px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #202934;
                        line-height: 18px;
                        text-align: center;
                        margin: 86px auto 44px auto;
                    }

                    .line3 {
                        width: 28px;
                        height: 2px;
                        background: #3B60F6;
                        margin: 0 auto;
                    }
                }

                .cont-card2:hover {
                    transform: translate(0, -10px);
                    transition-delay: 0s !important;
                    transition-duration: 0.5s;

                    .cont-card2-bg {
                        transition: content 0.5s;
                        content: url("../assets/img/bg_6.png")
                    }

                    .line3 {
                        transition: width 0.5s;
                        width: 200px;
                    }
                }

                .cont-card2-hoverOut {
                    transform: translate(0, 0);
                    transition-delay: 0s !important;
                    transition-duration: 0.3s;

                    .line3 {
                        transition: width 0.5s;
                        width: 28px;
                    }
                }
            }
        }

        .footer {
            width: 100%;
            height: 494px;
            background: #F2F7FF;

            .footer-box1 {
                width: 669px;
                height: 158px;
                margin: 0 auto;
                padding: 56px 0 88px 0;

                .footer-title1 {
                    text-align: center;
                    height: 40px;
                    font-size: 28px;
                    font-family: PingFang-SC-Heavy, PingFang-SC;
                    font-weight: 800;
                    color: #202934;
                    line-height: 40px;
                }

                .footer-txt1 {
                    text-align: center;
                    height: 18px;
                    margin-top: 16px;
                }

                .footer-img {
                    width: 669px;
                    height: 28px;
                    margin: 56px auto 0 auto;
                    background: url('../assets/img/logo.png') no-repeat;
                }
            }

            .footer-box2 {
                width: 100%;
                height: 192px;
                position: relative;

                .footer-box2-bg1 {
                    width: 500px;
                    height: 192px;
                    background: #020045;
                    position: absolute;
                    top: 0;
                }

                .footer-box2-bg2 {
                    width: 100%;
                    height: 192px;
                    position: absolute;
                    top: 0;
                    z-index: 10;

                    .footer-box2-bgImg {
                        width: 1096px;
                        height: 192px;
                        margin: 0 auto;
                        background: url('../assets/img/bg_5.png') no-repeat;
                    }
                }

                .footer-container {
                    width: 100%;
                    position: absolute;
                    top: 78px;
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
        }
    }

    #home-mobile {
        display: none;

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
            min-width: 320px;
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
                    min-width: 270px;
                    margin: 18px 80px 0 0;
                    height: 40px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 20px;
                }

                @media screen and (max-width: 370px) {
                    .header-text {
                        font-size: 12px;
                    }
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

                @media screen and (max-width: 360px) {
                    .header-box2 {
                        margin-top: 60px;
                    }
                }

                @media screen and (max-width: 340px) {
                    .logo2 {
                        margin-top: 20px;
                    }
                    .header-box2 {
                        margin-top: 65px;
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

            @media screen and (max-width: 350px) {
                .cont-title1 {
                    font-size: 20px;
                }
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
                width: 100%;
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
                    width: 260px;
                    height: 263px;
                    float: left;
                    margin-left: 5px;

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
                        margin-top: 8px;
                    }

                    .cont-info-txt {
                        margin-top: 5px;
                    }
                }

                @media screen and (max-width: 380px) {
                    .cont-info-box {
                        width: 240px;
                        margin-left: 0;
                    }
                }

                @media screen and (max-width: 350px) {
                    .cont-info-box {
                        width: 220px;
                        margin-left: -5px;
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

                    .cont-container2 {
                        align-self: center;
                        width: 250px;
                        margin: 0 auto;
                    }

                    .cont-box4-info {
                        font-size: 16px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 18px;
                        margin-top: 22px;

                        img {
                            margin-right: 16px;
                        }
                    }
                }
            }

            .cont-txt2 {
                height: 18px;
                margin: 20px 0 20px 0;
            }
        }

        .footer {
            width: 100%;
            height: auto;
            position: relative;
            background: #FFFFFF;

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
    }

    @media screen and (max-width: 450px) {
        #home-pc {
            display: none;
        }

        .home {
            min-width: 320px;
        }

        #home-mobile {
            display: block;
        }
    }
</style>
