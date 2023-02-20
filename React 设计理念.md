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

## React 组件的生命周期

生命周期均属于类组件中的概念

React hooks 是对函数组件的一次重大革新

- Mounting：创建虚拟 DOM，渲染 UI

  > 组件第一次绘制，会创建虚拟 DOM，渲染 UI，完成组件的加载和初始化
  >
  > componentDidMount()：组件创建好 dom 元素以后，挂载进页面的时候调用，只会调用一次

- Updating：更新虚拟 DOM，重新渲染 UI

  > 组件运行和交互的阶段，处理用户交互，收集监听事件，更新 DOM 元素，重新渲染 UI
  >
  > componentWillReceiveProps(nextProps, nextContext)：在组件接收到一个新的 prop（更新后）时被调用，已废弃
  >
  > shouldComponentUpdate(nextProps, nextState,  nextContext)：该方法返回布尔值，true 则更新组件，false 则不更新组件
  >
  > componentDidUpdate(prevProps, prevState, snapshot)：只要组件发生了更新，UI 重新渲染，那么这个函数就会被调用

- Unmounting：删除虚拟 DOM，移除 UI

  > 组件卸载消亡的阶段，对组件进行清理工作，删除虚拟 DOM，移除 UI
  >
  > componentWillUnmount()：组件销毁后调用

```jsx
// 参考链接：https://segmentfault.com/a/1190000041714311
static getDerivedStateFromProps(nextProps, preState)
// 注意该方法为静态方法
// 组件初始化和组件更新时都会被调用
// 使用场景：props数据的某个值发生变化时需要对 state 进行赋值
static getDerivedStateFromProps(nextProps, preState) {
    const {match: {params: {instrumentId}}} = nextProps;
    // 此处当传入的instrumentId发生变化的时候，更新state
    if (instrumentId !== preState.instrumentId) {
        //若需要在数据变化后进行其他操作，需要在return前操作！
        return {
            instrumentId: instrumentId,
        };
    }
    return null;    // 不变化，则对于state不进行任何操作
}
```

![React_生命周期_1](C:\Users\fli\Desktop\React\react_learn\md_images\React_生命周期_1.png)

![React_生命周期_2](C:\Users\fli\Desktop\React\react_learn\md_images\React_生命周期_2.jpg)

## 什么是钩子(hooks)

- 消息处理的一种方法，用来监视指定程序
- 函数组件中需要处理副作用，可以用钩子把外部代码"钩"进来
- 常用钩子：useState、useEffect、useContext、useReducer
- hooks 一律使用 use 前缀命名：useXxx

## Hooks 的本质

> 一类特殊的函数，为函数式组件注入特殊的功能 

## React 创造 Hooks 概念的意义

- 有些类组件冗长且复杂，尤其在与 redux全局状态连接以后，难以复用。

- Hooks 之前的解决方案：无状态组件 与 HOC (高阶组件)，但还是存在诸多问题

  > 无状态组件：纯函数组件，仅依赖 props 的注入。无 state，无生命周期，无副作用，无法访问 API 进行异步数据的更新
  >
  > HOC：在原组件的基础上，再套一层组件

- Hooks 的目的在于给函数式组件加上状态

- 生命周期函数会同时处理多项任务：发起Ajax、跟踪数据状态、绑定事件监听...，函数式组件则轻量化很多，使用 Hooks 钩子来钩入组件状态

-  Hooks 代表 React 架构的一次重大变革

  > 不再需要类组件
  >
  > 不会再有 this、不会再有 binding、甚至有可能取代 redux
  >
  > 简化了代码、减少了模板、降低了学习难度

## 常见钩子

