import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import studioData from '../../public/data/5履职平台.json'

interface Studio {
  id: number
  name: string
  leader: string
  address: string
}

interface StudioData {
  title: string
  district: string
  city: string
  overview: string
  statistics: {
    total_studios: number
    coverage: string
    annual_rating: boolean
    star_ratings_2025: {
      five_star: number
      four_star: number
      three_star: number
    }
  }
  studios: Studio[]
}

const photoList = [
  '/data/履职平台照片/1-政协湖滨小组委员工作室-学习考察新质生产力一-万事利科创中心.webp',
  '/data/履职平台照片/2-政协清波小组委员工作室-幸福清波，文化送福，联动中国美院为清波派出所、禁毒所、清波居民送新年祝福.webp',
  '/data/履职平台照片/3-政协紫阳"三一"委员工作室-践行"委员说·委员做"，锚定"两个先行"目标，领跑"基层白治"之路.webp',
  '/data/履职平台照片/4-采荷街道"幸福19"委员工作室-"疗愈经济分享体验会"活动.webp',
  '/data/履职平台照片/5-政协四季青小组委员工作室-市区县三级联动，召开"投早投小投科技"专题协商会.webp',
  '/data/履职平台照片/6-政协彭埠小组委员工作室-邀请非遗传承人开展非遗制作体验活动.webp',
  '/data/履职平台照片/7-工会界别委员工作室-开展"美丽大讲堂"活动.webp',
  '/data/履职平台照片/8-社会福利和保障界别委员工作室-残疾人之家的义卖活动.webp',
  '/data/履职平台照片/9-"文润童心"委员工作室-传承和弘扬中华优秀传统文化，探索乡村优秀传统文化启蒙教育新路径.webp',
  '/data/履职平台照片/10-全民阅读委员工作室-举办宋韵美学体验活动.webp',
  '/data/履职平台照片/11-爱馨文化公益委员工作室-爱馨文化公益委员工作室.webp',
  '/data/履职平台照片/12-"老爸好商量"委员工作室-发扬重视家庭教育优良传统，助力孩子健康快乐成长，举办亲子运动会.webp',
  '/data/履职平台照片/13-有意思委员工作室-工作室委员与社区居民代表召开民生座谈会，听取居民对小区提升、菜场改造、停车难等问题的意见建议.webp',
  '/data/履职平台照片/14-侨见未来委员工作室-关于社区居民空调安装纠纷的专项协商会.webp',
  '/data/履职平台照片/15-张瑞旭委员工作室-举办委员工作室跨代共融日活动.webp',
  '/data/履职平台照片/16-大健康委员工作室-传承国粹，践行公益，走进社区开展健康宣教义诊活动.webp',
  '/data/履职平台照片/17-俞富康宋韵文化委员工作室-国际艺术交流送中国"福".webp',
  '/data/履职平台照片/18-春泥委员工作室-两会期间迎新送福、送春联.webp',
  '/data/履职平台照片/19-"邻聚力"委员工作室-凝聚社会公益慈善之心，开展"让每个孩子像花儿一样绽放"主题论坛.webp',
  '/data/履职平台照片/20-建和社区委员工作室-党建引领，做好点滴惠民小事，走访慰问九和人家独居老人.webp',
  '/data/履职平台照片/21-健康九久委员工作室-召开健康普及专题座谈会.webp',
  '/data/履职平台照片/22-同心·共富委员工作室-举行"乡村音乐节"，用实用管用的好点子，助力乡村振兴.webp',
  '/data/履职平台照片/23-茗荟聚智委员工作室-开展"茶韵议事"交流活动.webp',
  '/data/履职平台照片/24-"育共体 阳光行"委员工作室-"小小政协委员"青少年模拟政协活动.webp',
  '/data/履职平台照片/25-乐动新声委员工作室-委员工作室.webp',
]

