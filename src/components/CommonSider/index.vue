<script setup lang="ts">
import { defineComponent } from 'vue';
import SvgIcon from '@/components/icons/SvgIconDark.vue';
import SvgIconLight from '@/components/icons/SvgIconLight.vue';
import OnlyIcon from '@/components/icons/OnlyIcon.vue';
const { isCollapse } = defineProps({
  isCollapse: Boolean,
});
defineComponent({
  name: 'CommonSider',
});
</script>

<template>
  <div id="common-sider">
    <a-flex gap="middle" vertical justify="center" align="center">
      <a-flex :vertical="true" style="width: 100%">
        <div class="title">
          <svg-icon-light class="logo" v-show="!isCollapse" />
          <only-icon class="logo collapse" v-show="isCollapse" />
        </div>
        <div class="menu">menu</div>
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
