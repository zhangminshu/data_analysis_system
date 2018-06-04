<template>
    <div class="main-content">
        <div class="ms-body">
            <!--<keep-alive :include="cachePage">-->
            <!--<router-view></router-view>-->
            <!--</keep-alive>-->
            <div class="moduleTop">
                <div class="ms-clear">
                    <div class="ms-left"><span class="ms-mark"></span>主要数据</div>
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
    .ms-logo {
        height: 78px;
        line-height: 78px;
        background: #2f3236;
        color: #cdcccd;
        text-align: center;
        font-size: 18px;
    }
    .ivu-col {
        transition: width .2s ease-in-out;
    }

    .moduleTop{
        position: relative;
        height: 36px;
        border-bottom: 2px solid #ebeef1;
        //padding-bottom: 15px;
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
    }
</style>
