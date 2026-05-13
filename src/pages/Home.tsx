import { Link } from 'react-router-dom'

const modules = [
  {
    path: '/weiyuan-zhijia',
    title: '委员之家',
    subtitle: 'Committee Member Home',
    icon: '🏠',
    color: 'from-red-700 to-red-900',
    desc: '委员信息管理、履职记录、交流互动平台',
    bgIcon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    path: '/jiedao-xiaozu',
    title: '街道委员小组',
    subtitle: 'Street Committee Groups',
    icon: '👥',
    color: 'from-amber-700 to-amber-900',
    desc: '14个街道委员小组组织架构与成员名单',
    bgIcon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    path: '/jiebie-qingkuang',
    title: '界别基本情况',
    subtitle: 'Sector Overview',
    icon: '📊',
    color: 'from-emerald-800 to-emerald-950',
    desc: '各界别情况介绍与活动照片集锦（50+张）',
    bgIcon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    path: '/xieshang-minzhu',
    title: '协商民主实践中心',
    subtitle: 'Deliberative Democracy Center',
    icon: '🏢',
    color: 'from-blue-800 to-blue-950',
    desc: '市政协新时代协商民主实践上城分中心',
    bgIcon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    path: '/lvzhi-pingtai',
    title: '委员履职平台',
    subtitle: 'Performance Platform',
    icon: '⭐',
    color: 'from-orange-700 to-red-900',
    desc: '50家委员工作室风采展示与星级评定',
    bgIcon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
  {
    path: '/xingji-fengcai',
    title: '星级委员工作室风采',
    subtitle: 'Star Studio Showcase',
    icon: '🏆',
    color: 'from-yellow-600 to-yellow-800',
    desc: '星级工作室评选成果与优秀案例展示',
    bgIcon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  },
  {
    path: '/lvzhi-jihua',
    title: '2026年履职计划',
    subtitle: '2026 Performance Plan',
    icon: '📅',
    color: 'from-violet-800 to-purple-950',
    desc: '各街道民生议事堂计划与界别履职安排',
    bgIcon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
]

export default function Home() {
  return (
    <div>
      {/* ========== Hero 区域 ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary-red)] to-[#A03025] text-white">
        {/* 装饰背景 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[var(--gold)] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--gold)] translate-x-1/4 translate-y-1/4"></div>
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl animate-fade-in-up">
            {/* 标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="w-2 h-2 bg-[var(--gold-light)] rounded-full animate-pulse"></span>
              <span className="text-xs tracking-widest uppercase text-white/80">Hangzhou Shangcheng District CPPCC</span>
            </div>

            {/* 主标题 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              上城区政协
              <br />
              <span className="text-[var(--gold-light)]">数字履职平台</span>
            </h1>

            {/* 副标题描述 */}
            <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mb-10">
              凝聚各界共识 · 推进协商民主 · 服务区域发展
              <br />
              <span className="text-base text-white/55">打造宽领域、多层次、常态化的政协委员履职体系</span>
            </p>

            {/* 数据概览 */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { num: '50', label: '委员工作室', suffix: '+' },
                { num: '14', label: '街道小组' },
                { num: '25', label: '五星工作室', suffix: '' },
                { num: '100+', label: '活动照片' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--gold-light)]">
                    {stat.num}<span className="text-lg">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-white/55 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/lvzhi-pingtai"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--gold)] text-[var(--text-dark)] font-semibold rounded-xl hover:bg-[var(--gold-light)] transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>⭐</span> 履职平台
              </Link>
              <Link
                to="/lvzhi-jihua"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span>📅</span> 履职计划
              </Link>
            </div>
          </div>
        </div>

        {/* 底部波浪分割线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--bg-cream)"/>
          </svg>
        </div>
      </section>

      {/* ========== 模块导航卡片区域 ========== */}
      <section className="py-16 md:py-24 bg-[var(--bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 区域标题 */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4 title-decoration" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              功能模块
            </h2>
            <p className="text-[var(--text-muted)] mt-6">七大核心板块，全面展示上城区政协工作成果</p>
          </div>

          {/* 卡片网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((mod, index) => (
              <Link
                key={mod.path}
                to={mod.path}
                className={`group relative bg-white rounded-2xl overflow-hidden card-hover border border-[var(--border-light)] opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'forwards' }}
              >
                {/* 顶部色条 */}
                <div className={`h-1.5 bg-gradient-to-r ${mod.color}`}></div>

                <div className="p-6">
                  {/* 图标 */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <span className="text-2xl">{mod.icon}</span>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-lg font-bold text-[var(--text-dark)] mb-1 group-hover:text-[var(--primary-red)] transition-colors" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    {mod.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] tracking-wide mb-3">{mod.subtitle}</p>
                  
                  {/* 描述 */}
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{mod.desc}</p>

                  {/* 箭头 */}
                  <div className="mt-4 flex items-center text-sm text-[var(--primary-red)] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    进入查看
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 平台简介区域 ========== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[var(--bg-warm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧文字 */}
            <div className="opacity-0 animate-slide-left">
              <div className="inline-block px-4 py-1 bg-red-50 text-[var(--primary-red)] text-sm font-medium rounded-full mb-6">
                平台概述
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-6 leading-tight" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                打造<span className="text-[var(--primary-red)]">"三位一体"</span><br/>委员工作室建设体系
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                上城区政协按照"向基层延伸覆盖"和"不建机构建机制"工作要求，坚持党建引领，强化委员工作室"三位一体"建设，牢牢把握功能定位，立足区域发展实际。
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                以打造"一室一品"为特色，深化"楼宇商圈""宋韵文化"和"全龄特有爱"公益慈善品牌建设，着力构建宽领域、多层次、常态化的协商体系。
              </p>

              {/* 特性标签 */}
              <div className="flex flex-wrap gap-3">
                {['党建引领', '一室一品', '楼宇商圈', '宋韵文化', '全龄特有爱'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white text-sm text-[var(--text-dark)] rounded-lg border border-[var(--border-light)] shadow-sm">
                    ✦ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 右侧数据展示 */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '五星级工作室', value: '25', color: 'from-yellow-400 to-orange-500', icon: '⭐⭐⭐⭐⭐' },
                { label: '四星级工作室', value: '17', color: 'from-blue-400 to-blue-600', icon: '⭐⭐⭐⭐' },
                { label: '三星级工作室', value: '4', color: 'from-emerald-400 to-emerald-600', icon: '⭐⭐⭐' },
                { label: '街道全覆盖', value: '100%', color: 'from-red-400 to-red-600', icon: '✓' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-white card-hover opacity-0 animate-fade-in-up`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-3xl font-black mb-1">{item.value}</div>
                  <div className="text-sm text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
