<template>
    <div class="header-warp">
        <div class="main-header">
            <div class="header-avator-con">
                <div class="user-dropdown-menu-con">
                    <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
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
    </div>
</template>

<script>
    export default {
        name: "headers",
        data(){
            return{
                userName: "richard",
            }
        },
    }
</script>

<style>

</style>
