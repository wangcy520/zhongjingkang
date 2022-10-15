<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu"
             :default-active="onRoutes"
             :collapse="collapse"
             text-color="#242f42"
             active-text-color="#409eff"
             unique-opened
             router>
      <template v-for="item in menuList">
        <template v-if="item.childrenList.length > 0 && item.code == 'view'">
          <el-submenu :index="item.path"
                      :key="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.childrenList">
              <!-- <el-submenu v-if="subItem.childrenList.length > 0 && item.code == 'view'"
                          :index="subItem.path"
                          :key="subItem.path">
                <template slot="title">{{ subItem.name }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.childrenList"
                              :key="i"
                              :index="threeItem.path">{{ threeItem.name }}</el-menu-item>
              </el-submenu> -->
              <el-menu-item :index="subItem.path"
                            :key="subItem.path">{{ subItem.name }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path"
                        :key="item.path"
                        >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      collapse: false,
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '')
    },
    ...mapGetters(['menuList']),
  },
  methods: {},
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', (msg) => {
      this.collapse = msg
      bus.$emit('collapse-content', msg)
    })
  },
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