[Hook API 索引 – React (docschina.org)](https://react.docschina.org/docs/hooks-reference.html) 

- 状态钩子：useState()

  ```jsx
  const [count, setCount] = useState(0)
  // React 自带的一个 hook 函数，声明组件状态
  // 参数可以设置 state 的初始值（initial state）
  // 返回值是一个只有两个元素的数组：[状态，状态更新函数]
  ```

- 副作用钩子：useEffect()

  ```jsx
  // 给函数式组件添加副作用来取代生命周期函数：componentDidMount、componentDidUpdate、componentWillUnmount
  // 若第二个参数为空数组 []，则相当于生命周期函数 componentDidMount，即只会在组件加载的时候调用一次
  useEffect(() => {
     ...
  }, [])
  // 若第二个参数为空数组 [count]，则当 count 的值发生变化时，执行响应的函数
  useEffect(() => {
      document.title = `点击${count}次`
  }, [count])
  // 若不传入第二个参数，则相当于生命周期函数 componentDidUpdate，即每次渲染结束的时候都会调用对应的函数，注意可能导致死循环的情况，即渲染结束后调用函数，而该函数又触发新的渲染
  useEffect(() => {
      ...
  })
  
  // useEffect 中使用 async 和 await
  useEffect(() => {
      const fetchData = async () => {
      	const response = await fetch('http://jsonplaceholder.typicode.com/users')
          // .then(response => response.json())
          // .then(data => setRobotGallery(data))
          const data = await response.json()
          setRobotGallery(data)
      }
      fetchData()    
  }, [])
  ```

- useContext：处理跨组件的数据传递
- useReducer：管理全局状态
- useCallback：处理回调的副作用

- useRef：返回一个引用的对象，该引用对象在整个组件的生命周期中都会保持不变
- useLayoutEffect：所有 DOM 元素变革之后同步调用，读取 DOM 布局，并同步触发，重新渲染
- useDebugValue：可以在 React 开发者工具中显示自定义的 Hook 标签，方便开发

## 高阶组件 HOC

[高阶组件 – React (docschina.org)](https://react.docschina.org/docs/higher-order-components.html) 

高阶组件是 React 中非常重要的概念，应用场景包括：react-redux、react-router

```jsx
const hoc = higherOrder(wrappedComponent)
```

高阶组件就是一个返回组件的函数，通过组件嵌套的方法给子组件添加更多的功能，接受一个组件作为参数，并返回一个经过改造的新组件

### 使用高阶组件的意义

- 抽取重复代码，实现组件复用
- 条件渲染，控制组件的渲染逻辑（渲染劫持）
- 捕获 / 劫持被处理组件的生命周期

## 自定义 Hooks

[自定义 Hook – React (docschina.org)](https://react.docschina.org/docs/hooks-custom.html) 

- 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook
- 自定义 Hook 是一种自然遵循 Hook 设计的约定，而并不是 React 的特性

## SPA (单页网站应用)

> JS、CSS、HTML 打包为一个超级大的文件，一次性丢给浏览器
>
> JS 劫持浏览器路由，生成虚拟路由来动态渲染页面 DOM 元素
>
> 符合前后端分离的趋势，服务器不负责 UI 输出，而专注于数据支持，这样同一服务器可同时支持桌面APP、手机APP、网站APP ...

## React 路由框架

>综合性路由框架：react-router
>
>浏览器路由框架：react-keeper
>
>手机APP框架 (React-Native)：react-navigation

## react-router

- react-router-dom 用于浏览器，处理 Web App 的路由

> 会自动安装 react-router 核心框架
>
> `<Link />` 组件可以渲染出 `<a />`标签
>
> `<BrowserRouter />` 组件利用 H5 API 实现路由切换
>
> `<HashRouter />` 组件则利用原生 JS 中的 `window.location.hash`来实现路由切换

- react-router-native 用于React-Native，处理手机 App 的路由
- react-router-redux 提供了路由中间件，处理 redux 的集成
- react-router-config 用来静态配置路由

## 网站路由系统的要求

- 路由导航与原生浏览器操作行为一致，如路径可以记录、缓存、回退等

  ```jsx
  <BrowserRouter />
  ```

- 路径的切换以页面为单位，不要页面堆叠

  ```jsx
  <Switch />
  ```

- 路由的路径解析原理与原生浏览器一致，可以自动识别 URL 路径

  ```jsx
  <Route />
  ```

## 自带路由参数

> 通过  `<Route />` 传递的组件中的 props 自带三个参数：history、location、match
>
> 其中 match 的 params 属性可以接收 URL 路径中传递过来的参数信息

```jsx
// 如何在 URL 中添加参数
// 第一种是使用 “?” 来引导参数
"http://localhost/path?name1=value1&name2=value2"
// 第二种是分段路由 Segments
"http://localhost/products/131415999"
```

## react-router-dom@5 和 react-router-dom@6 传递路由信息的区别

- v5 可以通过 props 注入来获取路由状态

  > 类组件：withRouter() 高阶组件 -> history、location、match
  >
  > 函数式组件：useLocation()、useHistory()、useParams()、useRouteMatch() ...

- v6 全面倒向了函数式组件

  > useLocation()、useNavigate() 替换了 useHistory()

## Redux

> redux 是一种设计模式，同时也是项目的架构方案。redux 不依赖任何库、任何框架，它不仅可以在 React 中使用，甚至在 Angular：ng-redux、Vue：ng-redux 中同样可以使用，但是在 Angular 中常用的是 Observable(RxJS)、Vue 中常用的是 Vuex![redux架构](C:\Users\fli\Desktop\React\react_learn\md_images\redux架构.jpg)
>
> ![redux工作流](C:\Users\fli\Desktop\React\react_learn\md_images\redux工作流.jpg)

## RESTful

> 对外开放接口的方式
>
> 语义明确、轻量级，且结构简单
>
> REST 全称 REpresentational State Transfer，表征性状态转移
>
> RESTful 即 REST 风格的
>
> RESTful 只是一个指导性的原则、一种代码风格或者说是一种代码的架构，而不是一种标准

### 基本特点

- 无状态

  > 一次调用即可返回结果，不存在"打开链接、获取数据、关闭连接"这样的过程，也就是说类似于 WebSocket 这种持久性的、有状态的连接不属于 RESTful 的范畴

- 面向"资源"

  > 路径中只有名词，没有动词

- 使用 HTTP 的动词

  > | 动词   | 意义     | 例子                                  |
  > | ------ | -------- | ------------------------------------- |
  > | GET    | 查看     | HTTP GET api/v1/touristRoutes         |
  > | POST   | 创建     | HTTP POST api/v1/touristRoutes        |
  > | PUT    | 更新     | HTTP PUT api/v1/touristRoutes/{id}    |
  > | PATCH  | 部分更新 | HTTP PATCH api/v1/touristRoutes/{id}  |
  > | DELETE | 删除     | HTTP DELETE api/v1/touristRoutes/{id} |

- HATOAS 超媒体即应用状态引擎

  > Hypertext As The Engine Of Application State

### 实际应用

> 面向对象（资源），如增删改查，RESTful 好用
>
> 但面向过程，如登陆，则不好用，api/login ? POST api/user ? 都不太合适