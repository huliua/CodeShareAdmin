<script setup lang="ts">
import { defineComponent, type Ref, ref } from 'vue';
import {
  DatabaseOutlined,
  FireOutlined,
  LineChartOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';

// 定义一个枚举类
enum DisplayType {
  visits = 'visits',
  users = 'users',
  online = 'online',
  code = 'code',
}

const displayType: Ref<DisplayType> = ref(DisplayType.visits);
const option = {
  tooltip: {
    show: true,
  },
  axisPointer: {
    show: true,
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 100,
    },
  ],
  xAxis: {
    type: 'category',
    scale: true,
    boundaryGap: false,
    data: [
      '2024-12-01',
      '2024-12-02',
      '2024-12-03',
      '2024-12-04',
      '2024-12-05',
      '2024-12-06',
      '2024-12-07',
      '2024-12-08',
      '2024-12-09',
      '2024-12-10',
      '2024-12-11',
      '2024-12-12',
      '2024-12-13',
      '2024-12-14',
      '2024-12-15',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [4820, 5932, 5901, 4934, 1290, 8330, 7320, 820, 932, 901, 934, 1290, 1330, 1320, 9999],
      type: 'line',
    },
  ],
};

const username = ref('龙傲天');
// 今天日期
const date = '2024年12月24日';
// 农历日期
const lunar = '辛丑年腊月初一';
// 今天星期
const week = ['日', '一', '二', '三', '四', '五', '六'][1];
defineComponent({
  name: 'DashboardPage',
});
</script>

<template>
  <div id="dashboard">
    <a-row>
      <a-col :span="24" class="welcome-header">
        <span class="username">{{ username }}</span>
        <span class="other-info">您好！今天是{{ date }}，农历{{ lunar }}，星期{{ week }}</span>
      </a-col>
    </a-row>
    <a-row :gutter="20" justify="space-around">
      <a-col :span="6">
        <a-card hoverable style="text-align: center" @click="displayType = DisplayType.visits">
          <a-row :gutter="12">
            <a-col :span="12">
              <FireOutlined class="data-prefix-icon" />
            </a-col>
            <a-col :span="12">
              <a-statistic title="访问量" :value="1128"></a-statistic>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card hoverable style="text-align: center" @click="displayType = DisplayType.users">
          <a-row :gutter="12">
            <a-col :span="12">
              <UserOutlined class="data-prefix-icon" />
            </a-col>
            <a-col :span="12">
              <a-statistic title="用户数" :value="1128"></a-statistic>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card hoverable style="text-align: center" @click="displayType = DisplayType.online">
          <a-row :gutter="12">
            <a-col :span="12">
              <LineChartOutlined class="data-prefix-icon" />
            </a-col>
            <a-col :span="12">
              <a-statistic title="在线人数" :value="1128"></a-statistic>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card hoverable style="text-align: center" @click="displayType = DisplayType.code">
          <a-row :gutter="12">
            <a-col :span="12">
              <DatabaseOutlined class="data-prefix-icon" />
            </a-col>
            <a-col :span="12">
              <a-statistic title="代码量" :value="1128"></a-statistic>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>

    <a-row id="charts">
      <v-chart
        v-if="displayType === DisplayType.visits"
        class="chart-content"
        :option="option"
      ></v-chart>
      <v-chart
        v-if="displayType === DisplayType.users"
        class="chart-content"
        :option="option"
      ></v-chart>
      <v-chart
        v-if="displayType === DisplayType.online"
        class="chart-content"
        :option="option"
      ></v-chart>
      <v-chart
        v-if="displayType === DisplayType.code"
        class="chart-content"
        :option="option"
      ></v-chart>
    </a-row>
  </div>
</template>

<style scoped>
#dashboard {
  padding: 24px 16px;
}

#charts {
  width: 100%;
}

.chart-content {
  width: 100%;
  height: 500px;
}

.data-prefix-icon {
  font-size: 58px;
  color: #1677ff;
}
.welcome-header {
  min-height: 80px;
  padding: 10px;
  display: flex;
  align-items: baseline;
  font-family: monospace;
}
.welcome-header span {
  font-weight: bold;
  font-size: 18px;
}
.welcome-header .username {
  font-size: 28px;
  padding-right: 8px;
  white-space: nowrap;
  overflow: clip;
}
.welcome-header .other-info {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
