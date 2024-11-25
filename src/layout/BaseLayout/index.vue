<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'BaseLayout',
})
const currentYear = new Date().getFullYear()
const developer = 'huliua'
const link = 'https://github.com/huliua'
</script>

<template>
  <div id="base-layout">
    <a-layout>
      <a-layout-header class="header">Header</a-layout-header>
      <a-layout>
        <a-layout-sider class="side">Sider</a-layout-sider>
        <a-layout-content class="content">Content</a-layout-content>
      </a-layout>
      <a-layout-footer class="footer">
        CodeShare代码分享平台 by
        <a :href="link" target="_blank">{{ developer }}</a> @{{ currentYear }}
      </a-layout-footer>
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
</style>
