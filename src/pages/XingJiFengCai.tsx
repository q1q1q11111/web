import { useState } from 'react'
import { Link } from 'react-router-dom'

// 星级工作室数据（基于JSON中的50家工作室）
const starStudios = [
  { rank: 1, name: '俞富康宋韵文化委员工作室', leader: '俞富康', stars: 5, highlight: '国际艺术文化交流，宋韵文化传承标杆' },
  { rank: 2, name: '"文润童心"委员工作室', leader: '周媛媛', stars: 5, highlight: '乡村优秀传统文化启蒙教育新路径探索' },
  { rank: 3, name: '"邻聚力"委员工作室', leader: '余丹凤', stars: 5, highlight: '社会公益慈善，"让每个孩子像花儿一样绽放"' },
  { rank: 4, name: '大健康委员工作室', leader: '谢慧淼', stars: 5, highlight: '传承国粹，践行公益，社区健康宣教义诊' },
  { rank: 5, name: '采荷街道"幸福19"委员工作室', leader: '赵丹晨', stars: 5, highlight: '"疗愈经济分享体验会"，创新活动模式' },
  { rank: 6, name: '张瑞旭委员工作室', leader: '张瑞旭', stars: 5, highlight: '跨代共融日活动，代际交流典范' },
  { rank: 7, name: '政协四季青小组委员工作室', leader: '李岗', stars: 5, highlight: '市区县三级联动专题协商' },
  { rank: 8, name: '春泥委员工作室', leader: '沈春妮', stars: 5, highlight: '两会期间迎新送福、送春联活动' },
  { rank: 9, name: '有意思委员工作室', leader: '方晓阳', stars: 5, highlight: '民生座谈会，听取社区居民意见建议' },
  { rank: 10, name: '爱馨文化公益委员工作室', leader: '杨洁', stars: 5, highlight: '杭州书房公益文化活动' },
]

const fourStarStudios = [
  { name: '政协湖滨小组委员工作室', leader: '查靖' },
  { name: '政协清波小组委员工作室', leader: '徐洁' },
  { name: '紫阳街道"三一"委员工作室', leader: '王盈' },
  { name: '工会界别委员工作室', leader: '蔡肇颖' },
  { name: '"老爸好商量"委员工作室', leader: '俞富根' },
  { name: '侨见未来委员工作室', leader: '胡晓敏' },
  { name: '全民阅读委员工作室', leader: '赵群伟' },
  { name: '健康九久委员工作室', leader: '李祖胜' },
  { name: '同心·共富委员工作室', leader: '吴韵' },
  { name: '茗荟聚智委员工作室', leader: '王容峰' },
  { name: '乐动新声委员工作室', leader: '俞宙' },
  { name: '"育共体 阳光行"委员工作室', leader: '王梦婷' },
  { name: '非遗委员工作室', leader: '胡志强' },
  { name: '智汇钱潮委员工作室', leader: '沈波' },
  { name: '商业服务智库委员工作室', leader: '姚华俊、黄晓芹' },
  { name: '宋韵老字号委员工作室', leader: '屠明珏' },
  { name: '幸福邻里委员工作室', leader: '尹兆青' },
]

