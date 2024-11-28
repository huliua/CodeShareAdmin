<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import CommonHeader from '@/components/CommonHeader/index.vue';
import CommonSider from '@/components/CommonSider/index.vue';

defineComponent({
  name: 'BaseLayout',
});
const currentYear = new Date().getFullYear();
const developer = 'huliua';
const link = 'https://github.com/huliua';

const collapsed = ref(false);
</script>

<template>
  <div id="base-layout">
    <a-layout>
      <a-layout-sider
        class="side"
        collapsible
        v-model:collapsed="collapsed"
        width="250px"
        :trigger="null"
      >
        <common-sider v-model:is-collapse="collapsed" />
      </a-layout-sider>
      <a-layout class="main-layout">
        <a-layout-header class="header">
          <common-header v-model:is-collapse="collapsed" />
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
  background-color: #f0f2f5;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 30px;
}

.header {
  background: white;
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
