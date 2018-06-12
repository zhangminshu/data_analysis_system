<template>
    <div class="main-content">
        <div class="filterWarp">
            <div class="filter">
                <row class="start_date ms-iBlock">
                    <i-col>
                        <Date-picker :value="start_date" @on-change="handleChangeStart" type="date"
                                     placeholder="选择日期" style="width: 154px"></Date-picker>
                    </i-col>
                </row>
            </div>
        </div>
        <div class="ms-body">
            <div class="moduleTop">
                <div class="ms-clear">
                    <div class="ms-left desc"><i class="icon-warn"></i>部分数据需要重新计算，耗时3分钟，请谨慎修改</div>
                    <div class="ms-right"><span class="editTable btn">编辑表格</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                start_date:''
            }
        },
        created(){
            this.$store.commit('updateActiveItem','m3')
            this.$store.commit('updateActiveNames','m32')
        },
        methods:{
            handleChangeStart(){

            }
        }
    }
</script>

<style lang="less">
    .editTable{
        background: #53a3ff;
        position: relative;
        top: -8px;
    }
</style>
