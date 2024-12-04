<script setup lang="ts">
import BaseLayout from '@/layout/BaseLayout/index.vue';
import { ref } from 'vue';
import { theme } from 'ant-design-vue';
const data = ref<{ colorPrimary: string; borderRadius: number }>({
  colorPrimary: '',
  borderRadius: 0,
});
const { useToken } = theme;
const { token } = useToken();
data.value.colorPrimary = token.value.colorPrimary;
data.value.borderRadius = 20;
</script>

<template>
  <a-config-provider
    :theme="{
      algorithm: [theme.defaultAlgorithm],
      components: {
        Layout: {
          colorBgHeader: token.colorBgBase,
          colorText: token.colorText,
        },
      },
      token: {
        colorPrimary: data.colorPrimary,
        borderRadius: data.borderRadius,
      },
    }"
  >
    <base-layout />
  </a-config-provider>
</template>

<style scoped></style>
