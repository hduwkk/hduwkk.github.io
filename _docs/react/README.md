## 基础路由

[./hello.html](https://hduwkk.github.io/dist/hello.html)
[./hello.html](https://hduwkk.github.io/hello.html)
[百度](http://baidu.com)


```js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRoute => (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              // 我们 使用 Link 标签，而不是<a href='/' />
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
    </div>
  </Router>
)
```



## 嵌套路由

```js
import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

const Home  = () =><h2>Home</h2>
const About = () => <h2>About</h2>
const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>
const Header = () => (
   <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/topics">Topics</Link>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
  </div>
)

export default App
```



