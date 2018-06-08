<template>
    <div class="main-content">
        <div class="filterWarp">
            <div class="filterItems">
                <div class="filter ms-clear">
                    <div class="ms-left">
                        <row class="start_date ms-iBlock">
                            <label>开始时间</label>
                            <i-col>
                                <Date-picker :value="start_date" @on-change="handleChangeStart" type="date"
                                             placeholder="选择日期" style="width: 154px"></Date-picker>
                            </i-col>
                        </row>
                        <row class="start_end ms-iBlock">
                            <label>结束时间</label>
                            <i-col>
                                <Date-picker type="date" :value="end_date" @on-change="handleChangeEnd"
                                             placeholder="选择日期" style="width: 154px"></Date-picker>
                            </i-col>
                        </row>
                    </div>
                    <div class="filterBtn ms-right">
                        <span class="btn def" @click="showDialog=true">渠道筛选</span>
                    </div>
                </div>
            </div>
            <div class="currFilterItems" v-if="selectedFilterItem.length > 0">
                <div class="ms-clear">
                    <label class="ms-left item-label">当前广告渠道</label>
                    <div class="ms-left selectedFilterItems"><span class="filterItem"
                                                                   v-for="item in selectedFilterItem">{{item}}<i
                            class="delete" @click="removeFilter(item)"></i></span></div>
                </div>
            </div>
        </div>
        <explain></explain>
        <div class="ms-body">
            <div class="charts">
                <div class="chartHeader flex">
                    <div class="part-left flex-item ms-tl ms-iBlock">
                        <div class="mark-line ms-iBlock ms-tc">
                            <p class="line-name">基准线</p>
                            <p class="line-color"></p>
                            <p class="mark-num ">5%</p>
                        </div>
                        <div class="more-than-mark ms-iBlock">
                            <p class="line-up-down">基准线上</p>
                            <p><strong>156</strong>日</p>
                        </div>
                        <div class="less-than-mark ms-iBlock">
                            <p class="line-up-down">基准线下</p>
                            <p><strong>156</strong>日</p>
                        </div>
                    </div>
                    <div class="part-center flex-item ms-tc ms-iBlock">
                        <span class="tab active">1日ROI</span>
                        <span class="tab">7日ROI</span>
                        <span class="tab">14日ROI</span>
                        <span class="tab">30日ROI</span>
                        <span class="tab">60日ROI</span>
                        <span class="tab">90日ROI</span>
                    </div>
                    <div class="part-right flex-item ms-tr ms-iBlock">
                        <span class="export-table" @click="exportData(1)">导出csv</span>
                    </div>
                </div>
                <div id="myChart"></div>
            </div>
            <div class="myTable">
                <div class="tableHeader">
                    <div class="tableTabs">
                        <span class="tab active">ROI</span>
                        <span class="tab">LTV</span>
                        <span class="tab">收入</span>
                        <span class="tab">加权ROI</span>
                        <span class="tab">加权LTV</span>
                    </div>
                </div>
                <i-table :columns="columns8" :data="data7" size="small" ref="tableCsv"></i-table>

                <div style="margin: 30px 10px" class="ms-clear">
                    <div style="float: right;">
                        <Page class="page" :total="100" size="small" show-elevator show-sizer></Page>
                    </div>
                </div>
            </div>
        </div>

        <Modal v-model="showDialog" width="688px" :visible.sync="showDialog" title="渠道筛选" @on-ok="ok"
               @on-cancel="cancel">
            <div class="filterDialog">
                <div class="ms-clear">
                    <p class="ms-left filterItem" @click="selectFilterItem(item)"
                       :class="{selected:(selectedFilterItem.includes(item))}" v-for="item in allFilterItem">{{item}} <i
                            class="selectItem"></i></p>
                </div>

            </div>

        </Modal>
    </div>
</template>

