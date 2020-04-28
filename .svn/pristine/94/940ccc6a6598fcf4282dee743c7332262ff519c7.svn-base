<template>
  <div class="login-box">
    <div class="login-l">
      <img src="../../../static/images/login/left.png"/>
    </div>
    <div class="login-r">
      <div class="login-container">
        <div class="login-logo">
          <img src="../../../static/images/login/logo.png"/>
        </div>
        <div class="login-text">车机运营监控平台</div>
        <div class="login-account">
          <Input v-model="login.loginAccount" placeholder="登录名"/>
        </div>
        <div class="login-psw">
          <Input type="password" v-model="login.userPassword" placeholder="登录密码"/>
        </div>
        <div class="login-btn">
          <Button type="primary" @click="toLogin" style="width: 100%;">登录</Button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import {mapActions, mapGetters, mapState} from 'vuex'
  import {loginApi} from "../../../apis";

  export default {
    name: 'login',
    data() {
      return {
        login: {
          loginAccount: '',
          userPassword: ''
        }
      };
    },
    methods: {
      toLogin() {
        var hash = sha256.create();
        hash.update(this.login.userPassword);
        let userPassword = hash.hex();
        loginApi({
          classType: 4,
          loginMode: 0,
          loginAccount: this.login.loginAccount,
          userPassword: userPassword,
          resUrl: '/sv-login/sys/login'
        }).then(res => {
          window.sessionStorage.setItem('userInfo', JSON.stringify(res.data));
          window.sessionStorage.setItem('x-access-token', res.data.userToken);
          this.$router.push('/');
        })
      },
      bindEnterKey() {
        let that = this;
        document.onkeypress = function (e) {
          var keycode = document.all ? event.keyCode : e.which;
          if (keycode == 13) {
            that.toLogin();// 登录方法名
            return false;
          }
        }
      },
    },
    mounted() {
      this.bindEnterKey();
      this.$Modal.remove();
    },
    created() {
//      this.$router.push({path: '/login'});
    },
    beforeDestroy() {
//      window.Bus.$off('yolo_sys_out_emit');
    },
    destroyed(){
      document.onkeypress = undefined

    },
    components: {}
  };
</script>

<style scoped="scoped">
  .login-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #242E42;
  }

  .login-l {
    width: 60%;
    position: absolute;
    top: 0;
    background: #242e42;
    height: 100%;
    left: 0;
  }

  .login-l img {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .login-r {
    width: 40%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: #242E42;
  }

  .login-container {
    text-align: center;
    width: 320px;
    height: 320px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -160px;
    margin-left: -160px;
  }

  .login-text {
    font-size: 16px;
    font-weight: bold;
    color: #006CB7;
    margin-top: 10px;
  }

  .login-account {
    margin-top: 1rem;
  }

  .login-psw {
    margin-top: 1rem;
  }

  .login-btn {
    margin-top: 1rem;
  }

  .forget-psw {
    display: flex;
    margin-top: 1rem;
    justify-content: flex-end;
  }
  .login-logo img{
    width: 70px;
  }
</style>
