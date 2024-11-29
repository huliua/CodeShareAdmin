import { defineStore } from 'pinia';
import { h, ref } from 'vue';
import {
  CodeOutlined,
  CommentOutlined,
  GithubOutlined,
  RocketOutlined,
  SettingOutlined,
  TeamOutlined,
  AuditOutlined,
  IdcardOutlined,
  PartitionOutlined,
  UserOutlined,
  CrownOutlined,
  CloudOutlined,
  LinkOutlined,
  MessageOutlined,
  DashboardOutlined,
} from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';

export const useMenuStore = defineStore('menu', () => {
  const collapsed = ref(false);
  const headerSelectedKeys = ref<string[]>(['/']);
  const sideSelectedKeys = ref<string[]>(['/']);

  // 系统菜单
  const systemMenu: MenuProps['items'] = [
    {
      key: '/system/dashboard',
      icon: () => h(DashboardOutlined),
      label: '仪表盘',
      title: '仪表盘',
    },
    {
      key: '/system/role',
      icon: () => h(IdcardOutlined),
      label: '角色管理',
      title: '角色管理',
    },
    {
      key: '/system/permission',
      icon: () => h(AuditOutlined),
      label: '权限管理',
      title: '权限管理',
    },
    {
      key: '/system/dict',
      icon: () => h(PartitionOutlined),
      label: '字典管理',
      title: '字典管理',
    },
  ];

  const userMenu: MenuProps['items'] = [
    {
      key: '/user/list',
      icon: () => h(UserOutlined),
      label: '用户管理',
      title: '用户管理',
    },
    {
      key: '/user/online',
      icon: () => h(LinkOutlined),
      label: '在线用户',
      title: '在线用户',
    },
    {
      key: '/user/vip',
      icon: () => h(CrownOutlined),
      label: '会员管理',
      title: '会员管理',
    },
  ];
  const codeMenu: MenuProps['items'] = [
    {
      key: '/code/list',
      icon: () => h(CloudOutlined),
      label: '代码仓库',
      title: '代码仓库',
    },
  ];
  const commentMenu: MenuProps['items'] = [
    {
      key: '/comment/list',
      icon: () => h(MessageOutlined),
      label: '评论列表',
      title: '评论列表',
    },
  ];

  /**
   * 获取头部菜单
   */
  const getHeaderMenu = (): MenuProps['items'] => {
    return [
      {
        key: '/system',
        icon: () => h(SettingOutlined),
        label: '系统管理',
        title: '系统管理',
      },
      {
        key: '/user',
        icon: () => h(TeamOutlined),
        label: '用户管理',
        title: '用户管理',
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
        key: '/client',
        icon: () => h(RocketOutlined),
        label: '客户端',
        title: '点击前往客户端应用',
      },
      {
        key: '/sourcecode',
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
    ];
  };

  /**
   * 获取侧边菜单
   */
  const getSideMenu = (): MenuProps['items'] => {
    switch (headerSelectedKeys.value[0]) {
      case '/system':
        return systemMenu;
      case '/user':
        return userMenu;
      case '/code':
        return codeMenu;
      case '/comment':
        return commentMenu;
      default:
        return systemMenu;
    }
  };

  /**
   * 设置菜单是否折叠
   * @param value 菜单是否折叠
   */
  function setCollapsed(value: boolean) {
    collapsed.value = value;
  }

  /**
   * 设置头部菜单的路由
   * @param value 路由路径
   */
  function setHeaderSelectedKeys(value: string[]) {
    headerSelectedKeys.value = value;
  }

  function setSideSelectedKeys(value: string[]) {
    sideSelectedKeys.value = value;
  }

  return {
    collapsed,
    headerSelectedKeys,
    sideSelectedKeys,
    getHeaderMenu,
    getSideMenu,
    setCollapsed,
    setHeaderSelectedKeys,
    setSideSelectedKeys,
  };
});
