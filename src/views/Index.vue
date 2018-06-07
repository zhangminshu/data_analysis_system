<template>
    <div class="main-content">
        <div class="ms-body">
            <!--<keep-alive :include="cachePage">-->
            <!--<router-view></router-view>-->
            <!--</keep-alive>-->
            <div class="moduleTop">
                <div class="ms-clear">
                    <div class="ms-left moduleTitle"><span class="ms-mark"></span>主要数据</div>
                    <div class="ms-right ms-ml25"><span class="ms-mark-green"></span>值 < 0</div>
                    <div class="ms-right "><span class="ms-mark-red"></span>值 > 0</div>
                </div>
            </div>
            <div class="moduleContent">
                <div class="moduleTable">
                    <ul class="">
                        <li>
                            <p class="item-name">累计花费</p>
                            <p class="item-num"><span class="unit">￥</span>{{totalData.totalCost}}</p>
                        </li>
                        <li>
                            <p class="item-name">累计收入</p>
                            <p class="item-num" ><span class="unit">￥</span>{{totalData.totalIncome}}</p>
                        </li>
                        <li>
                            <p class="item-name">累计凯撒收入</p>
                            <p class="item-num"><span class="unit">￥</span>{{totalData.totalKSIncome}}</p>
                        </li>
                        <li>
                            <p class="item-name">缺口</p>
                            <p class="item-num red" :class="{'green':(totalData.gap < 0)}"><span class="unit">￥</span>{{totalData.gap}}</p>
                        </li>
                        <li>
                            <p class="item-name">研发分成后缺口</p>
                            <p class="item-num red" :class="{'green':(totalData.rentGap <0 )}"><span class="unit">￥</span>{{totalData.rentGap}}</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p class="item-name">ROC</p>
                            <p class="item-num">{{totalData.roc}}<span class="unit">%</span></p>
                        </li>
                        <li>
                            <p class="item-name">KOC</p>
                            <p class="item-num">{{totalData.koc}}<span class="unit">%</span></p>
                        </li>
                        <li>
                            <p></p>
                            <p></p>
                        </li>
                        <li>
                            <p></p>
                            <p></p>
                        </li>
                        <li>
                            <p></p>
                            <p></p>
                        </li>
                    </ul>
                </div>

                <div class="remarks">
                    <div class="remark-warp ms-clear">
                        <div class="remark-icon ms-left">注</div>
                        <div class="ms-left remark-content">
                            <p class="list"><strong>ROC:</strong>凯撒实际投入＆总体产出比。累计总收入/实际消耗。</p>
                            <p class="list"><strong>KOC:</strong>凯撒实际投入＆凯撒所得收入比。凯撒所得累计总收入/实际消耗。</p>
                            <p class="hints"><strong>基础数据每日从经分系统获取，约7:00完成数据计算展示</strong></p>
                        </div>
                    </div>
                </div>

            </div>
            <!--<router-view></router-view>-->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                totalData:{
                    'totalCost':13546,
                    'totalIncome':5464,
                    'totalKSIncome':454525,
                    'gap':54633,
                    'rentGap':-0.6464,
                    'roc':33,
                    'koc':26
                }
            }
        },
        mounted() {

        },
        created() {

        },
        destroyed() {

        },
        computed: {},
        methods: {}
    }
</script>
<style lang="less">
    .ivu-col {
        transition: width .2s ease-in-out;
    }

    .red{
        color: #fd6a47;
    }
    .green{
        color: #6dd041;
    }
    .moduleContent{
        .moduleTable{
            padding: 50px 66px;
            .unit{
                color: #dce0e0;
            }
            .item-name{
                font-weight: bold;
                color: #acb6c2;
            }
            .item-num{
                font-size: 22px;
            }
            ul{
                display:table;
                width: 100%;
                border-bottom: 1px solid #ebeef1;
                &:last-child{
                    border: none;
                }
            }
            ul>li{
                display: table-cell;
                width: 20%;
                height: 70px;
                padding: 30px;
                padding-left: 50px;
                vertical-align: middle;
                border-right: 1px solid #ebeef1;
                &:last-child{
                    border: none;
                }
            }
        }
        .remarks{
            background: #f7fafb;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            padding: 17px 47px 60px 47px;
            .remark-icon{
                background: url("../assets/img/mark.png") no-repeat;
                width: 30px;
                height: 29px;
                text-align: center;
                color: #ffffff;
                font-size: 16px;
                line-height: 29px;
                padding-right: 1px;
            }
            .remark-content{
                margin-left: 15px;
                margin-top: 10px;
            }
            .hints{
                margin-top: 15px;
            }
        }
    }
</style>
