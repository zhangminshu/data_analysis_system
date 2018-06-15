<template>
    <div class="side-menu" >
        <div class="ms-logo"><i class="icon-project"></i>投放数据分析系统</div>
        <i-col class="side-scroll" :style="{height: scrollHeight + 'px' }">
            <Menu ref="sideMenu" :active-name="activeName" :open-names="[openName]"    class="ivu-menu-default" width="auto" @on-select="changeSide">
                <Submenu :name="'m'+(index+1)" :key="index" v-for="(item,index) in sideMenuList">
                    <template slot="title">
                        <Icon  class="sideIcon" :class="'ivu-icon-'+index"></Icon>
                        {{item.name}}
                    </template>
                        <router-link v-for="(subItem,subIndex) in item.list" :key="subIndex" :to="{name: subItem.listName}">
                            <Menu-item   :name="'m'+(index+1)+(subIndex+1)" :key="subItem.id">{{subItem.name}}</Menu-item>
                        </router-link>
                </Submenu>

            </Menu>
        </i-col>

    </div>
</template>

<script>
    import api from '@/api'
    import {mapState} from 'vuex'
    export default {
        name: "side-menu",
        data(){
            return{
                scrollHeight:'',
                sideMenuList:[]
            }
        },
        computed:{
            ...mapState([
                'openName',
                'activeName'
            ])
        },
        created() {
            let sideHeight = document.body.clientHeight;
            this.scrollHeight = sideHeight - 78;
            api.getSideMenu().then((response)=>{
                let res = response,self = this;
                if(res.code === 10000){
                    self.sideMenuList = res.data;
                }
            })
        },
        methods:{
            changeSide(activeItem){
                this.$store.commit('updateActiveNames',activeItem)
            }
        },
        updated () {
            this.$nextTick(() => {
                if (this.$refs.sideMenu) {
                    this.$refs.sideMenu.updateOpened();
                    this.$refs.sideMenu.updateActiveName();
                }
            });
        }
    }
</script>

<style lang="less">
    .ms-logo {
        height: 78px;
        line-height: 78px;
        background: #2f3236;
        color: #cdcccd;
        font-style: italic;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        .icon-project{
            background: url("../assets/img/prpject_icon.png") no-repeat;
            width: 24px;
            height: 20px;
            display: inline-block;
            position: relative;
            top: 4px;
            margin-right: 6px;
        }
    }
    .side-menu{
        a{color: #ffffff}
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
