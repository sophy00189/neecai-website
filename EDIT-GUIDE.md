# 📝 霓彩舞台设备 Neecai 网站内容修改指南

> 网站部署后，修改内容只需3步：改文件 → push → 自动上线

---

## 一、文件结构速查

```
neecai-website/
├── index.html     ← 📄 所有页面内容（文字、结构）都在这里
├── style.css      ← 🎨 样式/配色/布局，一般不用改
├── script.js      ← ⚙️ 交互/动画/多语言翻译，改翻译内容找这里
├── robots.txt     ← 🔍 SEO配置，不用改
├── sitemap.xml    ← 🔍 SEO配置，不用改
├── _headers       ← 🔒 安全配置，不用改
├── _redirects     ← 🔀 域名跳转，不用改
└── DEPLOY.md      ← 📖 部署指南，不用改
```

**你只需要改两个文件：**
- **`index.html`** — 改页面结构、图片、联系方式等
- **`script.js`** — 改所有文字内容（4种语言的翻译都在这里）

---

## 二、改文字内容（最常用）

所有文字都存在 `script.js` 的 `translations` 对象中，按语言分组：

```
translations = {
    zh: { ... },   ← 中文
    en: { ... },   ← 英文
    es: { ... },   ← 西班牙语
    pt: { ... }    ← 葡语
}
```

### 常见修改示例

#### 1. 修改公司介绍
找到 `about_p1` 和 `about_p2` 这两行：

```js
// script.js 中搜索 about_p1
zh: about_p1: '霓彩舞台设备（Neecai）成立于2010年......',
en: about_p1: 'Neecai was founded in 2010......',
es: about_p1: 'Neecai fue fundada en 2010......',
pt: about_p1: 'A Neecai foi fundada em 2010......',
```

→ 改4个语言的对应内容即可

#### 2. 修改联系方式
找到以下键：

```js
ct_addr_d: '北京市朝阳区文化创意园A座8层'    // 公司地址
// 邮箱和电话在 index.html 中直接改
```

#### 3. 修改产品描述
```js
p_fire_title: '火焰特效'        // 产品名
p_fire_desc: '专业级舞台火焰机...'  // 产品描述
p_fire_f1: '多种火焰形态'       // 产品特性1
p_fire_f2: '智能安全防护'       // 产品特性2
p_fire_f3: 'DMX512控制'        // 产品特性3
```

#### 4. 修改客户评价
```js
testi_1_text: '"霓彩的特效设备..."'   // 评价内容
testi_1_name: '张总监'                  // 客户名字
testi_1_role: '某知名艺人巡演制作总监'    // 客户职位
```

#### 5. 修改Hero区大标题
```js
hero_t1: '点亮每一场'      // 第一行
hero_t2: '震撼演出'        // 第二行（渐变高亮色）
hero_desc: '从火花喷射到...'  // 副标题描述
```

---

## 三、改联系方式（index.html）

联系方式中有邮箱和电话是直接写在 HTML 里的，不在翻译文件中：

```html
<!-- 搜索 index.html 中的这些内容直接修改 -->
info@neecai.com          → 改邮箱
+86 400-888-6666         → 改电话
+86 138 0000 8888        → 改WhatsApp
北京市朝阳区文化创意园A座8层  → 已在翻译文件中，改script.js
```

---

## 四、改颜色/配色（style.css）

如果需要调整品牌色，修改 `style.css` 顶部的 CSS 变量：

```css
:root {
    --accent-fire: #ff6b35;     /* 主强调色（橙红）*/
    --accent-spark: #ffd700;    /* 金色 */
    --accent-blue: #4361ee;     /* 蓝色 */
    --accent-purple: #7209b7;   /* 紫色 */
    --bg-primary: #0a0a0f;      /* 页面背景色 */
    --bg-card: #1a1a28;         /* 卡片背景色 */
}
```

