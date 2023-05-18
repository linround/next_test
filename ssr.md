实力才能获取别人无条件的信任！ ---鲁大师
# 环境
- window10
- node 18.12.0
- npm 8.19.2
# ssr的优势
- [在合理场景中使用服务端组件和客户端组件](https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components)
- [组件细化，将可交互的组件细分为叶子组件；从而将其转化为客户端组件](https://nextjs.org/docs/getting-started/react-essentials#moving-client-components-to-the-leaves)
- [不支持的使用方式](https://nextjs.org/docs/getting-started/react-essentials#unsupported-pattern)
- [序列化数据无法传递](https://nextjs.org/docs/getting-started/react-essentials#passing-props-from-server-to-client-components-serialization)
- [`server-only` 帮助开发者更准确的使用模块](https://nextjs.org/docs/getting-started/react-essentials#the-server-only-package)

## 可交互前提
- 服务端已经获取了所有数据
- 服务器为当前页面生成了html
- 发生html css js等文件到客户端
- 一个无交互的页面展示
- 水合页面，使得页面变得可交互   

服务器只能生成html，客户端只能水合html;ssr通过尽可能的给用户呈现一个无交互的页面，从而提升用户的加载感知性；
## 优化
- 使用stream来传递高优先级的模块
- error模块
  - 捕获错误
  - 隔离错误模块影响
  - 从错误中恢复页面

# 场景tips
- 不能再客户端组件中直接使用服务端组件；通常使用props将服务端组件传递进入客户端组件

# 约定文件嵌套顺序
- 下一层文件夹被当作与page同一级，进行替换page内容；实现嵌套
> layout
>> template
>>> page  
>>> dashboard
