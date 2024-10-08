// 设置网站前端的基本结构，使用 React.js
// 以下代码提供了基本的主页、登录和注册页面的框架。

// 第一步：导入必要的库
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // 假设您有一个用于样式的CSS文件

// 第二步：创建不同页面的功能组件

// 主页组件
function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>欢迎来到认知测试生成平台</h1>
        <p>根据不同年龄段提供个性化认知能力测试</p>
        <div className="home-buttons">
          <Link to="/login" className="btn primary-btn">登录</Link>
          <Link to="/register" className="btn secondary-btn">注册</Link>
        </div>
      </header>
    </div>
  );
}

// 登录页面组件
function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>登录</h2>
        <form className="login-form">
          <label>用户名:</label>
          <input type="text" name="username" required />
          <label>密码:</label>
          <input type="password" name="password" required />
          <button type="submit" className="btn primary-btn">登录</button>
        </form>
        <Link to="/register" className="link-text">没有账户？立即注册</Link>
      </div>
    </div>
  );
}

// 注册页面组件
function RegisterPage() {
  return (
    <div className="register-page">
      <div className="register-container">
        <h2>注册</h2>
        <form className="register-form">
          <label>用户名:</label>
          <input type="text" name="username" required />
          <label>邮箱:</label>
          <input type="email" name="email" required />
          <label>密码:</label>
          <input type="password" name="password" required />
          <button type="submit" className="btn primary-btn">注册</button>
        </form>
        <Link to="/login" className="link-text">已有账户？立即登录</Link>
      </div>
    </div>
  );
}

// 第三步：定义 App 组件，使用 Router 切换页面
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// 第四步：渲染 App 组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// 第五步：创建基本的 CSS 来为组件添加样式（在 App.css 中）
/* 示例 CSS - 您可以根据需要进行修改 */
/*
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
  }
  .home-page, .login-page, .register-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .home-header {
    text-align: center;
  }
  .home-buttons {
    margin-top: 20px;
  }
  .btn {
    margin: 10px;
    padding: 10px 20px;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .primary-btn {
    background-color: #4CAF50;
    color: white;
  }
  .secondary-btn {
    background-color: #007BFF;
    color: white;
  }
  .primary-btn:hover, .secondary-btn:hover {
    background-color: #333;
  }
  .login-container, .register-container {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .login-form, .register-form {
    display: flex;
    flex-direction: column;
  }
  .link-text {
    margin-top: 20px;
    text-align: center;
    color: #007BFF;
    text-decoration: none;
  }
  .link-text:hover {
    text-decoration: underline;
  }
*/
