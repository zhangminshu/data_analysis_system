<template>
    <div class="header-warp">
        <div class="main-header ms-clear">
            <div class="selectGame">
                <i-form>
                    <Form-item>
                        <i-select placeholder="请选择所在地" class="" :model.sync="selectedGame">
                            <i-option value="beijing">北京市</i-option>
                            <i-option value="shanghai">上海市</i-option>
                            <i-option value="shenzhen">深圳市</i-option>
                        </i-select>
                    </Form-item>
                </i-form>
            </div>
            <div class="btnAddGame" @click="showDialog = true">
                <span class="icon-add"></span>
            </div>

            <div class="user-dropdown-menu-con ms-right">
                <div class="ms-clear">
                    <!--<div class="ivu-avatar ms-left"></div>-->
                    <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon ms-right">
                        <Dropdown transfer trigger="click">
                            <a href="javascript:void(0)">
                                <span class="main-user-name">{{ userName }}</span>
                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem name="ownSpace">个人中心</DropdownItem>
                                <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Row>
                </div>

            </div>
        </div>

        <Modal v-model="showDialog" width="688px" :visible.sync="showDialog" title="游戏添加" @on-ok="ok" @on-cancel="cancel">
            <div class="selectGameDialog">
                <Transfer
                        :data="appList"
                        :target-keys="myAppList"
                        :list-style="listStyle"
                        :titles="tableTitles"
                        filterable
                        @on-change="handleChange" >

                </Transfer>
            </div>

        </Modal>
    </div>
</template>

<script>
    const successCode = 10000;
    export default {
        data() {
            return {
                selectedGame:'',
                showDialog:false,
                userName: "richard",
                tableTitles :['SDK游戏列表','投放系统游戏列表'],
                gameList:[],
                appList:[],
                myAppList:[],
                listStyle: {
                    width: '261px',
                    height: '424px',
                    'text-align':'left'
                }
            }
        },
        created(){
            this.API.getAppList().then((res)=>{
                if(res.code === successCode){
                    this.appList = res.data.app_list.map((item)=>{
                        item.key = item.app_id;
                        item.label = item.app_name;
                        return item
                    });
                    this.myAppList = res.data.my_app_list.map((item)=>{
                        return item.app_id;
                    });
                }
            })
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
                console.log(this.selectedGame)
            },
            cancel () {
                this.showDialog = false;
            },
            handleChange (newTargetKeys) {
                this.myAppList = newTargetKeys;
                console.log(newTargetKeys)
            }
        }
    }
</script>

<style lang="less">
    .selectGame{
        width: 238px;
        display: inline-block;
        margin-left: 51px;
    }
    .btnAddGame{
        width: 32px;
        height: 32px;
        border: 1px solid #c67692;
        line-height: 32px;
        text-align: center;
        border-radius: 4px;
        margin-left: 12px;
        cursor: pointer;
        display: inline-block;
        top: 3px;
        position: relative;
        .icon-add{
            background: url("../assets/img/add.png")no-repeat;
            width: 11px;
            height: 11px;
            display: inline-block;
        }
    }
    .selectGameDialog{
        height: 424px;
        margin: 0 auto;
        text-align: center;
    }
</style>
