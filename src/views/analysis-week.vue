<template>
    <div class="main-content">
        <div class="filterWarp">
            <div class="filterItems">
                <div class="filter ms-clear">
                    <div class="ms-left">
                        <row class="start_date ms-iBlock">
                            <label>开始周</label>
                            <i-col>
                                <Date-picker :value="start_date" @on-change="handleChangeStart"type="date" placeholder="选择日期" style="width: 154px"></Date-picker>
                            </i-col>
                        </row>
                        <row class="start_end ms-iBlock">
                            <label>结束周</label>
                            <i-col>
                                <Date-picker type="date" :value="end_date" @on-change="handleChangeEnd" placeholder="选择日期" style="width: 154px"></Date-picker>
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
                    <div class="ms-left"><span class="filterItem" v-for="item in selectedFilterItem">{{item}}<i class="delete" @click="removeFilter(item)"></i></span></div>
                </div>
            </div>
        </div>
        <explain></explain>
        <div class="ms-body">

        </div>

        <Modal v-model="showDialog" width="688px" :visible.sync="showDialog" title="渠道筛选" @on-ok="ok" @on-cancel="cancel">
            <div class="filterDialog">
                <div class="ms-clear">
                    <p class="ms-left filterItem" v-for="item in selectedFilterItem">{{item}} <i class="selectItem"></i></p>
                </div>

            </div>

        </Modal>
    </div>
</template>

<script>
    import explain from '../components/explain'
    export default {
        data(){
            return{
                showDialog:false,
                start_date:'',
                end_date:'',
                selectedFilterItem:['sdfsd','渠道平台','看好看的书']
            }
        },
        components:{
            explain
        },
        methods:{
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.showDialog = false;
            },
            handleChangeStart(date){
                this.start_date = date;
                console.log(this.start_date)
            },
            handleChangeEnd(date){
                this.end_date = date;
                console.log(this.end_date)
                console.log(this.selectedFilterItem)
            },
            removeFilter(item){
                this.selectedFilterItem = this.selectedFilterItem.filter((val)=> val !=item)
                console.log(this.selectedFilterItem)
            }
        }
    }
</script>

<style lang="less">
    .filterWarp{
        .filterBtn{
            .btn{
                display: inline-block;
                width: 134px;
                text-align: center;
                height: 36px;
                line-height: 36px;
                border-radius: 4px;
                color: #fff;
                cursor: pointer;
            }
            .def{
                background: #53a3ff;
            }
            .v{
                background: #7c7ce2;
            }
        }

        .currFilterItems{
            padding: 10px 38px;
            border-top: 1px solid #ebeef1;
            .item-label{
                margin-right: 10px;
            }
            .filterItem{
                border: 1px solid #cdd0dd;
                padding: 2px 4px;
                border-radius: 4px;
                margin-right: 10px;
                .delete{
                    background: url("../assets/img/delete.png")no-repeat;
                    width: 10px;
                    height: 10px;
                    display: inline-block;
                    cursor: pointer;
                    margin-left: 4px;
                }
            }
        }
    }

    .filterDialog{
        height: 261px;
        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width:8px;
            height: 8px;
        }
        &::-webkit-scrollbar-track-piece{
            background: #ebeff4;
            border-radius: 4px;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 5px;
            background-color: #bec9d7;
        }
        .filterItem{
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
            .selectItem{
                background: url("../assets/img/selected.png") no-repeat;
                width: 14px;
                height: 9px;
                display: none;
                position: absolute;
                right: 20px;
                top: 12px;
            }
            &.selected,&:hover{
                background: #ffffff;
                .selectItem{
                    display: inline-block;
                }
            }
        }
    }

</style>
