<template>
    <div class="main-content">
        <div class="ms-body">
            <!--<keep-alive :include="cachePage">-->
            <!--<router-view></router-view>-->
            <!--</keep-alive>-->
            <div class="moduleTop">
                <div class="ms-clear">
                    <div class="ms-left moduleTitle"><span class="ms-mark"></span>ROI预警设置</div>
                </div>
            </div>
            <div class="moduleContent">
                <div class="tableSetting">
                    <div>当表格数据触发以下条件时，会高亮处理；</div>
                    <div class="item ms-clear">
                        <div class="ms-left item-yellow">标黄<span class="yellow"></span>日ROI的数值低于安全值标准时，该数据格填充为黄色。</div>
                        <div class="ms-left">
                            <table class="">
                                <tr>
                                    <td class="tableBg">全部渠道</td><td class="tableBg">1日ROI</td><td class="tableBg">7日ROI</td><td class="tableBg">14日ROI</td>
                                    <td class="tableBg">30日ROI</td><td class="tableBg">60日ROI</td><td class="tableBg">90日ROI</td>
                                </tr>
                                <tr>
                                    <td class="tableBg">安全值（%）</td>
                                    <td><input type="text"></td>
                                    <td><input type="text"></td>
                                    <td><input type="text"></td>
                                    <td><input type="text"></td>
                                    <td><input type="text" placeholder="（选填）"></td>
                                    <td><input type="text" placeholder="（选填）"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="item"><div>标紫<span class="purple"></span>日ROI环比涨幅小于： <input class="setVal" type="text"> %，该数据格填充为紫色。</div></div>
                    <div class="item"><div>标红<span class="pink"></span>日ROI大于：<input class="setVal" type="text"> %，该数据格填充为红色。</div></div>
                </div>

                <div class="remarks">
                    <div class="remark-warp ms-clear">
                        <div class="remark-icon ms-left">注</div>
                        <div class="ms-left remark-content">
                            <p class="list">①、标黄，仅针对1、7、14、30日数据进行检测；</p>
                            <p class="list">②、标红适用于全局表格；</p>
                            <p class="list">③、标紫建立在标黄基础上<span class="red">（1/7/14/30日节点无黄，则区间段无紫）</span>。如出现某（1/7/14/30）日ROI数据同时满足（黄紫）2种条件，直接标紫，否则标黄；</p>
                            <p class="list">④、数据格填色处理遵循优先级：<span class="red">标红＞标紫＞标黄；</span></p>
                            <p class="hints">例：</p>
                            <p class="list">某一天数据的1日ROI超过安全值，正常。2日ROI直接＞标红安全线，则直接标红，该天后续表格数据全部标红；（参考②）</p>
                            <p class="list">某一天数据的7日ROI低于安全值，且相较6日ROI的日环比增幅＜X%，则标紫；（参考③）</p>
                            <p class="list">某一天数据的7日ROI超过安全值，正常。但8日ROI相较7日的日环比增幅＜X%，则7日正常，8日正常，后续检测14日的数据；（参考③）</p>
                        </div>
                    </div>
                </div>

            </div>
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
        computed: {},
        methods: {}
    }
</script>
<style lang="less">
    .red{
        color: #fd6a47;
    }
    .moduleContent{
        .tableSetting{
            padding: 15px 37px 31px 37px;
            .item{
                border: 1px dashed #ebeef1;
                border-radius: 6px;
                padding: 18px 14px 31px 14px;
                min-height: 30px;
                margin-bottom: 24px;
                .item-yellow{
                    margin-right: 24px;
                }
                .tableBg{
                    background: #f8f9fd;
                }
                .yellow{
                    width: 31px;
                    height: 31px;
                    border-radius: 3px;
                    background: #ffdf93;
                    display: inline-block;
                    margin: 0 19px -10px 14px;
                }
                .purple{
                    width: 31px;
                    height: 31px;
                    border-radius: 3px;
                    background: #d8bff8;
                    display: inline-block;
                    margin: 0 19px -10px 14px;
                }
                .pink{
                    width: 31px;
                    height: 31px;
                    border-radius: 3px;
                    background: #ffcee3;
                    display: inline-block;
                    margin: 0 19px -10px 14px;
                }
                .setVal{
                    height: 32px;
                    width: 86px;
                    border: none;
                    border: 1px solid #cdd0dd;
                    border-radius: 3px;

                }
                &:nth-child(2n+1){
                    background: #fbfcfe;
                }
            }
            table{
                td{
                    border: 1px solid #cdd0dd;
                    padding: 0 0 0 10px;
                    width: 140px;
                    height: 32px;
                    input{
                        height: 32px;
                        width: 140px;
                        border: none;
                        margin-left: -10px;
                        padding-left: 10px;
                    }
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
