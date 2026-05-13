import { Link } from 'react-router-dom'

export default function LvZhiJiHua() {
  return (
    <div className="min-h-screen">
      {/* 页面头部 */}
      <section className="relative bg-gradient-to-br from-violet-800 to-purple-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full border border-purple-300/30"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full border border-violet-300/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <Link to="/" className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6 transition-colors">
            ← 返回首页
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            📅 2026年履职计划
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">各街道"民生议事堂"议事计划与各界别履职安排</p>

          <div className="flex gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-black text-[var(--gold-light)]">14</div>
              <div className="text-xs text-white/55 mt-1">个街道计划</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-[var(--gold-light)]">全年</div>
              <div className="text-xs text-white/55 mt-1">履职周期</div>
            </div>
          </div>
        </div>
      </section>

      {/* 内容 */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 民生议事堂计划 */}
          <div className="bg-white rounded-2xl shadow-xl border border-[var(--border-light)] overflow-hidden animate-fade-in-up">
            <div className="bg-gradient-to-r from-violet-600 to-purple-700 p-6 text-white">
              <span className="text-3xl">📋</span>
              <h3 className="text-xl font-bold mt-3" style={{ fontFamily: "'Noto Serif SC', serif" }}>民生议事堂计划</h3>
              <p className="text-sm text-white/70 mt-1">14个街道2026年度议事安排</p>
            </div>
            
            <div className="p-6 space-y-4">
              {[
                { street: '湖滨街道', topic: '商业街区品质提升与消费环境优化', time: 'Q1' },
                { street: '清波街道', topic: '历史文化街区保护与发展协调推进', time: 'Q2' },
                { street: '小营街道', topic: '红巷精神传承与社区治理创新', time: 'Q1' },
                { street: '望江街道', topic: '老旧小区改造后长效管理机制', time: 'Q2' },
                { street: '南星街道', topic: '创意产业园区营商环境优化', time: 'Q3' },
                { street: '紫阳街道', topic: '"三一"工作模式深化推广', time: 'Q1' },
                { street: '闸弄口街道', topic: '基层治理数字化改革实践', time: 'Q4' },
                { street: '凯旋街道', topic: '养老服务体系建设完善', time: 'Q2' },
                { street: '采荷街道', topic: '"幸福19"品牌深化与拓展', time: 'Q3' },
                { street: '四季青街道', topic: '楼宇经济发展与企业服务', time: 'Q1' },
                { street: '笕桥街道', topic: '城乡结合部基础设施提升', time: 'Q4' },
                { street: '彭埠街道', topic: '东站枢纽周边综合治理', time: 'Q2' },
                { street: '九堡街道', topic: '直播电商产业规范发展', time: 'Q3' },
                { street: '丁兰街道', topic: '智慧社区建设与应用推广', time: 'Q4' },
              ].map((item, i) => (
                <div key={item.street} className="flex items-start gap-4 p-3.5 bg-gray-50 rounded-xl hover:bg-violet-50 transition-colors group cursor-default">
                  <span className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-white ${
                    item.time === 'Q1' ? 'bg-emerald-500' : 
                    item.time === 'Q2' ? 'bg-blue-500' :
                    item.time === 'Q3' ? 'bg-amber-500' : 'bg-red-500'
                  }`}>
                    {item.time}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-[var(--text-dark)] text-sm group-hover:text-violet-700 transition-colors">{item.street}</h5>
                    <p className="text-xs text-[var(--text-muted)] line-clamp-1">{item.topic}</p>
                  </div>
                </div>
              ))}

              <a
                href="/data/履职计划/2026年各街道民生议事堂议事计划.xls"
                download
                className="flex items-center justify-center gap-2 w-full py-3 bg-violet-100 text-violet-700 font-medium rounded-xl hover:bg-violet-200 transition-colors mt-2"
              >
                📥 下载完整计划（Excel）
              </a>
            </div>
          </div>

          {/* 界别履职计划 + 文件下载 */}
          <div className="space-y-8">
            {/* 界别履职计划 */}
            <div className="bg-white rounded-2xl shadow-xl border border-[var(--border-light)] overflow-hidden animate-fade-in-up delay-200">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-6 text-white">
                <span className="text-3xl">📊</span>
                <h3 className="text-xl font-bold mt-3" style={{ fontFamily: "'Noto Serif SC', serif" }}>界别履职计划</h3>
                <p className="text-sm text-white/70 mt-1">各委员界别年度履职安排</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { sector: '中国共产党界', focus: '政治引领、凝聚共识、重大议题协商' },
                    { sector: '民主党派界', focus: '参政议政、民主监督、提案质量提升' },
                    { sector: '工会界', focus: '职工权益保障、劳动纠纷调解' },
                    { sector: '妇联界', focus: '妇女儿童权益保护、家庭教育促进' },
                    { sector: '工商界', focus: '优化营商环境、民营企业发展' },
                    { sector: '科学技术界', focus: '新质生产力发展、科技创新推动' },
                    { sector: '教育界', focus: '教育资源均衡、素质教育推进' },
                    { sector: '文化艺术界', focus: '宋韵文化传承、公共文化服务' },
                    { sector: '医疗卫生界', focus: '公共卫生体系、基层医疗服务' },
                  ].map((item) => (
                    <div key={item.sector} className="flex items-start gap-3 p-3 bg-purple-50/50 rounded-lg hover:bg-purple-50 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-purple-400 mt-2"></span>
                      <div>
                        <h5 className="font-medium text-[var(--text-dark)] text-sm">{item.sector}</h5>
                        <p className="text-xs text-[var(--text-muted)]">{item.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/data/履职计划/2026年各界别履职计划.xlsx"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 bg-purple-100 text-purple-700 font-medium rounded-xl hover:bg-purple-200 transition-colors mt-4"
                >
                  📥 下载完整计划（Excel）
                </a>
              </div>
            </div>

            {/* 文件下载区 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white animate-fade-in-up delay-300">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                📂 文件下载中心
              </h4>
              <div className="space-y-3">
                <a href="/data/履职计划/2026年各街道民生议事堂议事计划.xls" download className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/15 transition-colors group">
                  <span className="text-green-400">📊</span>
                  <span className="flex-1 text-sm truncate group-hover:text-[var(--gold-light)] transition-colors">各街道民生议事堂议事计划</span>
                  <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
                <a href="/data/履职计划/2026年各界别履职计划.xlsx" download className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/15 transition-colors group">
                  <span className="text-blue-400">📊</span>
                  <span className="flex-1 text-sm truncate group-hover:text-[var(--gold-light)] transition-colors">2026年各界别履职计划</span>
                  <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
