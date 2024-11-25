<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'BaseLayout',
})
</script>

<template>
  <div id="base-layout">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-sider>Sider</a-layout-sider>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped></style>
