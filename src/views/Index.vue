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
                    <ul>
                        <li>
                            <p>累计花费</p>
                            <p>￥12312</p>
                        </li>
                        <li>
                            <p>累计收入</p>
                            <p>￥342</p>
                        </li>
                        <li>
                            <p>累计XX收入</p>
                            <p>￥123113</p>
                        </li>
                        <li>
                            <p>缺口</p>
                            <p>￥23444</p>
                        </li>
                        <li>
                            <p>研发分成后缺口</p>
                            <p>￥12313</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>累计花费</p>
                            <p>￥12312</p>
                        </li>
                        <li>
                            <p>累计收入</p>
                            <p>￥342</p>
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

            }
        },
        mounted() {

        },
        created() {

        },
        destroyed() {

        },
        computed: {
            iconSize() {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick() {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
</script>
<style lang="less">
    .ivu-col {
        transition: width .2s ease-in-out;
    }


    .moduleContent{
        .moduleTable{
            padding: 50px;
            ul{
                display:table;
                width: 100%;
            }
            ul>li{
                display: table-cell;
                width: 20%;
                height: 70px;
                vertical-align: middle;
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
