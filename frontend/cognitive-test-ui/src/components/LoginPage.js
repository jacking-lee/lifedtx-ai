import React from 'react';
import { Link } from 'react-router-dom';

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

export default LoginPage;
