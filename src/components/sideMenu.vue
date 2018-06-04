<template>
    <div class="side-menu" >
        <div class="ms-logo">投放数据分析系统</div>
        <i-col class="side-scroll">


            <Menu active-key="1" class="ivu-menu-default" width="auto">
                <Submenu :key="index" :name="index" v-for="(item,index) in sideMenuList">
                    <template slot="title">
                        <Icon :type="index" class="sideIcon"></Icon>
                        {{item.name}}
                    </template>
                    <Menu-item v-for="(subItem,sunIndex) in item.list" :key="index-sunIndex" :name="index+'_'+sunIndex">{{subItem.name}}</Menu-item>
                </Submenu>

            </Menu>
        </i-col>
    </div>
</template>

<script>
    import api from '@/api'
    export default {
        name: "side-menu",
        data(){
            return{
                sideMenuList:[]
            }
        },
        created() {
            api.getSideMenu().then((response)=>{
                let res = response.data,self = this;
                if(res.code === 10000){
                    self.sideMenuList = res.data;
                }
            })
        },
        methods:{

        }
    }
</script>

<style lang="less">
    .side-menu{
        .side-scroll{
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            &::-webkit-scrollbar {
                width:10px;
                height:10px;
            }
            &::-webkit-scrollbar-track-piece{
                /*background: #526aa7;*/
            }
            &::-webkit-scrollbar-track{
                /*display: none;*/
            }
            &::-webkit-scrollbar-thumb{
                border-radius: 5px!important;
                background-color: #526aa7;
            }
        }
        .ivu-menu-item{
            margin: 10px 0 10px 30px;
            height: 36px;
            border-radius: 18px 0 0 18px;
            line-height: 36px;
            padding: 0;
            &.ivu-menu-item-selected{
                background: #526aa7;
                color: #ffffff!important;
                border:none!important;
            }
            &:hover{
                background-color:#354b83;
            }
        }
        .sideIcon{
            width: 17px;
            height: 17px;
            position: relative;
            top: 3px;
            background-size: 100% 100%;
        }
        .ivu-icon-0{
            background: url("../assets/img/1.png");
        }
        .ivu-icon-1{
            background: url("../assets/img/2.png");
        }
        .ivu-icon-2{
            background: url("../assets/img/3.png");
        }
    }

</style>
