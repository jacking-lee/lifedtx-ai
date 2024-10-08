import React from 'react';
import { Link } from 'react-router-dom';

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

export default RegisterPage;
