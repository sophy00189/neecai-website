# 🚀 霓彩舞台设备 Neecai 网站部署指南

> 按照以下步骤操作，总费用约 ¥70/年（仅域名费），其余全部免费

---

## 第一步：注册 Cloudflare 账号 + 购买域名（10分钟）

1. 打开 https://dash.cloudflare.com/sign-up
2. 用你的邮箱注册账号
3. 登录后，点击左侧 **Domain Registration** → **Register Domains**
4. 搜索 `neecai.com`，加入购物车
5. 填写域名注册信息（姓名、邮箱等）
6. 付款（支持信用卡，约 $9.77/年）
7. ✅ 域名购买完成

---

## 第二步：注册 GitHub 账号 + 上传代码（5分钟）

1. 打开 https://github.com/signup 注册 GitHub 账号
2. 登录后，点击右上角 **+** → **New repository**
3. 仓库名填 `neecai-website`，选择 **Public**，点 Create
4. 在本机终端执行：

```bash
cd /workspace/stage-fx-website
git init
git add .
git commit -m "Neecai website initial release"
git branch -M main
git remote add origin https://github.com/你的用户名/neecai-website.git
git push -u origin main
```

> 💡 如果本机没有 git 凭证，可以直接在 GitHub 网页端上传文件：
> 仓库页面 → **Add file** → **Upload files** → 把所有文件拖进去 → Commit

---

## 第三步：Cloudflare Pages 部署（3分钟）

1. 回到 Cloudflare Dashboard
2. 左侧菜单 → **Workers & Pages** → **Create** → **Pages** 选项卡
3. 选择 **Connect to Git**
4. 授权 GitHub，选择 `neecai-website` 仓库
5. 构建设置：
   - **Production branch**: `main`
   - **Build command**: 留空
   - **Build output directory**: `/` 或 `./`
6. 点 **Save and Deploy**
7. ✅ 等待1-2分钟，部署完成！Cloudflare 会给你一个临时地址如 `neecai-website.pages.dev`

---

## 第四步：绑定自定义域名 www.neecai.com（2分钟）

1. 在 Cloudflare Pages 项目页 → **Custom domains** 选项卡
2. 点 **Set up a custom domain**
3. 输入 `www.neecai.com`，点 Continue
4. Cloudflare 会自动配置 DNS（因为你域名就在CF）
5. 点 **Activate domain**
6. ✅ 完成！现在访问 `www.neecai.com` 就能看到你的网站了

---

## 第五步：配置表单接收（5分钟）

网站的联系表单需要接收询盘，推荐免费方案：

### 方案A：Formspree（推荐，免费50条/月）
1. 打开 https://formspree.io/ 注册账号
2. 创建新表单，获取表单ID（如 `xyzabcde`）
3. 编辑 `index.html`，找到 `YOUR_FORM_ID` 替换为你的表单ID
4. 重新 git push，Cloudflare Pages 会自动部署
5. ✅ 询盘会发到你的邮箱

### 方案B：Cloudflare Email Routing（免费）
1. Cloudflare Dashboard → Email → Email Routing
2. 设置 `info@neecai.com` 转发到你的个人邮箱
3. ✅ 客户发邮件到 info@neecai.com 你就能收到

---

## 第六步：SEO 优化（可选）

- ✅ sitemap.xml 已自动生成
- ✅ robots.txt 已配置
- ✅ 多语言 hreflang 标签已设置
- ✅ HTTPS 强制跳转已配置
- ✅ 安全 Headers 已配置

提交到 Google Search Console：
1. 打开 https://search.google.com/search-console
2. 添加资源 `https://www.neecai.com`
3. 验证方式选 **DNS 验证**（Cloudflare 一键添加 TXT 记录）
4. 提交 sitemap: `https://www.neecai.com/sitemap.xml`

---

## 💰 费用总结

| 项目 | 费用 |
|------|------|
| 域名 neecai.com | ~$9.77/年 ≈ ¥70 |
| Cloudflare Pages 托管 | **免费** |
| Cloudflare CDN | **免费** |
| Cloudflare SSL | **免费** |
| Cloudflare DDoS防护 | **免费** |
| Formspree 表单 | **免费**（50条/月） |
| GitHub 仓库 | **免费** |
| **年总成本** | **≈ ¥70** |

---

## 🔧 后续维护

- 修改网站内容 → 编辑文件 → `git push` → 自动部署上线
- 查看访问数据 → Cloudflare Dashboard → Web Analytics
- 查看询盘 → 邮箱或 Formspree 后台

---

## ❓ 常见问题

**Q: 客户说网站打不开？**
A: 检查 Cloudflare DNS 是否开启代理（橙色云朵图标）

**Q: 想改网站内容怎么办？**
A: 改代码 → git push → 1-2分钟自动上线

**Q: 需要加产品页面怎么办？**
A: 复制 index.html 里的 product-card 结构，添加新产品，push 即可

**Q: 流量大了要收费吗？**
A: Cloudflare Pages 免费计划每月无限带宽，展示站完全够用
