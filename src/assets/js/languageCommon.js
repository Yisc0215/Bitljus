/**
 * 语言模块
 * @this.getIndex 获取语言参数
 * @this.gl 获取中英文字符
 */

export default {
    //some global parameter

    //current langauge index
    languageIndex: 0,
    languageArray: ['CN', 'EN'],

    /**
     * Chinese & English list
     */
    userText: {
        headerTxt1: ['新一代去中心化C2C非同质借贷协议，更加多元化的支持开放式DeFi发展',
            'Next generation decentralization C2C non-homogeneous loan contract. More diversified support、fusion openness to DeFi ecological development'],
        language1: ['英文', 'English'],
        language2: ['中文', 'Chinese'],
        announcement: ['公告', 'Announcement'],
        contentTxt1: ['去中心化C2C借贷', 'Decentralized C2C loan'],
        contentTxt2: ['更加灵活、自由、开放的选择或创建数字资产借贷合同',
            'More flexible,free and open choices or create a digital asset lending contract.'],
        contentTxt3: ['合同在在借贷双方点对点而且去中心化执行，不依赖于任何中心化或者去中心化的管理平台',
            'The contract between borrower and lender hold peer-to-peer intelligent contract with decentralized execution,and does not rely on any centralized or decentralized management platform'],
        contentTxt4: ['更加灵活、自由、开放的选择或创建数字资产借贷合同,合同在在借贷双方点对点而且去中心化执行，不依赖于任何中心化或者去中心化的管理平台 。',
            'More flexible,free and open choices or create a digital asset lending contract.The contract between borrower and lender hold peer-to-peer intelligent contract with decentralized execution,and does not rely on any centralized or decentralized management platform'],
        cardTitle1: ['安全透明', 'Transparency and Security'],
        cardTitle2: ['无资金池风险', 'No Pool Risk'],
        cardTitle3: ['多个借贷对', 'Multiple debit and credit pairs'],
        cardTitle4: ['快速访问', 'Quick Access'],
        cardCont1: ['无需中心化或者去中心化的管理平台，确保交易透明和安全',
            'No need to have centralized or decentralized management platform, ensure transaction transparency and security'],
        cardCont2: ['区块链链上点对点借贷，无资金池债务风险', 'Peer-to-peer lending on the blockchain, no debt risk of capital pool'],
        cardCont3: ['支持以太系资产和以太坊网络映射的主流公链资产借贷对',
            'For multiple lending, support direct access to the browser from Ethereum-based assets and mainstream public chain assets mapped by the Ethereum network, one-click creation or import digital wallet'],
        cardCont4: ['浏览器直接访问，一键创建或导入数字钱包', 'The browser accesses it directly, creating or importing a digital wallet with one click'],
        User_Requirement: ['用户需求', 'User Requirement'],
        User_Group: ['用户群体', 'User Group'],
        User_Group_info: ['矿工或以加密资产作为运营资金的个人或者机构', 'Miner & Individuals or organization whose operating funds are digital assets'],
        Bullish: ['看涨', 'Bullish'],
        Bullish_info: ['面临资金需求时看涨所持有的数字资产不愿意低价抛售，选择以抵押借贷的方式借入周转资金',
            'Choose to borrow working capital by mortgage loan when facing of capital needs which bullish digital assets held are not willing to sell at low prices'],
        Bearish: ['看跌', 'Bearish'],
        Bearish_info: ['用抵押资产的方式借入看跌资产抛售获利，低价再回购履约借贷，解冻抵押资产',
            'Borrow bearish assets for profiting sell off by mortgage assets, Repurchase performance loans at low prices, Unfreeze mortgage assets'],
        Our_Future: ['我们的未来', 'Our Future'],
        Our_Future1: ['支持更多借贷衍生品工具', 'More loan Derivative instruments'],
        Our_Future2: ['支持借贷合同转让或者再交易', 'Loan contract transfer or re-transaction'],
        Our_Future3: ['支持去中心化担保借贷', 'Decentralized Collateralized Loan Obligation'],
        More_wallet: ['更多钱包支持', 'More wallet support'],
        More_wallet_info: ['以太系钱包浏览器和一般网页浏览器均可登录', 'The Ethernet wallet browser and normal web browser can be logged'],
        Home: ['首页', 'Home'],
        Token: ['通证', 'Token'],
        Project_information: ['项目信息', 'Project information'],
    },

    getIndex() {
        console.log('getMenuLanguage:' + this.languageIndex);
        return this.languageIndex;
    },

    setIndex(index) {
        this.languageIndex = index;
    },

    getArray() {
        return this.languageArray;
    },

    gl(name, index) {
        if (!this.userText[name]) {
            return name; // return "";
        }
        if (index == 0 || index == 1) {
            return this.userText[name][index];//this.Utf8ToUnicode(Lp[name][index]);
        }
        return this.userText[name][this.languageIndex];//this.Utf8ToUnicode(Lp[name][languageCom.languageIndex]);
    }
}