export default function LvZhiPingTai() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState<'overview' | 'studios' | 'photos' | 'docs'>('overview')
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [filteredStudios, setFilteredStudios] = useState<Studio[]>([])
  const [selectedStudio, setSelectedStudio] = useState<Studio | null>(null)

  const data = studioData as unknown as StudioData

  useEffect(() => {
    if (data?.studios) {
      const filtered = data.studios.filter(
        (s) =>
          s.name.includes(searchTerm) ||
          s.leader.includes(searchTerm) ||
          s.address.includes(searchTerm)
      )
      setFilteredStudios(filtered)
    }
  }, [searchTerm, data])

  return (
    <div className="min-h-screen">
      {/* 页面头部 */}
      <section className="relative bg-gradient-to-br from-orange-700 via-red-700 to-red-900 text-white py-16 md:py-24 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -left-10 w-[500px] h-[500px] rounded-full border-2 border-yellow-300/20"></div>
          <div className="absolute top-1/2 right-0 translate-x-1/3 w-[400px] h-[400px] rounded-full border-2 border-orange-300/15"></div>
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full border border-red-300/10"></div>
          {/* 星星装饰 */}
          {[...Array(8)].map((_, i) => (
            <span key={i} className="absolute text-2xl animate-float opacity-30" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}>⭐</span>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <Link to="/" className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6 transition-colors">
            ← 返回首页
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">⭐</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                委员履职平台
              </h1>
              <p className="text-lg text-white/70">{data?.title || '上城区政协委员工作室履职平台'}</p>
            </div>
          </div>

          {/* 统计数据 */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10">
              <div className="text-3xl font-black text-[var(--gold-light)]">{data?.statistics?.total_studios || 50}</div>
              <div className="text-xs text-white/55">委员工作室</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10">
              <div className="text-3xl font-black text-yellow-300">{data?.statistics?.star_ratings_2025?.five_star || 25} ⭐⭐⭐⭐⭐</div>
              <div className="text-xs text-white/55">五星级</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10">
              <div className="text-3xl font-black text-blue-300">{data?.statistics?.star_ratings_2025?.four_star || 17} ⭐⭐⭐⭐</div>
              <div className="text-xs text-white/55">四星级</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10">
              <div className="text-3xl font-black text-green-300">{data?.statistics?.star_ratings_2025?.three_star || 4} ⭐⭐⭐</div>
              <div className="text-xs text-white/55">三星级</div>
            </div>
          </div>
        </div>
      </section>

      {/* 内容区域 */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Tab 导航 */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 bg-white rounded-xl p-1.5 shadow-md border border-[var(--border-light)] w-fit min-w-max">
          {[
            { key: 'overview' as const, label: '📋 平台概况', icon: '📋' },
            { key: 'studios' as const, label: '⭐ 工作室名录', icon: '⭐' },
            { key: 'photos' as const, label: '📸 风采展示', icon: '📸' },
            { key: 'docs' as const, label: '📂 相关文件', icon: '📂' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-[var(--primary-red)] to-red-800 text-white shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-dark)] hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ===== 概况 Tab ===== */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in space-y-8">
            {/* 平台介绍 */}
            <div className="bg-white rounded-2xl shadow-xl border border-[var(--border-light)] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6 title-decoration" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                平台简介
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-base">
                {data?.overview}
              </p>

              {/* 品牌特色 */}
              <div className="mt-10">
                <h4 className="font-bold text-[var(--text-dark)] mb-4 flex items-center gap-2">
                  ✦ "一室一品"品牌建设
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: '楼宇商圈', icon: '🏢', desc: '服务楼宇经济高质量发展' },
                    { name: '宋韵文化', icon: '🎭', desc: '传承弘扬优秀传统文化' },
                    { name: '全龄特有爱', icon: '❤️', desc: '公益慈善覆盖全龄群体' },
                  ].map((brand) => (
                    <div key={brand.name} className="bg-gradient-to-br from-red-50 to-amber-50 p-5 rounded-xl border border-[var(--border-light)] card-hover">
                      <span className="text-2xl">{brand.icon}</span>
                      <h5 className="font-bold text-[var(--text-dark)] mt-2">{brand.name}</h5>
                      <p className="text-sm text-[var(--text-muted)] mt-1">{brand.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 星级评定饼图示意 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl border border-[var(--border-light)] p-8">
                <h4 className="font-bold text-[var(--text-dark)] mb-6">🏆 2025年度星级评定</h4>
                <div className="space-y-4">
                  {[
                    { star: 5, count: data?.statistics?.star_ratings_2025?.five_star || 25, color: 'from-yellow-400 to-amber-500', pct: 54 },
                    { star: 4, count: data?.statistics?.star_ratings_2025?.four_star || 17, color: 'from-blue-400 to-blue-600', pct: 37 },
                    { star: 3, count: data?.statistics?.star_ratings_2025?.three_star || 4, color: 'from-emerald-400 to-emerald-600', pct: 9 },
                  ].map((item) => (
                    <div key={item.star}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-[var(--text-dark)]">
                          {'⭐'.repeat(item.star)} 星级工作室
                        </span>
                        <span className="text-[var(--text-muted)]">{item.count} 家 ({item.pct}%)</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.pct}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-[var(--border-light)] p-8">
                <h4 className="font-bold text-[var(--text-dark)] mb-6">📊 覆盖情况</h4>
                <div className="space-y-5">
                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">✓</span>
                      <span className="font-medium text-[var(--text-dark)]">街道委员小组全覆盖</span>
                    </div>
                    <span className="text-emerald-600 font-bold">已达成</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">✓</span>
                      <span className="font-medium text-[var(--text-dark)]">年度星级评定机制</span>
                    </div>
                    <span className="text-blue-600 font-bold">正常运行</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 bg-amber-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">✓</span>
                      <span className="font-medium text-[var(--text-dark)]">一室一品特色打造</span>
                    </div>
                    <span className="text-amber-600 font-bold">持续推进</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== 工作室名录 Tab ===== */}
        {activeTab === 'studios' && (
          <div className="animate-fade-in space-y-6">
            {/* 搜索框 */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="搜索工作室名称、负责人或地址..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-[var(--border-light)] rounded-xl focus:outline-none focus:border-[var(--primary-red)] focus:ring-2 focus:ring-red-100 text-sm transition-all"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchTerm && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] bg-gray-100 px-2 py-1 rounded">
                  {filteredStudios.length} 条结果
                </span>
              )}
            </div>

            {/* 工作室列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredStudios.map((studio, index) => (
                <button
                  key={studio.id}
                  onClick={() => setSelectedStudio(selectedStudio?.id === studio.id ? null : studio)}
                  className={`text-left p-5 bg-white rounded-xl border transition-all duration-300 card-hover ${
                    selectedStudio?.id === studio.id ? 'border-[var(--primary-red)] ring-1 ring-red-200 shadow-md' : 'border-[var(--border-light)]'
                  }`}
                  style={{ animationDelay: `${Math.min(index * 0.02, 0.5)}s` }}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary-red)] to-[var(--primary-dark)] text-white flex items-center justify-center text-sm font-bold shadow">
                      {studio.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-[var(--text-dark)] leading-snug line-clamp-2 group-hover:text-[var(--primary-red)] transition-colors">
                        {studio.name}
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        👤 负责人：{studio.leader}
                      </p>
                      
                      {selectedStudio?.id === studio.id && (
                        <div className="mt-3 pt-3 border-t border-[var(--border-light)] animate-fade-in">
                          <p className="text-xs text-[var(--text-muted)]">
                            📍 {studio.address}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {!searchTerm && filteredStudios.length === 0 && (
              <div className="text-center py-12 text-[var(--text-muted)]">
                <span className="text-4xl mb-4 block">📭</span>
                暂无数据
              </div>
            )}

            {searchTerm && filteredStudios.length === 0 && (
              <div className="text-center py-12 text-[var(--text-muted)]">
                <span className="text-4xl mb-4 block">🔍</span>
                未找到匹配的工作室
              </div>
            )}
          </div>
        )}

        {/* ===== 风采照片 Tab ===== */}
        {activeTab === 'photos' && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[var(--text-dark)]">📸 委员工作室风采展示</h3>
              <span className="text-sm text-[var(--text-muted)]">{photoList.length} 张照片</span>
            </div>
            
            <div className="photo-grid">
              {photoList.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhoto(photo)}
                  className="aspect-video rounded-xl overflow-hidden bg-gray-100 relative group card-hover"
                  style={{ animationDelay: `${Math.min(index * 0.03, 0.6)}s` }}
                >
                  <img
                    src={photo}
                    alt={`工作室风采 ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = 'none'
                      const parent = (e.target as HTMLElement).parentElement!
                      parent.classList.add('flex', 'items-center', 'justify-center')
                      parent.innerHTML = '<span class="text-4xl opacity-30">📷</span>'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                    <span className="text-white text-xs font-medium line-clamp-2">
                      {photo.split('/').pop()?.replace(/-/g, ' ').replace('.webp', '').replace(/^\d+-/, '')}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ===== 相关文件 Tab ===== */}
        {activeTab === 'docs' && (
          <div className="animate-fade-in space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-dark)] mb-6">📂 相关文件下载</h3>
            {[
              { name: '0.履职平台简介202603.docx', type: 'Word文档', desc: '委员履职平台详细介绍' },
              { name: '1.2026上城区政协委员工作室名单(按成立顺序).xlsx', type: 'Excel表格', desc: '50家工作室完整名单' },
              { name: '2.街道委员小组委员名单.xlsx', type: 'Excel表格', desc: '各街道委员小组人员名单' },
              { name: '之前做的折页，照片都在上面，供参考.webp', type: '图片', desc: '参考折页设计稿' },
            ].map((file) => (
              <a
                key={file.name}
                href={`/data/履职平台/${file.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--border-light)] card-hover group"
              >
                <span className="text-3xl flex-shrink-0">{file.type === 'Word文档' ? '📝' : file.type === 'Excel表格' ? '📊' : '🖼️'}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[var(--text-dark)] truncate group-hover:text-[var(--primary-red)] transition-colors">{file.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">{file.desc} · {file.type}</p>
                </div>
                <svg className="w-5 h-5 text-[var(--text-muted)] flex-shrink-0 group-hover:text-[var(--primary-red)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* 图片预览模态框 */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <button onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl z-10 transition-colors">✕</button>
          <img src={selectedPhoto} alt="预览" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  )
}
