import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: '首页', icon: '🏛️' },
  { path: '/weiyuan-zhijia', label: '委员之家', icon: '🏠' },
  { path: '/jiedao-xiaozu', label: '街道委员小组', icon: '👥' },
  { path: '/jiebie-qingkuang', label: '界别基本情况', icon: '📊' },
  { path: '/xieshang-minzhu', label: '协商民主实践中心', icon: '🏢' },
  { path: '/lvzhi-pingtai', label: '委员履职平台', icon: '⭐' },
  { path: '/xingji-fengcai', label: '星级工作室风采', icon: '🏆' },
  { path: '/lvzhi-jihua', label: '2026年履职计划', icon: '📅' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[var(--border-light)] shadow-sm">
      {/* 顶部装饰条 */}
      <div className="h-1 bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary-red)] to-[var(--gold)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo 区域 */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[var(--primary-red)] to-[var(--primary-dark)] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-lg md:text-xl" style={{ fontFamily: "'Noto Serif SC', serif" }}>政</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base md:text-lg font-bold text-[var(--text-dark)] leading-tight" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                上城区政协
              </h1>
              <p className="text-xs text-[var(--text-muted)] tracking-wide">CPPCC Shangcheng District</p>
            </div>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-[var(--primary-red)] bg-red-50/80'
                    : 'text-[var(--text-muted)] hover:text-[var(--primary-red)] hover:bg-red-50/50'
                }`}
              >
                <span className="mr-1.5">{item.icon}</span>
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[var(--primary-red)] rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--primary-red)] hover:bg-red-50 transition-colors"
            aria-label="菜单"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 移动端导航菜单 */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[var(--border-light)] animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-red-50 text-[var(--primary-red)] ring-1 ring-[var(--primary-red)]/20'
                      : 'text-[var(--text-muted)] hover:bg-red-50/50'
                  }`}
                >
                  <span className="text-xl mb-1">{item.icon}</span>
                  <span className="text-xs font-medium text-center leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
