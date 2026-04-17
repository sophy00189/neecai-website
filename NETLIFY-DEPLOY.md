# 🚀 Neecai 网站 Netlify 部署教程（超简单版）

> Netlify 和 Cloudflare Pages 一样免费，但界面更简单，5分钟上线

---

## 第1步：注册 Netlify（1分钟）

1. 打开 👉 https://app.netlify.com/signup
2. 点 **Sign up with GitHub**（用你的 GitHub 账号注册）
3. 授权后自动登录

---

## 第2步：导入网站（2分钟）

1. 登录后，点 **「Add new site」**（添加新站点）→ 选 **「Import an existing project」**
2. 选 **GitHub**
3. 授权后，找到 `sophy00189/neecai-website` → 点它
4. 构建设置：
   - **Build command**：留空！
   - **Publish directory**：填 `/`
5. 点 **Deploy site**（部署站点）

---

## 第3步：等1-2分钟

看到绿色 ✅ 就是成功了！

Netlify 会给你一个临时地址，类似：`https://random-name-12345.netlify.app`

点这个地址确认能看到你的网站！

---

## 第4步：绑定域名 www.neecai.net（2分钟）

1. 进入你的站点 → 点顶部 **「Domain settings」**（域名设置）
2. 点 **「Add custom domain」**（添加自定义域名）
3. 输入 `www.neecai.net` → 点 **Verify** → 点 **Add domain**
4. Netlify 会告诉你需要添加一条 DNS 记录

### 然后去 Cloudflare 添加 DNS 记录：

1. 打开 👉 https://dash.cloudflare.com
2. 点 `neecai.net` → 左侧 **DNS** → **记录**
3. 点 **添加记录**：
   - 类型：**CNAME**
   - 名称：**www**
   - 目标：填 Netlify 给你的地址（类似 `random-name-12345.netlify.app`）
   - 代理状态：关闭（灰色云朵 ☁️）
4. 保存

5. 回到 Netlify → 勾选 **Enable HTTPS**（启用 HTTPS）

---

## ✅ 完成！

打开浏览器访问 **https://www.neecai.net** 就能看到你的网站了！

---

## 💰 费用：¥0

| 项目 | 费用 |
|------|------|
| Netlify 托管 | 免费 |
| Netlify CDN | 免费 |
| Netlify SSL | 免费 |
| 域名 neecai.net | 已买过 |

---

## ❓ 常见问题

**Q: Netlify 和 Cloudflare Pages 哪个好？**
A: 对于展示型网站，都一样。Netlify 界面更简单，部署更快。

**Q: 以后还能换到 Cloudflare 吗？**
A: 随时可以，改一下 DNS 记录就行。

**Q: 构建失败怎么办？**
A: 99%是 Publish directory 填错了，应该是 `/` 不是 `./dist`
