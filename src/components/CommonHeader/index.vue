<script setup lang="ts">
import { defineComponent, h, nextTick, ref } from 'vue';
import {
  GithubOutlined,
  RocketOutlined,
  SettingOutlined,
  TeamOutlined,
  CodeOutlined,
  CommentOutlined
} from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const current = ref<string[]>(['/system']);
const items = ref<MenuProps['items']>([
  {
    key: '/system',
    icon: () => h(SettingOutlined),
    label: '系统管理',
    title: '系统管理',
  },
  {
    key: '/code',
    icon: () => h(CodeOutlined),
    label: '代码管理',
    title: '代码管理',
  },
  {
    key: '/comment',
    icon: () => h(CommentOutlined),
    label: '评论管理',
    title: '评论管理',
  },
  {
    key: '/user',
    icon: () => h(TeamOutlined),
    label: '用户管理',
    title: '用户管理',
  },
  {
    key: 'client',
    icon: () => h(RocketOutlined),
    label: '客户端',
    title: '点击前往客户端应用',
  },
  {
    key: 'sourcecode',
    icon: () => h(GithubOutlined),
    label: h(
      'a',
      {
        href: 'https://github.com/huliua/CodeShareAdmin',
        alt: 'Github仓库',
        target: '_blank',
      },
      '源码',
    ),
    title: '源码',
  },
]);

const handleClick = function ({ key }: { key: string}) {
  const preKey: string = current.value[0];
  if (key.startsWith('/')) {
    router.push(key);
  }
  // 重置当前选中项
  nextTick(() => {
    if (!key.startsWith('/')) {
      current.value[0] = preKey;
    }
  });
};

defineComponent({
  name: 'CommonHeader',
});
</script>

<template>
  <div id="common-header">
    <a-row :align="'middle'" :wrap="false">
      <a-col flex="300px" class="title-bar">
        <img src="@/assets/logo.svg" class="logo" alt="logo" />
        CodeShare代码分享平台
      </a-col>
      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="handleClick($event)"
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

#common-header .logo {
  width: 40px;
}

#common-header .title-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
</style>