<script>
    import explain from '../components/explain'

    export default {
        data() {
            return {
                showDialog: false,
                start_date: '',
                end_date: '',
                selectedFilterItem: ['sdfsd', '渠道平台', '看好看的书', '单复数', 'higasp', 'sdfsdfsfs', '金翅鸟', '凯撒平台14', '凯撒平台15', '凯撒平台16', '凯撒平台17'],
                allFilterItem: ['sdfsd', '渠道平台', '看好看的书', '单复数', 'higasp', 'sdfsdfsfs', '金翅鸟',
                    '凯撒平台1', '凯撒平台2', '凯撒平台3', '凯撒平台4', '凯撒平台5', '凯撒平台6', '凯撒平台7',
                    '凯撒平台11', '凯撒平台12', '凯撒平台13', '凯撒平台14', '凯撒平台15', '凯撒平台16', '凯撒平台17',
                    '凯撒平台41'],
                self: this,
                tableData1: this.mockTableData1(),
                columns8: [
                    {
                        "title": "名称",
                        "key": "name",
                        "fixed": "left",
                        "width": 200
                    },
                    {
                        "title": "展示",
                        "key": "show",
                        "width": 150,
                        "sortable": true,
                        filters: [
                            {
                                label: '大于4000',
                                value: 1
                            },
                            {
                                label: '小于4000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                    {
                        "title": "唤醒",
                        "key": "weak",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "登录",
                        "key": "signin",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "点击",
                        "key": "click",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "激活",
                        "key": "active",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "7日留存",
                        "key": "day7",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "30日留存",
                        "key": "day30",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "次日留存",
                        "key": "tomorrow",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "日活跃",
                        "key": "day",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "周活跃",
                        "key": "week",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "月活跃",
                        "key": "month",
                        "width": 150,
                        "sortable": true
                    }
                ],
                data7: [
                    {
                        "name": "推广名称1",
                        "fav": 0,
                        "show": 7302,
                        "weak": 5627,
                        "signin": 1563,
                        "click": 4254,
                        "active": 1438,
                        "day7": 274,
                        "day30": 285,
                        "tomorrow": 1727,
                        "day": 558,
                        "week": 4440,
                        "month": 5610
                    },
                    {
                        "name": "推广名称2",
                        "fav": 0,
                        "show": 4720,
                        "weak": 4086,
                        "signin": 3792,
                        "click": 8690,
                        "active": 8470,
                        "day7": 8172,
                        "day30": 5197,
                        "tomorrow": 1684,
                        "day": 2593,
                        "week": 2507,
                        "month": 1537
                    },
                    {
                        "name": "推广名称3",
                        "fav": 0,
                        "show": 7181,
                        "weak": 8007,
                        "signin": 8477,
                        "click": 1879,
                        "active": 16,
                        "day7": 2249,
                        "day30": 3450,
                        "tomorrow": 377,
                        "day": 1561,
                        "week": 3219,
                        "month": 1588
                    },
                    {
                        "name": "推广名称4",
                        "fav": 0,
                        "show": 9911,
                        "weak": 8976,
                        "signin": 8807,
                        "click": 8050,
                        "active": 7668,
                        "day7": 1547,
                        "day30": 2357,
                        "tomorrow": 7278,
                        "day": 5309,
                        "week": 1655,
                        "month": 9043
                    },
                    {
                        "name": "推广名称5",
                        "fav": 0,
                        "show": 934,
                        "weak": 1394,
                        "signin": 6463,
                        "click": 5278,
                        "active": 9256,
                        "day7": 209,
                        "day30": 3563,
                        "tomorrow": 8285,
                        "day": 1230,
                        "week": 4840,
                        "month": 9908
                    },
                    {
                        "name": "推广名称6",
                        "fav": 0,
                        "show": 6856,
                        "weak": 1608,
                        "signin": 457,
                        "click": 4949,
                        "active": 2909,
                        "day7": 4525,
                        "day30": 6171,
                        "tomorrow": 1920,
                        "day": 1966,
                        "week": 904,
                        "month": 6851
                    },
                    {
                        "name": "推广名称7",
                        "fav": 0,
                        "show": 5107,
                        "weak": 6407,
                        "signin": 4166,
                        "click": 7970,
                        "active": 1002,
                        "day7": 8701,
                        "day30": 9040,
                        "tomorrow": 7632,
                        "day": 4061,
                        "week": 4359,
                        "month": 3676
                    },
                    {
                        "name": "推广名称8",
                        "fav": 0,
                        "show": 862,
                        "weak": 6520,
                        "signin": 6696,
                        "click": 3209,
                        "active": 6801,
                        "day7": 6364,
                        "day30": 6850,
                        "tomorrow": 9408,
                        "day": 2481,
                        "week": 1479,
                        "month": 2346
                    },
                    {
                        "name": "推广名称9",
                        "fav": 0,
                        "show": 567,
                        "weak": 5859,
                        "signin": 128,
                        "click": 6593,
                        "active": 1971,
                        "day7": 7596,
                        "day30": 3546,
                        "tomorrow": 6641,
                        "day": 1611,
                        "week": 5534,
                        "month": 3190
                    },
                    {
                        "name": "推广名称10",
                        "fav": 0,
                        "show": 3651,
                        "weak": 1819,
                        "signin": 4595,
                        "click": 7499,
                        "active": 7405,
                        "day7": 8710,
                        "day30": 5518,
                        "tomorrow": 428,
                        "day": 9768,
                        "week": 2864,
                        "month": 5811
                    }
                ]
            }
        },
        components: {
            explain
        },
        methods: {
            ok() {
                this.$Message.info('点击了确定');
            },
            cancel() {
                this.showDialog = false;
            },
            handleChangeStart(date) {
                this.start_date = date;
                console.log(this.start_date)
            },
            handleChangeEnd(date) {
                this.end_date = date;
                console.log(this.end_date)
                console.log(this.selectedFilterItem)
            },
            selectFilterItem(item) {
                let isInArr = this.selectedFilterItem.includes(item)
                if (isInArr) {
                    this.selectedFilterItem = this.selectedFilterItem.filter((val) => val != item)
                } else {
                    this.selectedFilterItem.push(item)
                }
            },
            removeFilter(item) {
                this.selectedFilterItem = this.selectedFilterItem.filter((val) => val != item)
                console.log(this.selectedFilterItem)
            },
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: '商圈' + Math.floor(Math.random () * 100 + 1),
                        status: Math.floor(Math.random () * 3 + 1),
                        portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
                        people: [
                            {
                                n: '客群' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: '客群' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: '客群' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            }
                        ],
                        time: Math.floor(Math.random () * 7 + 1),
                        update: new Date()
                    })
                }
                return data;
            },
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            changePage () {
                // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
                this.tableData1 = this.mockTableData1();
            },
            exportData (type) {
                if (type === 1) {
                    this.$refs.tableCsv.exportCsv({
                        filename: '原始数据'
                    });
                } else if (type === 2) {
                    this.$refs.tableCsv.exportCsv({
                        filename: '排序和过滤后的数据',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.tableCsv.exportCsv({
                        filename: '自定义数据',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            }
        },
        mounted() {
            const option = {
                title:{
                    x:'center',
                    y:'top',
                    padding:35,
                    text:'ROI/加权ROI趋势图'
                },
                legend: {
                    show:true,
                    orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                               // 'horizontal' ¦ 'vertical'
                    x: 'center',               // 水平安放位置，默认为全图居中，可选为：
                                               // 'center' ¦ 'left' ¦ 'right'
                                               // ¦ {number}（x坐标，单位px）
                    y:'bottom',
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: '#ccc',       // 图例边框颜色
                    borderWidth: 0,            // 图例边框线宽，单位px，默认为0（无边框）
                    padding: 10,                // 图例内边距，单位px，默认各方向内边距为5，
                                               // 接受数组分别设定上右下左边距，同css
                    itemGap: 30,               // 各个item之间的间隔，单位px，默认为10，
                                               // 横向布局时为水平间隔，纵向布局时为纵向间隔
                    itemWidth: 20,             // 图例图形宽度
                    itemHeight: 10,            // 图例图形高度
                    textStyle: {
                        color: '#333'          // 图例文字颜色
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    top: '15%',
                    left: '1.2%',
                    right: '1.2%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                        axisLabel: {
                            interval: 'auto',//x轴刻度（0,1..number型数字代表相隔多少个单元，auto自适应string型）
                            show: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        // axisLabel: {
                        //     show: true,
                        //     interval: 'auto',
                        //     formatter: '{value} %'
                        // }
                    }
                ],
                series: [
                    {
                        name: '运营商/网络服务',
                        type: 'line',
                        // stack: '总量',
                        // areaStyle: {normal: {
                        //         color: '#2d8cf0'
                        //     }},
                        markLine: {
                            itemStyle: {
                                normal: {
                                    lineStyle: {type: 'dashed', color: 'red'},
                                    label: {show: true, position: 'right',name:'sdfsdf'}
                                }
                            },
                            data: [{yAxis: 500}]//设置基准线，可以多条
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '银行/证券',
                        type: 'line',
                        // stack: '总量',
                        // areaStyle: {normal: {
                        //         color: '#10A6FF'
                        //     }},
                        data: [257, 358, 278, 234, 290, 330, 310]
                    },
                    {
                        name: '游戏/视频',
                        type: 'line',
                        itemStyle: {
                            color: '#10A6FF'
                        },
                        // stack: '总量',
                        // areaStyle: {normal: {
                        //         color: '#0C17A6'
                        //     }},
                        data: [379, 268, 354, 269, 310, 478, 358]
                    },
                    {
                        name: '餐饮/外卖',
                        type: 'line',
                        // stack: '总量',
                        // areaStyle: {normal: {
                        //         color: '#4608A6'
                        //     }},
                        data: [555, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '快递/电商',
                        type: 'line',
                        // stack: '总量',
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value} %'
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        // areaStyle: {normal: {
                        //         color: '#398DBF'
                        //     }},
                        data: [756, 645, 546, 745, 872, 624, 258]
                    }
                ]

            };
            let chartBox = document.getElementsByClassName('charts')[0]
            let myChart = document.getElementById('myChart')

            function resizeCharts() {
                myChart.style.width = chartBox.offsetWidth + 'px'
                myChart.style.height = chartBox.offsetHeight + 'px'
            }

            resizeCharts()

            let mainChart = this.$echarts.init(myChart)
            mainChart.setOption(option)
        }
    }
</script>

<style lang="less">
    .filterWarp {
        background: #f7fafb;
        .filter {
            padding: 22px 38px 17px 38px;
            .start_date {
                margin-right: 10px;
            }
        }
        .filterBtn {
            .btn {
                display: inline-block;
                width: 134px;
                text-align: center;
                height: 36px;
                line-height: 36px;
                border-radius: 4px;
                color: #fff;
                cursor: pointer;
            }
            .def {
                background: #53a3ff;
            }
            .v {
                background: #7c7ce2;
            }
        }

        .currFilterItems {
            padding: 10px 38px;
            border-top: 1px solid #ebeef1;
            .item-label {
                margin-right: 10px;
            }
            .selectedFilterItems {
                max-width: 92%;
            }
            .filterItem {
                border: 1px solid #cdd0dd;
                padding: 0 4px;
                font-size: 12px;
                display: inline-block;
                border-radius: 4px;
                margin-right: 10px;
                .delete {
                    background: url("../assets/img/delete.png") no-repeat;
                    width: 10px;
                    height: 10px;
                    display: inline-block;
                    cursor: pointer;
                    margin-left: 4px;
                }
            }
        }
    }

    .filterDialog {
        height: 424px;
        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        &::-webkit-scrollbar-track-piece {
            background: #ebeff4;
            border-radius: 4px;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: #bec9d7;
        }
        .filterItem {
            height: 36px;
            width: 216px;
            display: inline-block;
            line-height: 36px;
            border: 1px solid #eceff8;
            padding-left: 10px;
            margin-right: -1px;
            margin-bottom: -1px;
            cursor: pointer;
            position: relative;
            background: #f8f9fd;
            .selectItem {
                background: url("../assets/img/selected.png") no-repeat;
                width: 14px;
                height: 9px;
                display: none;
                position: absolute;
                right: 20px;
                top: 12px;
            }
            &.selected, &:hover {
                background: #ffffff;
                .selectItem {
                    display: inline-block;
                }
            }
        }
    }

    .charts {
        min-height: 725px;
        margin: 30px 50px;
        .chartHeader{
            font-size: 12px;
            .part-left{
                .line-name{
                    position: relative;
                    top: -8px;
                }
                .line-color{
                    position: relative;
                    top: -3px;
                }
                .line-up-down{
                    position: relative;
                    top: 6px;
                }
                .mark-line{
                    border-right: 1px solid #d9dfe5;
                    padding-right: 39px;
                    .line-color{
                        height: 2px;
                        width: 90%;
                        margin: 0 auto;
                        background: #ff8686;
                    }
                    .mark-num{
                        color: #ff8686;
                    }
                }
                .more-than-mark{
                    margin-right: 36px;
                    margin-left: 22px;
                    strong{font-size: 24px;font-weight: normal}
                }
                .less-than-mark {
                    strong{font-size: 24px;font-weight: normal}
                }
            }

            .part-center{
                .tab{
                    cursor: pointer;
                    border: 1px solid #cdd0dd;
                    padding: 10px 12px;
                    border-radius: 4px;
                    margin: 0 1px;
                    &.active,&:hover{
                        background: #fc9066;
                        color: #ffffff;
                        border: 1px solid #fc9066;
                    }
                }
            }
            .export-table{
                border: 1px solid #ccc;
                display: inline-block;
                width: 134px;
                text-align: center;
                height: 36px;
                border-radius: 4px;
                line-height: 36px;
                cursor: pointer;
            }
        }
    }
    .myTable{
        margin: 30px 50px 100px 50px;
        .tableHeader{
            height: 32px;
            margin-bottom: 14px;
            position: relative;
            .tableTabs{
                position: absolute;
                top: 0;
                right: 0;
                border: 1px solid #cdd0dd;
                border-radius: 4px;
                .tab{
                    cursor: pointer;
                    display: inline-block;
                    width: 72px;
                    height: 32px;
                    line-height: 32px;
                    text-align: center;
                    margin-right: -4px;
                    border-right: 1px solid #cdd0dd;
                    &.active,&:hover{
                        background: #fc9066;
                        color: #ffffff;
                        border: 1px solid #fc9066;
                        height: 100%;
                        width: 72px;
                    }
                    &:first-child{
                        border-bottom-left-radius: 4px;
                        border-top-left-radius: 4px;

                    }
                    &:last-child{
                        border-top-right-radius: 4px;
                        border-bottom-right-radius: 4px;
                        border-right:none;
                        margin-right: 0;
                    }
                }
            }
        }
        .page{
            position: relative;
        }
    }

</style>
