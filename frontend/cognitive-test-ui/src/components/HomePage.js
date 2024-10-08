import React from 'react';
import { Link } from 'react-router-dom';

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

export default HomePage;
