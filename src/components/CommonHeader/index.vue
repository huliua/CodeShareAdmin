<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { type MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { useMenuStore } from '@/stores/menu';
import Moon from '@/components/icons/Moon.vue';
import Sun from '@/components/icons/Sun.vue';
import { useAppStore, Theme } from '@/stores/app';

const appStore = useAppStore();
const menuStore = useMenuStore();
const router = useRouter();

const handleCollapseClick = function () {
  menuStore.setCollapsed(!menuStore.collapsed);
};
const items = ref<MenuProps['items']>(menuStore.getHeaderMenu());
const handleClick = function ({ key }: { key: string }) {
  router.push(key);
};
defineComponent({
  name: 'CommonHeader',
});
</script>

<template>
  <div id="common-header">
    <a-row :align="'middle'" :wrap="false">
      <a-col flex="50px">
        <div v-show="menuStore.collapsed" class="collapse-icon" style="font-size: 24px">
          <MenuUnfoldOutlined @click="handleCollapseClick" />
        </div>
        <div v-show="!menuStore.collapsed" class="collapse-icon" style="font-size: 24px">
          <MenuFoldOutlined @click="handleCollapseClick" />
        </div>
      </a-col>
      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="menuStore.headerSelectedKeys"
          mode="horizontal"
          :items="items"
          @click="handleClick($event)"
        />
      </a-col>
      <a-col flex="100px" style="display: flex; justify-content: center">
        <Moon
          @click="appStore.changeTheme()"
          v-show="appStore.theme === Theme.Light"
          style="width: 20px; height: 20px; fill: #000"
        />
        <Sun
          @click="appStore.changeTheme()"
          v-show="appStore.theme === Theme.Dark"
          style="width: 20px; height: 20px; fill: #fff"
        />
      </a-col>
      <a-col flex="100px">
        <a-button type="primary">登录</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
#common-header {
  height: 100%;
}

.collapse-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
