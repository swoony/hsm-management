<template>
  <div class="right-content">
    <main class="main" :style="{height: clientHeight}">
      <!--{{clientHeight}}-->
      <!--<div class="main-breadcrumb" v-if="!isInitPage">
        <Breadcrumb>
          <BreadcrumbItem>车辆监控</BreadcrumbItem>
          <BreadcrumbItem>{{breadcrumbName}}</BreadcrumbItem>
        </Breadcrumb>
      </div>-->
      <div class="main-wrap" :class="!isInitPage ? 'main-wrap-pad' : ''">
        <div class="main-wrap-scroll">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
            <!-- 这里是需要缓存的视图组件 -->
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive">
            <!-- 这里是不被缓存的视图组件 -->
          </router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "right-content",
    data() {
      return {
        isInitPage: false,
        breadcrumbName: ''
      }
    },
    computed: {
      ...mapGetters(['getKeepAliveLists']),
      clientHeight: function () {
        return ($(window).height()-105) + 'px';
      },
    },
    watch: {
      $route() {
        this.watchRouter();
      }
    },
    methods: {
      watchRouter() {
        const {history} = this.$router;
        const {current} = history;
        const {name, path} = current;
        this.isInitPage = path === '/home/' || path === '/home';
        this.breadcrumbName = name;
      }
    },
    created() {
      this.watchRouter()
    }
  }
</script>

<style scoped>
  .main {
    padding-left: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-top: 20px;
  }

  .main-breadcrumb {
    padding: 10px;
    background: #fff;
    border-bottom: 1px solid #ddd;
  }
/*  .main-wrap-scroll {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
  }*/
</style>
