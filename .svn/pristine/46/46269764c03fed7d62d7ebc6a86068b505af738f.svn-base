<template>
  <div>
    <div class="layout-content">
      <Row>
        <i-col span="3">
          <div class="left-menu" :style="{height: clientHeight}">
            <div class="title-logo" @click="changeMenu">
              <img src="../../../static/images/logo.png"/>
            </div>
            <Menu ref="menu" :activeName.sync="activeName" :class="menuitemClasses" active-name="4002" width="auto"
                  :theme="dark" accordion
                  @on-select="menuSelect" @test='menuSelect' :open-names="openName" @on-open-change="onOpenChange">
              <Submenu v-for="(menu, index) in menuArr" :name.sync="menu.resId" :key="index">
                <template v-if="menu.list.length<1">
                  <template slot="title">
                    <Icon :type="menu.icon"/>
                    <span>{{menu.resName}} </span>
                  </template>
                </template>
                <template v-else>
                  <template slot="title">
                    <Icon :type="menu.icon"/>
                    {{menu.resName}}
                  </template>
                  <MenuItem v-for="submenu in menu.list" :key="submenu.resId" :name="submenu.resId">
                    <span>{{submenu.resName}}</span>
                  </MenuItem>
                </template>
              </Submenu>
            </Menu>
          </div>
        </i-col>
        <i-col span="21">
          <center-container>
            <top-header/>
            <div class="tabs-bar">
              <Tabs type="card" @on-tab-remove="removeTab" @on-click="clickTab" :animated="false" :value="activeTab">
                <TabPane label="首页" name="/"></TabPane>
                <template v-for="(item,index) in routerStack">
                  <TabPane
                    :key="item.resId"
                    :label="item.resName"
                    closable
                    :name="item.resUrl"
                    v-if="item.show"
                  />
                </template>
              </Tabs>
            </div>
            <right-content/>
          </center-container>
        </i-col>
      </Row>
    </div>

  </div>
</template>

<script>
  import {userMenuList} from "../../../apis";
  import CenterContainer from "./views/center-container/index";
  import TopHeader from "./views/top-header/index";
  import RightContent from "./views/center-container/right-content";

  export default {
    name: "index",
    components: {RightContent, TopHeader, CenterContainer},
    data() {
      return {
        menuArr: [],
        isCollapsed: false,
        activeTab: null,
        dark: "dark",
        activeName: undefined,
        openName: undefined,
        routerStack: [],
        menuMap: new Object()
      };
    },
    computed: {
      clientHeight: function () {
        return $(window).height() + 'px';
      },
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      onOpenChange(data) {
        this.openName = data;
      },
      changeMenu() {
        if (this.routerStack.length > 0) {
          this.activeName = this.routerStack[this.routerStack.length - 1].resId;
          this.openName = [this.menuMap['_' + this.activeName]];
        }
        else {
          this.activeName = -1;
          this.openName = [];
        }
        this.$nextTick(() => this.test());
      },
      test() {
        this.$refs.menu.updateOpened();
        this.$refs.menu.updateActiveName()
      },
      menuSelect: function (name) {
        this.activeName = name;
        var tab = this.getTab(name);
        if (tab == null) {
          var mi = this.getMenuItem(name);
          mi["show"] = true;
          this.routerStack.push(mi)
        } else {
          tab.show = true;
          this.removeStack(tab.resUrl);
          this.routerStack.push(tab);
        }
        var qqq = this.getMenuItem(name);
        this.$router.push(qqq.resUrl);
        this.activeTab = qqq.resUrl;
        this.changeMenu()
      },
      getTab: function (name) {
        for (var i = 0; i < this.routerStack.length; i++) {
          if (this.routerStack[i].resId == name) return this.routerStack[i];
        }
        return null;//没有找到
      },
      removeStack(name) {
        if (name) {
          for (let i = 0; i < this.routerStack.length; i++) {
            if (this.routerStack[i].resUrl === name) {
              this.routerStack.splice(i, 1);
              break
            }
          }
        }
        else if (this.routerStack.length > 0) {
          this.routerStack.splice(this.routerStack.length - 1, 1);
        }
      },
      getStack(name) {
        if (name) {
          for (let i = 0; i < this.routerStack.length; i++) {
            if (this.routerStack[i].resUrl === name) {
              return this.routerStack[i];
            }
          }
        }
      },
      removeTab(name) {
        this.removeStack(name);
        this.$bus.$emit(name, true);
        if (this.routerStack.length === 0) {
          this.$router.push("/");
        } else {
          this.$router.push(this.routerStack[this.routerStack.length - 1].resUrl);
        }
        this.changeMenu();
        if (this.routerStack.length > 0)
          this.activeTab = this.routerStack[this.routerStack.length - 1].resUrl;
      },
      clickTab: function (name) {
        this.$router.push(name);
        let temp = this.getStack(name);
        this.removeStack(name);
        if (temp) {
          this.routerStack.push(temp)
        }
        this.activeTab = name;
        this.changeMenu();
      },
      getMenuItem: function (name) {
        for (var sm = 0; sm < this.menuArr.length; sm++) {
          for (var mi = 0; mi < this.menuArr[sm].list.length; mi++) {
            if (this.menuArr[sm].list[mi].resId == name)
              return this.menuArr[sm].list[mi];
          }
        }
        return {};//这个应该不可能发生
      },
    },
    created() {
      if (this.routerStack.length == 0) {
        this.$router.push("/")
      };
      userMenuList().then((res) => {
        this.menuArr = res;
        for (let menu of res) {
          if (menu.list) {
            for (let child of menu.list) {
              this.menuMap['_' + child.resId] = menu.resId
            }
          }
        }
      });
    },
  }
</script>

<style scoped>
  .index-route {
    width: 60%;
    display: inline-block;
    color: rgba(255, 255, 255, .7) !important;
  }

  .title-logo {
    text-align: center;
    padding-top: 15px;
  }

  .left-menu {
    position: relative;
    z-index: 10;
    background: #434856;
    overflow-y: auto;
  }

  .left-menu ul {
    background: #434856;
  }

  .left-menu::-webkit-scrollbar {
    width: 6px;
  }

  .ivu-menu:after {
    display: none;
  }

  .left-menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,
  .left-menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
    background: #434856 !important;
  }

  .left-menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:before {
    content: "";
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 20px;
    left: 30px;
  }

  .left-menu .ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
    background: #434856;
  }

  .layout-con {
    height: 100%;
    width: 100%;
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    /*        width: 69px; */
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .tabs-bar {
    margin-top: 10px;
    height: 40px !important;
  }
</style>
