## React 设计理念

### 单向数据流

#### 数据与界面绑定

> Angular 1.0 中引入双向数据绑定，即数据改变引起UI变化，同时反过来用户操作 UI 也会影响数据
>
> 双向数据绑定在简化代码的同时导致项目臃肿，因为双向数据绑定会使 MVC 中的 Controller 复杂化

#### 单向渲染

> React 就好像一个没有副作用的函数，忠实的根据输入的数据，来构建符合预期的 UI

### 虚拟DOM

> 类似 Docker 或 VMware 的 Snapshot 快照技术

### 组件化

> 独立、完整、自由组合
>
> 保持交互一致性
>
> 保持视觉风格统一
>
> 便于程序员之间的协作

## 为什么使用 JSX？

> React 并不强制使用 JSX，也可以使用原生 JavaScript
>
> React 认为视图的本质就是渲染逻辑与 UI 视图表现的内在统一
>
> React 把 HTML 与渲染逻辑进行了耦合，形成了 JSX

## JSX 命名约定

> 使用小驼峰方式定义属性，例如：class 变成 className，tabindex 变为 tabIndex

`const element = <div className="element-style" tabIndex="0"></div>`

> jsx 的自定义属性，以 data- 开头

``const element = <div data-customized={'自定义属性'}></div>`` 

## JSX 表示对象

> JSX 会被编译为 React.createElement() 对象，以下两种写法的效果一样

```jsx
const element = (
	<h1 className='greeting'>
		Hello, world!
	</h1>
) 
```

```jsx
const element = React.createElement(
	'h1',
	{className: 'greeting'},
	'Hello, world!'
)
```

> 最终的结果为

```jsx
// 注意：这是简化后的结构
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
}
```

## React 防脚本注入 

```jsx
// 防脚本注入失败和成功的案列
const html = '<img onerror="alert(\'Hacked\')" src="invalid-image" />'
const jsHacked = 'javascript: alert("Hacked!");'
const Robot = () => {
  return (
    <>
    <div>{html}</div>
    <a href={jsHacked}>WebSite</a>
    </>
  )
}
export default Robot
```

## TS 的定义声明

> *.d.ts
>
> 只包含类型声明，不包含逻辑
>
> 不会被编译，也不会被 webpack 打包

## 配置 CSS 模组

1、直接引入整个 css 文件 (这种方式可能造成全局 CSS 样式污染)

```jsx
import './index.css'
// 这里 .app 的样式来源于 ./index.css
<div className="app"></div>
```

2、JSS (CSS in JS) 模块化引入组件

```jsx
import style from './index.css'
// index.css 样式文件中标签选择器的样式将直接作用于该文档
// 而无需通过 style.xx 的方式引用
<div className="{style.app}" />
```

## class 类组件

```jsx
// React.Component 和 React.PureComponent 基础的 API 都一样，使用的方式也几乎相同，只是在组件声明周期的管理上略有不同
// React.Component<P={}, S={}, SS = any> 泛型类接受三个参数
// P: props 用于组件间的数据传递
// S: state 代表组件自己的状态
// SS：自定义数据 可以在生命周期 getSnapshotBeforeUpdate() 函数中使用，从而在 UI 渲染之前获取相应的 DOM 数据，比如说页面滑动位置
class XxxXxx extends React.Component || React.PureComponent {
    
}
```

## state 和 props

> props 是组件对外的接口，用于组件间数据传递
>
> 更准确地说，是从父组件向子组件传递的数据
>
> props 是只读 Immutable 的

>state 是私有的，可以认为 state 是组件的 "私有属性"
>
>用 setState() 修改 state
>
>直接修改 state，组件不会触发 render 函数，页面不会渲染
>
>构建函数 constructor 是唯一可以初始化 state 的地方 this.state = { ... }
>
>通过 setState() 更新 state 是异步的

