<template>
    <div class="main-content">
        <div class="topWarp">
            CP分成比例
            <input type="text">
            <span class="modify">修改</span>
            <div class="desc ms-iBlock"><i class="icon-warn"></i>修改分成比例会导致部分数据需要重新计算，耗时1分钟，请谨慎修改</div>
        </div>
        <div class="ms-body">
            <div class="moduleTop">
                <div class="ms-clear">
                    <div class="ms-left year">
                        <row class="start_date ms-iBlock">
                            <i-col>
                                <Date-picker :value="start_year" @on-change="handleChangeStart" type="year"
                                             placeholder="选择日期" style="width: 154px"></Date-picker>
                            </i-col>
                        </row>
                    </div>
                    <div class="ms-left moduleTitle"><strong>渠道返点：</strong><span class="normal">实际消耗=广告消耗X(1-返点)</span></div>

                    <div class="ms-right ms-ml25"><span class="edit btn">编辑表格</span></div>
                    <div class="ms-right "><span class="refresh btn">刷新</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                start_year:''
            }
        },
        created(){
            this.$store.commit('updateActiveItem','m3')
            this.$store.commit('updateActiveNames','m31')
        },
        methods:{
            handleChangeStart(){

            }
        }
    }
</script>

<style lang="less">
    .topWarp{
        background: #f7fafb;
        padding: 23px;
        font-size: 12px;
        input{
            width: 80px;
            margin: 0 5px;
            height: 32px;
            line-height: 32px;
            border: none;
            border-radius: 4px;
            border: 1px solid #cdd0dd;

        }
        .modify{
            background: #6dbf48;
            width: 72px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            color: #ffffff;
            cursor: pointer;
            display: inline-block;
            border-radius: 4px;
            margin-right: 10px;
        }
        .desc{
            color: #fd6a47;
        }
    }
    .year{
        position: relative;
        top: -4px;
        margin-right: 10px;
    }
    .normal {
        font-weight: normal;
    }
    .edit{
        top: -8px;
        background: #53a3ff;
    }
    .refresh{
        top: -8px;
        background: #6dbf48;
    }
</style>