export default function XingJiFengCai() {
  const [activeTab, setActiveTab] = useState<'five' | 'four' | 'three' | 'criteria'>('five')
  const [selectedStudio, setSelectedStudio] = useState<typeof starStudios[0] | null>(null)

  return (
    <div className="min-h-screen">
      {/* 页面头部 - 金色主题 */}
      <section className="relative bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-700 text-white py-16 md:py-24 overflow-hidden">
        {/* 装饰 */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="absolute text-3xl opacity-20 animate-float" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
            }}>🏆</span>
          ))}
          {/* 放射线 */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            {[...Array(16)].map((_, i) => (
              <line
                key={i}
                x1="50%" y1="100%"
                x2={`${50 + Math.cos((i * 22.5 - 90) * Math.PI / 180) * 120}%`}
                y2={`${50 + Math.sin((i * 22.5 - 90) * Math.PI / 180) * 120}%`}
                stroke="white" strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <Link to="/" className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6 transition-colors">
            ← 返回首页
          </Link>
          
          <span className="text-6xl md:text-7xl block mb-6">🏆</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            星级委员工作室风采
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">2025年度星级评定优秀成果展示 · 树立标杆 · 激励争先</p>

          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {[
              { num: '25', label: '五星级', icon: '⭐⭐⭐⭐⭐' },
              { num: '17', label: '四星级', icon: '⭐⭐⭐⭐' },
              { num: '4', label: '三星级', icon: '⭐⭐⭐' },
            ].map((s) => (
              <div key={s.label} className="bg-white/15 backdrop-blur-sm px-5 py-2.5 rounded-xl border border-white/20">
                <span className="text-2xl font-black">{s.num}</span>
                <span className="text-xs ml-2">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 内容 */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Tab 导航 */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 bg-white rounded-xl p-1.5 shadow-md border border-[var(--border-light)] w-fit min-w-max">
          {[
            { key: 'five' as const, label: `⭐⭐⭐⭐⭐ 五星级 (${starStudios.length})` },
            { key: 'four' as const, label: `⭐⭐⭐⭐ 四星级 (${fourStarStudios.length})` },
            { key: 'three' as const, label: '⭐⭐⭐ 三星级 (4)' },
            { key: 'criteria' as const, label: '📋 评定标准' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-dark)] hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ===== 五星级展示 ===== */}
        {activeTab === 'five' && (
          <div className="space-y-6 animate-fade-in">
            {/* 前三名特别展示 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {starStudios.slice(0, 3).map((studio, i) => (
                <div
                  key={studio.rank}
                  className={`relative bg-gradient-to-br ${
                    i === 0 ? 'from-yellow-400 to-amber-500' : i === 1 ? 'from-gray-300 to-gray-400' : 'from-orange-300 to-orange-400'
                  } rounded-2xl p-6 text-white card-hover overflow-hidden`}
                  onClick={() => setSelectedStudio(studio)}
                >
                  {/* 排名 */}
                  <div className={`absolute -top-2 -right-2 w-14 h-14 rounded-full flex items-center justify-center font-black text-xl shadow-lg ${
                    i === 0 ? 'bg-yellow-300 text-yellow-800' : i === 1 ? 'bg-gray-200 text-gray-700' : 'bg-orange-200 text-orange-800'
                  }`}>
                    #{i + 1}
                  </div>
                  
                  <div className="text-4xl mb-3">{'🥇🥈🥉'[i]}</div>
                  <h3 className="font-bold text-lg mb-1 leading-snug">{studio.name}</h3>
                  <p className="text-sm text-white/80 mb-2">负责人：{studio.leader}</p>
                  <p className="text-sm text-white/70 line-clamp-2">{studio.highlight}</p>
                </div>
              ))}
            </div>

            {/* 其余五星级 */}
            <h4 className="font-bold text-[var(--text-dark)] text-lg">其他五星级工作室</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {starStudios.slice(3).map((studio) => (
                <div
                  key={studio.rank}
                  onClick={() => setSelectedStudio(studio)}
                  className="bg-white p-5 rounded-xl border border-yellow-200 card-hover cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-50 to-transparent rounded-bl-full"></div>
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">⭐</span>
                      <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">#{studio.rank}</span>
                    </div>
                    <h5 className="font-semibold text-[var(--text-dark)] text-sm leading-snug group-hover:text-[var(--primary-red)] transition-colors line-clamp-2">
                      {studio.name}
                    </h5>
                    <p className="text-xs text-[var(--text-muted)] mt-1">👤 {studio.leader}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 详情模态框 */}
            {selectedStudio && (
              <div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                onClick={() => setSelectedStudio(null)}
              >
                <div
                  className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-fade-in-up"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button onClick={() => setSelectedStudio(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 transition-colors flex items-center justify-center">✕</button>
                  <div className="text-center mb-4">
                    <span className="text-4xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2 text-center" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    #{selectedStudio.rank} {selectedStudio.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] text-center mb-4">负责人：{selectedStudio.leader}</p>
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[var(--text-dark)] leading-relaxed"><strong>工作亮点：</strong>{selectedStudio.highlight}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===== 四星级展示 ===== */}
        {activeTab === 'four' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {fourStarStudios.map((studio) => (
                <div key={studio.name} className="bg-white p-5 rounded-xl border border-blue-200 card-hover">
                  <div className="flex items-center gap-2 mb-2">
                    <span>⭐⭐⭐⭐</span>
                  </div>
                  <h5 className="font-semibold text-[var(--text-dark)] text-sm leading-snug line-clamp-2">{studio.name}</h5>
                  <p className="text-xs text-[var(--text-muted)] mt-1">👤 {studio.leader}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== 三星级展示 ===== */}
        {activeTab === 'three' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl p-8 text-center border border-[var(--border-light)]">
              <span className="text-4xl block mb-4">⭐⭐⭐</span>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">三星级工作室</h3>
              <p className="text-[var(--text-muted)]">共 4 家三星级委员工作室，持续提升中...</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {['闸弄口街道"基层治理"委员工作室', '建和社区委员工作室', '杨柳郡社区委员工作室', '长睦幸福湾委员工作室'].map((name) => (
                  <div key={name} className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                    <p className="text-sm font-medium text-[var(--text-dark)] line-clamp-2">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== 评定标准 ===== */}
        {activeTab === 'criteria' && (
          <div className="animate-fade-in space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-[var(--border-light)] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6 title-decoration" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                📋 星级评定标准
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    stars: 5,
                    title: '五星级工作室',
                    criteria: ['年度履职活动≥12次', '提案质量高且获采纳', '群众满意度≥95%', '品牌特色鲜明，示范效应显著'],
                    color: 'from-yellow-400 to-amber-500',
                    textColor: 'text-yellow-700',
                    bgColor: 'bg-yellow-50',
                    borderColor: 'border-yellow-300'
                  },
                  {
                    stars: 4,
                    title: '四星级工作室',
                    criteria: ['年度履职活动≥8次', '提案质量较好', '群众满意度≥85%', '有一定品牌特色'],
                    color: 'from-blue-400 to-blue-600',
                    textColor: 'text-blue-700',
                    bgColor: 'bg-blue-50',
                    borderColor: 'border-blue-300'
                  },
                  {
                    stars: 3,
                    title: '三星级工作室',
                    criteria: ['年度履职活动≥4次', '基本完成履职任务', '群众满意度≥75%', '正常开展活动'],
                    color: 'from-emerald-400 to-emerald-600',
                    textColor: 'text-emerald-700',
                    bgColor: 'bg-emerald-50',
                    borderColor: 'border-emerald-300'
                  }
                ].map((level) => (
                  <div key={level.stars} className={`rounded-xl overflow-hidden ${level.bgColor} ${level.borderColor} border`}>
                    <div className={`bg-gradient-to-r ${level.color} px-6 py-3 flex items-center gap-3`}>
                      <span className="text-white font-bold text-lg">{'⭐'.repeat(level.stars)}</span>
                      <span className="text-white font-bold">{level.title}</span>
                    </div>
                    <ul className="p-6 space-y-3">
                      {level.criteria.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className={`w-5 h-5 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${level.stars > 4 ? 'text-red-600' : level.stars > 3 ? 'text-blue-600' : 'text-emerald-600'}`}>{i + 1}</span>
                          <span className="text-[var(--text-dark)]">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* PDF下载 */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border-light)] text-center">
              <a href="/data/星级工作室/工作室.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow">
                📄 下载完整星级评定报告（PDF）
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
