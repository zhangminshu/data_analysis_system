<template>
    <div class="ms-explain">
        <div class="moduleTop">
            <div class="ms-clear">
                <div class="ms-left moduleTitle"><span class="ms-mark"></span>指标说明</div>
            </div>
        </div>
        <div class="moduleContent">
            <div class="explain-item ms-clear" v-for="(item,index) in explainContents.analysisDay">
                <div class="ms-left explain-index">{{index+1}}</div>
                <div class="ms-left explain-warp">
                    <div class="explain-list"  v-for="list in item.itemContent"><Tooltip placement="bottom-start" :content="list.hints"><label class="explain-label">{{list.label}}：</label>{{list.text}}</Tooltip></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                explainContents:{
                    "analysisDay":[{
                        "itemContent":[
                            {"label":"广告消耗","text":"渠道后台的广告消耗金额;","hints":'爬虫抓取'},
                            {"label":"新增设备","text":"当日SDK统计的新增登录设备;","hints":'经分系统获取（存在老账号登录新设备的误差）'},
                            {"label":"营收","text":"新增设备自新增日到;","hints":'经分系统获取（统计到昨日）'}
                            ]
                    },{
                        "itemContent":[
                            {"label":"ROI","text":"投放收入比;","hints":'营收/广告消耗'},
                            {"label":"LTV","text":"单个用户生命周期总价值;","hints":'营收/新增设备'},
                            {"label":"CPA","text":"获取单个有效用户成本;","hints":'广告消耗/新增设备'},
                            {"label":"实际消耗","text":"去除渠道返点后的实际消耗金额;","hints":'广告消耗*（1-渠道返点比例）'},
                            {"label":"当周/月收入","text":"统计日/周/月新增设备在统计（自然)周/月产生的累计收入;","hints":'新增设备SUM【统计日/周/月】产生的营收SUM【统计周/月】'},
                            {"label":"凯撒所得收入","text":"去除CP分成后的营收;","hints":'营收*（1-CP分成比例）'}
                            ]
                    },{
                        "itemContent":[
                            {"label":"KOI","text":"投放与凯撒所得收入比;","hints":'凯撒所得收入/广告消耗'},
                            {"label":"KOC","text":"投放（实际消耗）与凯撒所得收入比;","hints":'凯撒所得收入/实际消耗'},
                            {"label":"WOI/MOI","text":"当周/月的投入产出比;","hints":'当周/月的收入/广告消耗'},
                            {"label":"加权ROI","text":"ROI针对统计日的加权值;","hints":'某日营收SUM【开始日，统计日】/广告消耗SUM【开始日，统计日】'},
                            {"label":"周加权ROI","text":"该周内每日ROI针对统计日的加权值;","hints":'某日营收SUM【统计周开始日，统计周结束日】/广告消耗SUM【统计周开始日，统计周结束日】'},
                            {"label":"月加权ROI","text":"该月内每日ROI针对统计日的加权值;","hints":'某日营收SUM【统计月开始日，统计月结束日】/广告消耗SUM【统计月开始日，统计月结束日】\n' +
                                '例：2018年1月的月30日加权ROI = 1月1日~1月31日的每日新增设备的30日营收总和/1月1日~1月31日的广告消耗总和\n'},
                            {"label":"加权LTV","text":"LTV针对统计日的加权值;","hints":'X日加权：X日营收SUM【开始日，统计日】/新增设备SUM【开始日，统计日】'},
                            {"label":"凯撒增益收入","text":"凯撒所得收入与实际消耗的差值;","hints":'凯撒所得收入-实际消耗，红为正，绿为负'}
                            ]
                    }]
                }
            }
        }
    }
</script>

<style lang="less">
    //指标说明
    .ms-explain{
        background: #ffffff;
        margin: 24px;
        border: 1px solid #cdd0dd;
        border-radius: 6px;
        min-height: 120px;
        margin-bottom: -8px;
        .explain-item{
            border-bottom: 1px dashed #E3E5ED;
            margin: 12px 30px 12px 30px;
            padding-bottom: 10px;
            .explain-index{
                position: relative;
                top: 2px;
                background: #94B6CE;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                color: #ffffff;
                border-radius: 50%;
            }
            .explain-warp{
                width: 96%;
                margin-left: 4px;
                .explain-list{
                    width: 33%;
                    color: #000000;
                    display: inline-block;
                    .explain-label{
                        font-weight: bold;
                    }
                }
            }
            &:last-child{
                border: none;
            }
        }
        .ivu-tooltip-inner{
            white-space: normal;
            /*background: #fff;*/
            /*border: 1px solid #9b9da8;*/
            /*color: #5b7ca1;*/
        }
        /*.ivu-tooltip-arrow{*/
            /*top: 3px;*/
            /*border-width: 0px 5px 5px!important;*/
            /*border-bottom-color: #fff!important;*/
        /*}*/
        /*.ivu-tooltip-popper[x-placement^=bottom] .ivu-tooltip-arrow:before{*/
            /*top: 4px;*/
            /*border-width: 0px 5px 5px!important;*/
            /*border-bottom-color: #9b9da8!important;*/
        /*}*/
    }
</style>
