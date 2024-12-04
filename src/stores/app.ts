import { defineStore } from 'pinia';
import { ref } from 'vue';

// 定义枚举
export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export const useAppStore = defineStore('app', () => {
  // 主题
  const theme = ref<string>(Theme.Light);
  const colorPrimary = ref<string>('#1890ff');
  const borderRadius = ref<string>('6px');

  const changeTheme = () => {
    console.log('start to change Theme....');
    theme.value = theme.value === Theme.Light ? Theme.Dark : Theme.Light;
  };
  return {
    theme,
    colorPrimary,
    borderRadius,
    changeTheme,
  };
});
