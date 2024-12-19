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

import { theme } from 'ant-design-vue';
import { useAppStore, Theme } from '@/stores/app';
import { computed } from 'vue';
const appStore = useAppStore();

const { useToken } = theme;
const { token } = useToken();

const { darkAlgorithm, defaultAlgorithm } = theme;

const myTheme = computed(() => {
  return {
    algorithm: [appStore.theme === Theme.Dark ? darkAlgorithm : defaultAlgorithm],
    components: {
      Layout: {
        colorBgHeader: token.value.colorBgBase,
        colorText: token.value.colorText,
      },
    },
    token: {
      colorPrimary: appStore.colorPrimary,
      borderRadius: appStore.borderRadius,
    },
  };
});
</script>

<template>
  <a-config-provider :theme="myTheme">
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
            <a-config-provider
              :theme="{
                token: {
                  motionDurationSlow: '0s',
                },
                components: {
                  Menu: {
                    colorItemBg: token.colorBgBase,
                    motionDurationSlow: '0s',
                  },
                },
              }"
            >
              <common-header />
            </a-config-provider>
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
  </a-config-provider>
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

#base-layout .main-layout {
  transition: background-color 0.1s cubic-bezier(0, 0.57, 0.47, 0.49);
}
</style>
