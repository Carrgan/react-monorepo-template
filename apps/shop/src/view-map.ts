// src/viewMap.ts
const context = (require as any).context("./views", true, /\.(js|jsx|ts|tsx)$/);

// 定义视图映射的类型
type ViewMap = {
  [key: string]: () => Promise<{ default: React.ComponentType }>;
};

// 创建视图映射
const viewMap: ViewMap = context.keys().reduce((map: ViewMap, path: string) => {
  // 获取模块名（去掉前缀和扩展名）
  const modulePath = path.replace("./", "").replace(/\.(js|jsx|ts|tsx)$/, "");

  // 将路径替换为 "/子文件夹/文件" 格式
  const formattedPath = modulePath.replace(/\\/g, "/");

  // 存储懒加载模块映射
  map[`/${formattedPath}`] = () => import(`${path}`);
  return map;
}, {});

export default viewMap;