例如要把主色从橙红改为科技蓝：
```css
--accent-fire: #0066ff;  /* 改这一个就行，全站自动生效 */
```

---

## 五、添加新产品

在 `index.html` 中复制一个 product-card 块，修改内容：

```html
<!-- 复制一个 product-card，修改以下部分 -->
<div class="product-card" data-effect="新效果名">
    <div class="product-visual">
        <div class="product-icon-wrap fire-glow">  <!-- 改发光样式 -->
            <i class="fas fa-fire"></i>              <!-- 改图标 -->
        </div>
    </div>
    <div class="product-info">
        <h3 data-i18n="p_新_title">产品名</h3>
        <p data-i18n="p_新_desc">产品描述</p>
        <ul class="product-features">
            <li><i class="fas fa-check"></i> <span data-i18n="p_新_f1">特性1</span></li>
            <li><i class="fas fa-check"></i> <span data-i18n="p_新_f2">特性2</span></li>
            <li><i class="fas fa-check"></i> <span data-i18n="p_新_f3">特性3</span></li>
        </ul>
        <a href="#" class="product-link" data-i18n="learn_more">了解更多</a>
    </div>
</div>
```

然后在 `script.js` 的4个语言中添加对应翻译键。

---

## 六、添加新案例

在 `index.html` 的 `cases-grid` 中添加：

```html
<div class="case-card">
    <div class="case-visual">
        <div class="case-bg" style="background: linear-gradient(135deg, #色1, #色2, #色3);">
            <div class="case-icon"><i class="fas fa-图标名"></i></div>
        </div>
    </div>
    <div class="case-overlay">
        <span class="case-tag" data-i18n="case_tag_标签">标签</span>
        <h3 data-i18n="case_新_title">案例标题</h3>
        <p data-i18n="case_新_desc">案例描述</p>
    </div>
</div>
```

---

## 七、修改后如何上线

### 方式1：Git Push（推荐）
```bash
cd /workspace/stage-fx-website
git add .
git commit -m "更新了XXX内容"
git push
```
→ 1-2分钟后自动上线，无需手动操作

### 方式2：GitHub 网页编辑
1. 打开 https://github.com/你的用户名/neecai-website
2. 点击要修改的文件（如 `script.js`）
3. 点右上角 ✏️ 编辑按钮
4. 修改内容 → 点 Commit changes
5. 1-2分钟后自动上线

---

## 八、常用图标速查

产品卡片和案例中使用的 FontAwesome 图标：

| 图标 | 代码 | 用途 |
|------|------|------|
| 🔥 | `fa-fire` | 火焰 |
| ⭐ | `fa-star-half-alt` | 火花 |
| ☁️ | `fa-cloud` | 烟雾 |
| 🎁 | `fa-gift` | 彩花 |
| 💡 | `fa-lightbulb` | 灯光 |
| 🧊 | `fa-cube` | 全息 |
| 🎤 | `fa-microphone-alt` | 演唱会 |
| 🎭 | `fa-theater-masks` | 剧院 |
| ⛺ | `fa-campground` | 音乐节 |
| 🏢 | `fa-building` | 企业 |
| ❤️ | `fa-heart` | 婚礼 |
| 📺 | `fa-tv` | 电视 |

完整图标库：https://fontawesome.com/icons

---

## 九、快速修改清单

| 想改什么 | 改哪个文件 | 搜索关键词 |
|----------|-----------|-----------|
| 产品名称/描述 | script.js | `p_fire_title` 等 |
| 公司介绍 | script.js | `about_p1` |
| 联系电话/邮箱 | index.html | `400-888` / `info@neecai` |
| 客户评价 | script.js | `testi_1_text` |
| 案例内容 | script.js | `case_c1_title` |
| 统计数字 | index.html | `data-target="15"` |
| 页面主色 | style.css | `--accent-fire` |
| 英文翻译 | script.js | `en: {` |
| 西语翻译 | script.js | `es: {` |
| 葡语翻译 | script.js | `pt: {` |
