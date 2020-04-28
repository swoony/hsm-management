<template>
  <div class="top-header">
    <div class="t-l"></div>
    <div class="t-r">
      <div>车辆监控平台</div>
      <Icon type="ios-notifications" title="通知警告"/>
      <label class="account">
        <Poptip>
          <a><Icon type="md-person"/></a>
          <div slot="title">
            <a @click="modify">修改密码</a>
          </div>
          <div slot="content">
            <a>个人资料</a>
          </div>
        </Poptip>
        <!--修改密码-->
        <modify-passwd ref="modify"></modify-passwd>
      </label>
      <Icon type="ios-power" title="退出登录" @click="loginOut"/>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'top-header',
    data() {
      return {

      }
    },
    methods: {
      modify(){
        this.$refs.modify.open();
      },
      loginOut() {
        this.$Modal.confirm({
          title: '温馨提示',
          width: 300,
          content: '<p>你确定要退出吗？</p>',
          onOk: () => {
            window.sessionStorage.clear();
            this.$router.push({path: '/login'});
          }
        });
      }
    },
    components: {
    },
  }
</script>

<style scoped>
  .top-header {
    position: relative;
    z-index: 10;
    background: #006CB7;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .top-header .t-l {
    background: #434856;
    height: 50px;
    line-height: 50px;
  }

  .top-header .t-r > div {
    position: absolute;
    left: 10px;
    line-height: 50px;
    top: 0;
    color: #fff;
    font-size: 16px;
  }

  .t-l span {
    color: #fff;
    font-size: 18px;
    font-family: Arial;
  }

  .t-r i {
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    padding-right: 14px;
  }

  .account {
    text-align: center;
    display: inline-block;
    position: absolute;
    top: 13px;
    right: 82px;
  }

</style>
