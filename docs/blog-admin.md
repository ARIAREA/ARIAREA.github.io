# 博客管理后台

入口：<https://ariarea.github.io/admin/>，跳转到 Pages CMS。

## 首次登录

1. 使用拥有博客仓库的 GitHub 账号 ARIAREA 登录 Pages CMS。
2. 安装 Pages CMS GitHub App 时选择 **Only select repositories**，仅授权 `ARIAREA.github.io`。
3. 打开 `ARIAREA / ARIAREA.github.io`，选择 `main` 分支。

## 写作与发布

进入「文章」，点击新建，填写标题、发布日期和正文。正文支持可视化编辑和 Source 源码编辑。

- 封面字段或正文图片工具可选择和上传图片，图片保存至 `public/uploads/`，文章引用 `/uploads/...`。
- 「仅保存为草稿」开启时，保存后文章不会出现在博客；关闭后保存即进入发布流程。新文章默认关闭此开关，想暂存时请先开启。
- 每次保存都会提交到 GitHub，并自动运行 **Deploy blog to GitHub Pages**。等待该流程成功后刷新博客。
- 更改标题不会改变已保存文件的地址。新建时可以自定义 `.md` 文件名，建议用英文、数字和短横线。

发布进度：<https://github.com/ARIAREA/ARIAREA.github.io/actions/workflows/pages.yml>

## 现有内容

后台会保留未展示的文章元数据，例如系列、别名、精确时间和许可证。现有文章若含 Mermaid、自定义提示块、组件或其他 Shirone 扩展，使用 Source 模式编辑，避免可视化编辑器重写扩展语法。MDX 文件继续使用 GitHub 编辑，不通过普通 Markdown 表单保存。

文章若有 `publishedAt`，其日历日期必须与 `published` 一致；修改发布日期时同步修改精确时间。「关于我」可在后台单独编辑。

## 数据与权限

内容和图片仍保存在原来的 GitHub 仓库；博客外观、文章渲染和 GitHub Pages 托管不变。后台本身由 Pages CMS 托管，只有获得仓库权限的账号可以写入。

当前仓库公开，草稿只是控制博客展示，不是私密存储。若发布失败，先查看部署记录；失败构建不会替换最近一次成功上线的版本。

配置文件为根目录 `.pages.yml`。文档：<https://pagescms.org/docs/>。
