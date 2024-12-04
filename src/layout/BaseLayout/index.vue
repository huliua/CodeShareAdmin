<script setup lang="ts">
import { defineComponent } from 'vue';
import CommonHeader from '@/components/CommonHeader/index.vue';
import CommonSider from '@/components/CommonSider/index.vue';
import { useMenuStore } from '@/stores/menu';
import { useRouter } from 'vue-router';

const router = useRouter();
const menuStore = useMenuStore();
defineComponent({
  name: 'BaseLayout',
});
const currentYear = new Date().getFullYear();
const developer = 'huliua';
const link = 'https://github.com/huliua';

// 监听路由变化，更新当前菜单选中状态
router.afterEach((to, from) => {
  const prePath = from.path;
  if (to.path == '/client' || to.path == '/sourcecode') {
    router.push(prePath);
    return;
  }
  const pathArr = to.path.split('/');
  menuStore.setHeaderSelectedKeys(['/' + pathArr[1]]);
  menuStore.setSideSelectedKeys([to.path]);
});
</script>

<template>
  <div id="base-layout">
    <a-layout>
      <a-layout-sider
        class="side"
        collapsible
        v-model:collapsed="menuStore.collapsed"
        width="250px"
        :theme="'dark'"
        style="background: #001529"
        :trigger="null"
      >
        <common-sider />
      </a-layout-sider>
      <a-layout class="main-layout">
        <a-layout-header class="header">
          <common-header />
        </a-layout-header>
        <a-layout-content class="content">
          <router-view />
        </a-layout-content>
        <a-layout-footer class="footer">
          CodeShare代码分享平台 by
          <a :href="link" target="_blank">{{ developer }}</a> @{{ currentYear }}
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped>
#base-layout {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.footer {
  height: 30px;
  padding: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 30px;
}

.header {
  padding: 0;
  height: 64px;
}

.content {
  height: calc(100vh - 64px - 30px);
  overflow: auto;
}

#base-layout .side {
  height: calc(100vh - 30px);
  overflow: auto;
}
</style>
