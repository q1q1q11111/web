import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function WeiYuanZhiJia() {
  const [activeTab, setActiveTab] = useState('intro')

  return (
    <div className="min-h-screen">
      {/* 页面头部 */}
      <section className="relative bg-gradient-to-br from-red-800 to-red-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/20"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Link to="/" className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6 transition-colors">
              ← 返回首页
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              🏠 委员之家
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">委员信息管理、履职记录、交流互动的综合服务平台</p>
          </div>
        </div>
      </section>

      {/* 内容区域 */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl border border-[var(--border-light)] overflow-hidden">
          {/* Tab 导航 */}
          <div className="flex border-b border-[var(--border-light)] overflow-x-auto">
            {[
              { key: 'intro', label: '平台介绍' },
              { key: 'structure', label: '组织架构' },
              { key: 'duties', label: '履职职责' },
              { key: 'activities', label: '活动风采' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-medium transition-all duration-300 relative ${
                  activeTab === tab.key
                    ? 'text-[var(--primary-red)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-dark)]'
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-red)]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Tab 内容 */}
          <div className="p-8 md:p-12 animate-fade-in" key={activeTab}>
            {activeTab === 'intro' && (
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  委员之家简介
                </h3>
                <div className="prose prose-lg max-w-none text-[var(--text-muted)] space-y-4 leading-relaxed">
                  <p>
                    "委员之家"是上城区政协为全体政协委员打造的综合性服务与管理平台，是政协委员学习交流、建言献策、联系群众的重要阵地。
                  </p>
                  <p>
                    平台以<strong className="text-[var(--text-dark)]">"凝聚共识、协商民主、服务发展"</strong>为核心宗旨，通过信息化手段提升委员履职效率，加强委员之间的横向联系，密切与界别群众的纵向沟通。
                  </p>

                  {/* 核心功能卡片 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 not-prose">
                    {[
                      { icon: '📝', title: '履职记录', desc: '全程记录委员履职情况，形成完整档案' },
                      { icon: '💬', title: '交流互动', desc: '委员间在线交流，分享经验心得' },
                      { icon: '📊', title: '数据分析', desc: '多维度统计展示履职成效与贡献' },
                      { icon: '🎯', title: '任务管理', desc: '年度计划分解，跟踪执行进度' },
                      { icon: '🏆', title: '评优评先', desc: '星级评定机制，激励争先创优' },
                      { icon: '📚', title: '学习园地', desc: '政策理论学习，提升参政议政能力' },
                    ].map((item) => (
                      <div key={item.title} className="p-5 bg-gradient-to-br from-red-50/50 to-amber-50/50 rounded-xl border border-[var(--border-light)] card-hover">
                        <span className="text-2xl">{item.icon}</span>
                        <h4 className="font-semibold text-[var(--text-dark)] mt-3 mb-1">{item.title}</h4>
                        <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'structure' && (
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6" style={{ fontFamily: "'Noto Serif SC', serif" }}>组织架构</h3>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center">
                  <div className="inline-block px-8 py-4 bg-[var(--primary-red)] text-white rounded-xl font-bold text-lg mb-6 shadow-lg">
                    上城区政协委员会
                  </div>
                  
                  {/* 架构树 */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {['界别委员小组', '街道委员小组', '委员工作室', '专门委员会'].map((item, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-[var(--border-light)] shadow-sm card-hover">
                        <div className="w-12 h-12 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-2">
                          <span className="text-xl">{['👥', '🏘️', '⭐', '📋'][i]}</span>
                        </div>
                        <span className="text-sm font-medium text-[var(--text-dark)]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[var(--border-light)]">
                    <p className="text-sm text-[var(--text-muted)]">覆盖 14个街道 · 50家工作室 · 多个界别</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'duties' && (
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6" style={{ fontFamily: "'Noto Serif SC', serif" }}>委员履职职责</h3>
                <div className="space-y-4">
                  {[
                    { num: '01', title: '政治协商', desc: '参与国家和地方大政方针及重要事务的协商讨论' },
                    { num: '02', title: '民主监督', desc: '对国家法律法规实施和重大方针政策贯彻执行进行监督' },
                    { num: '03', title: '参政议政', desc: '对政治、经济、文化和社会生活中的重要问题开展调查研究' },
                    { num: '04', title: '凝聚共识', desc: '密切联系各界群众，反映社情民意，化解矛盾纠纷' },
                    { num: '05', title: '提案工作', desc: '围绕中心工作撰写高质量提案，推动问题解决' },
                  ].map((duty) => (
                    <div key={duty.num} className="flex gap-5 p-5 bg-white rounded-xl border border-[var(--border-light)] card-hover group">
                      <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--primary-red)] to-[var(--primary-dark)] text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform">
                        {duty.num}
                      </span>
                      <div>
                        <h4 className="font-bold text-[var(--text-dark)] mb-1">{duty.title}</h4>
                        <p className="text-sm text-[var(--text-muted)]">{duty.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'activities' && (
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6" style={{ fontFamily: "'Noto Serif SC', serif" }}>活动风采</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden flex items-center justify-center border border-[var(--border-light)]">
                      <span className="text-4xl opacity-20">📷</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
