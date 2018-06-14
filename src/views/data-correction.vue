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
                    <div class="ms-right"><span @click="changeTable()" class="btn" :class="(isEdit ?'editTable' :'submitTable')">{{text}}</span></div>
                </div>
            </div>
            <div class="tableWarp">
                <table>

                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isEdit:true,
                start_date:'2018-06-15',
                text:'编辑表格'
            }
        },
        created(){
            this.$store.commit('updateActiveItem','m3')
            this.$store.commit('updateActiveNames','m32')
        },
        methods:{
            changeTable(){
                this.isEdit = !this.isEdit;
                if(this.isEdit){
                    this.text = '编辑表格'
                }else {
                    this.text ='提交'
                }
            },
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
    .submitTable{
        background: #fb6b4f;
        position: relative;
        top: -8px;
    }
</style>
