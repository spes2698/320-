# 大厂实习笔试全真模拟题库

## 项目简介

本项目是一个模拟大厂实习生笔试考试的题库系统，旨在帮助求职者熟悉各大互联网公司的笔试题型和考察重点，提高笔试通过率。系统提供了多种题型的练习、模拟考试环境以及错题集功能，覆盖前端、后端、算法、产品等多个岗位的笔试内容。

## 技术栈

- 前端框架: React 18 + TypeScript
- UI组件库: Ant Design
- 样式解决方案: Styled Components
- 状态管理: Redux Toolkit
- 路由管理: React Router 6
- HTTP请求: Axios
- 构建工具: Create React App
- 代码规范: ESLint + Prettier

## 功能模块

### 已完成功能

- [x] 项目基础架构搭建
- [x] 用户界面布局
- [x] 侧边栏导航组件
- [x] 考试列表展示
- [x] 考试分类筛选
- [x] Redux状态管理
- [x] 路由配置
- [x] 全局样式设置
- [x] 响应式布局支持

### 开发中功能

- [ ] 登录/注册页面
- [ ] 考试详情页
- [ ] 题目练习模块
- [ ] 错题记录功能
- [ ] 用户中心
- [ ] 成绩统计分析
- [ ] 后端API集成

## 开发进度

当前项目已完成React应用基础结构的搭建，主要完成了以下内容：

1. 项目框架：
   - 使用React + TypeScript作为基础框架
   - 使用Ant Design作为UI组件库
   - 使用Styled Components进行样式管理
   - 使用Redux Toolkit进行状态管理
   - 使用React Router进行路由导航

2. 核心组件：
   - 侧边栏导航组件（Sidebar）：支持折叠/展开，带用户信息区
   - 考试列表页面（ExamPage）：展示考试列表，支持分类筛选和分页
   - 全局样式配置：包括字体、颜色变量、滚动条样式等

3. 状态管理：
   - 创建了考试数据的Redux切片（examSlice）
   - 实现了考试列表的加载、分类筛选功能
   - 添加了自定义Redux Hooks简化状态访问

4. 数据模型：
   - 定义了用户、考试、题目等核心类型
   - 创建了API响应类型和分页参数类型

5. 页面路由：
   - 配置了主要功能模块的路由
   - 实现了侧边栏与路由的联动

6. 最近解决的问题：
   - 修复了模块引入路径问题
   - 创建了全局CSS样式文件
   - 完善了性能指标报告功能

## 如何运行

1. 克隆仓库
```bash
git clone https://github.com/yourusername/tikuweb.git
```

2. 安装依赖
```bash
cd tikuweb
npm install
```

3. 启动开发服务器
```bash
npm start
```

4. 打开浏览器，访问 http://localhost:3000

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 贡献指南

欢迎贡献代码或提出改进建议！请先fork本仓库，然后提交pull request。

## 许可证

MIT 