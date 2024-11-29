<script setup lang="ts">
import { defineComponent } from 'vue';
import SvgIconLight from '@/components/icons/SvgIconLight.vue';
import OnlyIcon from '@/components/icons/OnlyIcon.vue';
import { useMenuStore } from '@/stores/menu';
import { useRouter } from 'vue-router';

const router = useRouter();
const menuStore = useMenuStore();
defineComponent({
  name: 'CommonSider',
});

const handleMenuClick = ({ key }: { key: string }) => {
  router.push(key);
};
</script>

<template>
  <div id="common-sider">
    <a-flex gap="middle" vertical justify="center" align="center">
      <a-flex :vertical="true" style="width: 100%">
        <div class="title">
          <svg-icon-light class="logo" v-show="!menuStore.collapsed" />
          <only-icon class="logo collapse" v-show="menuStore.collapsed" />
        </div>
        <div class="menu">
          <a-menu
            v-model:selectedKeys="menuStore.sideSelectedKeys"
            mode="inline"
            theme="dark"
            :items="menuStore.getSideMenu()"
            @click="handleMenuClick"
          ></a-menu>
        </div>
      </a-flex>
    </a-flex>
  </div>
</template>

<style scoped>
#common-sider {
  height: 100%;
  width: 100%;
  color: white;
}

.title {
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
}

.logo {
  width: 78%;
  height: 100%;
}

.logo.collapse {
  width: 50%;
}
</style>
