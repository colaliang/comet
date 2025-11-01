# Comet AI推广网站 - 部署指南

本指南将帮助您将Comet AI推广网站部署到Vercel平台。

## 🚀 快速部署到Vercel

### 方法一：通过Vercel CLI部署

1. **安装Vercel CLI**
```bash
npm i -g vercel
```

2. **登录Vercel**
```bash
vercel login
```

3. **部署项目**
```bash
# 在项目根目录执行
vercel

# 首次部署时会询问项目配置，按提示操作即可
```

4. **生产部署**
```bash
vercel --prod
```

### 方法二：通过GitHub集成部署

1. **推送代码到GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Comet AI推广网站"
git branch -M main
git remote add origin https://github.com/your-username/comet-promote.git
git push -u origin main
```

2. **连接Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录
   - 点击 "New Project"
   - 选择您的GitHub仓库
   - 点击 "Deploy"

## ⚙️ 环境变量配置

在Vercel项目设置中添加以下环境变量：

### 必需的环境变量

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 可选的环境变量

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 百度统计
NEXT_PUBLIC_BAIDU_ID=xxxxxxxxxx

# 网站验证
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxx
NEXT_PUBLIC_BAIDU_SITE_VERIFICATION=xxxxxxxxxx
```

## 🔧 自定义域名配置

1. **在Vercel控制台中**
   - 进入项目设置
   - 点击 "Domains"
   - 添加您的自定义域名

2. **DNS配置**
   - 添加CNAME记录指向 `cname.vercel-dns.com`
   - 或添加A记录指向Vercel的IP地址

## 📊 性能优化建议

### 1. 图片优化
- 使用WebP格式
- 启用Next.js图片优化
- 配置适当的图片域名

### 2. 缓存策略
```javascript
// next.config.js
const nextConfig = {
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
}
```

### 3. 压缩配置
- 启用Gzip压缩
- 使用Brotli压缩（Vercel自动启用）

## 🔍 SEO配置检查清单

- [x] Meta标签完整
- [x] 结构化数据
- [x] Sitemap.xml
- [x] Robots.txt
- [x] 图标和Manifest
- [x] 语义化HTML
- [x] 页面性能优化

## 📈 监控和分析

### 1. Vercel Analytics
```bash
npm install @vercel/analytics
```

在 `app/layout.tsx` 中添加：
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 2. Google Analytics
在 `app/layout.tsx` 中添加：
```typescript
import Script from 'next/script'

// 在<body>标签中添加
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## 🚨 部署后检查

### 1. 功能测试
- [ ] 页面正常加载
- [ ] 导航功能正常
- [ ] 响应式设计正常
- [ ] 表单提交正常
- [ ] 外链跳转正常

### 2. SEO检查
- [ ] 使用Google Search Console验证
- [ ] 检查sitemap.xml可访问性
- [ ] 验证结构化数据
- [ ] 测试页面加载速度

### 3. 性能测试
```bash
# 使用Lighthouse进行性能测试
npm install -g lighthouse
lighthouse https://your-domain.vercel.app --output html --output-path ./lighthouse-report.html
```

## 🔄 持续部署

Vercel会自动监听GitHub仓库的变化：
- `main`分支的推送会触发生产部署
- 其他分支的推送会创建预览部署
- Pull Request会自动生成预览链接

## 📞 技术支持

如果在部署过程中遇到问题：

1. **查看Vercel部署日志**
   - 在Vercel控制台的"Functions"标签页查看错误日志

2. **常见问题解决**
   - 构建失败：检查package.json依赖版本
   - 环境变量问题：确保在Vercel中正确配置
   - 域名问题：检查DNS配置

3. **获取帮助**
   - Vercel官方文档：https://vercel.com/docs
   - Next.js官方文档：https://nextjs.org/docs
   - GitHub Issues：提交问题到项目仓库

## 🎉 部署完成

恭喜！您的Comet AI推广网站已成功部署。现在您可以：

1. 分享网站链接给目标用户
2. 监控网站访问数据
3. 根据用户反馈持续优化
4. 定期更新内容和功能

记住定期备份您的代码和数据，保持网站的安全性和稳定性。