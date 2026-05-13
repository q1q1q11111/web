import { useState } from 'react'
import { Link } from 'react-router-dom'

const streets = [
  { name: '湖滨街道', desc: '位于上城区核心商业区域，委员小组活跃度高' },
  { name: '清波街道', desc: '历史文化底蕴深厚，宋韵文化活动丰富' },
  { name: '小营街道', desc: '红巷精神发源地，基层治理创新示范街道' },
  { name: '望江街道', desc: '老旧小区改造与城市更新重点区域' },
  { name: '南星街道', desc: '创意产业集聚，楼宇经济特色鲜明' },
  { name: '紫阳街道', desc: '"三一"工作模式创新实践地' },
  { name: '闸弄口街道', desc: '基层治理委员工作室标杆' },
  { name: '凯旋街道', desc: '社区服务与民生改善成效显著' },
  { name: '采荷街道', desc: '"幸福19"品牌委员工作室所在地' },
  { name: '四季青街道', desc: '金融商务核心区，协商活动频繁' },
  { name: '笕桥街道', desc: '城乡结合部转型发展代表' },
  { name: '彭埠街道', desc: '东站枢纽辐射区，非遗文化传承' },
  { name: '九堡街道', desc: '电商直播产业集聚，新业态活跃' },
  { name: '丁兰街道', desc: '智慧社区建设先行示范区' },
]

export default function JieDaoXiaoZu() {
  const [selectedStreet, setSelectedStreet] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      {/* 页面头部 */}
      <section className="relative bg-gradient-to-br from-amber-700 to-amber-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-[var(--gold)]/30"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full border border-[var(--gold)]/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <Link to="/" className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6 transition-colors">
            ← 返回首页
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            👥 街道委员小组
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">14个街道委员小组全覆盖，构建基层政协工作网络</p>

          {/* 统计 */}
          <div className="flex flex-wrap gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-black text-[var(--gold-light)]">14</div>
              <div className="text-xs text-white/55 mt-1">个街道</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-[var(--gold-light)]">100%</div>
              <div className="text-xs text-white/55 mt-1">覆盖率</div>
            </div>
          </div>
        </div>
      </section>

      {/* 内容 */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：街道列表 */}
          <div className="lg:col-span-2 space-y-3">
            {streets.map((street, index) => (
              <button
                key={street.name}
                onClick={() => setSelectedStreet(selectedStreet === street.name ? null : street.name)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 card-hover ${
                  selectedStreet === street.name
                    ? 'bg-amber-50 border-[var(--gold)] shadow-md'
                    : 'bg-white border-[var(--border-light)] hover:border-amber-200'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                      selectedStreet === street.name ? 'bg-[var(--primary-red)] text-white' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-[var(--text-dark)]">{street.name}委员小组</h3>
                      <p className="text-sm text-[var(--text-muted)] mt-0.5">{street.desc}</p>
                    </div>
                  </div>
                  <svg
                    className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${selectedStreet === street.name ? 'rotate-180 text-[var(--primary-red)]' : 'text-[var(--text-muted)]'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* 展开详情 */}
                {selectedStreet === street.name && (
                  <div className="mt-4 pt-4 border-t border-amber-200/50 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-[var(--text-muted)]">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span> 委员小组已建立
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-muted)]">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span> 履职活动正常开展
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-muted)]">
                        <span className="w-2 h-2 bg-amber-400 rounded-full"></span> 民生议事堂已设立
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-muted)]">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span> 工作室挂牌运行
                      </div>
                    </div>
                    
                    <a
                      href="/data/街道委员小组/14个街道.pdf"
                      download
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[var(--primary-red)] text-white text-sm font-medium rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
                    >
                      📄 下载完整名单（PDF）
                    </a>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* 右侧：信息卡片 */}
          <div className="space-y-6">
            {/* 文件下载卡片 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/50">
              <h3 className="font-bold text-[var(--text-dark)] mb-3 flex items-center gap-2">
                📄 相关文件
              </h3>
              <a
                href="/data/街道委员小组/14个街道.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[var(--border-light)] card-hover group"
              >
                <span className="text-2xl">📋</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--text-dark)] truncate group-hover:text-[var(--primary-red)] transition-colors">14个街道委员小组名单</p>
                  <p className="text-xs text-[var(--text-muted)]">PDF 文档</p>
                </div>
                <svg className="w-4 h-4 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* 覆盖地图示意 */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border-light)] shadow-sm">
              <h3 className="font-bold text-[var(--text-dark)] mb-4">📍 区域覆盖</h3>
              <div className="aspect-square bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 rounded-xl relative overflow-hidden border border-[var(--border-light)]">
                {/* 模拟地图点阵 */}
                {Array.from({ length: 14 }).map((_, i) => {
                  const row = Math.floor(i / 4)
                  const col = i % 4
                  return (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-[var(--primary-red)] rounded-full animate-float shadow-md"
                      style={{
                        left: `${15 + col * 22 + (row % 2) * 8}%`,
                        top: `${15 + row * 18}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                      title={streets[i]?.name}
                    ></div>
                  )
                })}
                <div className="absolute bottom-3 left-0 right-0 text-center text-xs text-[var(--text-muted)]">
                  上城区 14 个街道全覆盖
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
