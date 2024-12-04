<script setup lang="ts">
import BaseLayout from '@/layout/BaseLayout/index.vue';
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
    <base-layout />
  </a-config-provider>
</template>

<style scoped></style>
