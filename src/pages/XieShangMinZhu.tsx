import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function XieShangMinZhu() {
  const [photos, setPhotos] = useState<string[]>([])
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'photos' | 'docs'>('overview')

  useEffect(() => {
    const photoList = Array.from({ length: 15 }, (_, i) =>
      `/data/分中心照片/分中心照片${i + 1}.webp`
    )
    setPhotos(photoList)
  }, [])

  return (
    <div className="min-h-screen">
      {/* 页面头部 */}
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border border-blue-300/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <Link to="/" className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6 transition-colors">
            ← 返回首页
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            🏢 协商民主实践中心
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">杭州市政协新时代协商民主实践中心 · 上城分中心</p>
        </div>
      </section>

      {/* 内容 */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Tab 导航 */}
        <div className="flex gap-2 mb-8 bg-white rounded-xl p-1.5 shadow-md border border-[var(--border-light)] w-fit">
          {[
            { key: 'overview' as const, label: '分中心概况' },
            { key: 'photos' as const, label: '活动照片' },
            { key: 'docs' as const, label: '相关文件' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-[var(--primary-red)] text-white shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-dark)] hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 概况 Tab */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in space-y-8">
            {/* 基本情况卡片 */}
            <div className="bg-white rounded-2xl shadow-xl border border-[var(--border-light)] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6 title-decoration" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                上城区分中心基本情况
              </h3>

              <div className="prose prose-lg text-[var(--text-muted)] leading-relaxed space-y-4">
                <p>
                  杭州市政协新时代协商民主实践中心上城分中心是上城区政协深入贯彻习近平总书记关于加强和改进人民政协工作的重要思想，按照市政协统一部署建设的综合性履职平台。
                </p>
                <p>
                  分中心坚持<strong className="text-[var(--text-dark)]">"协商于民、协商为民"</strong>的工作理念，围绕区域经济社会发展中的重点难点问题，组织委员开展多层次、多形式的协商议政活动。
                </p>
              </div>

              {/* 核心数据 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {[
                  { label: '年度计划', value: '12+', unit: '项' },
                  { label: '覆盖街道', value: '14', unit: '个' },
                  { label: '参与委员', value: '200+', unit: '人次' },
                  { label: '活动照片', value: '15', unit: '张' },
                ].map((item) => (
                  <div key={item.label} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-700">{item.value}<span className="text-sm ml-0.5">{item.unit}</span></div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border-light)] flex gap-3 flex-wrap">
                <a
                  href="/data/协商民主实践中心/2026杭州市政协新时代协商民主实践中心上城区分中心基本情况.docx"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
                >
                  📄 分中心基本情况（Word）
                </a>
                <a
                  href="/data/协商民主实践中心/上城区实践分中心活动计划.docx"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  📅 活动计划（Word）
                </a>
              </div>
            </div>

            {/* 特色亮点 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎯',
                  title: '精准选题',
                  desc: '聚焦民生热点，精准确定年度协商议题，确保协商活动有的放矢。',
                  color: 'from-blue-500 to-blue-700'
                },
                {
                  icon: '👥',
                  title: '多方参与',
                  desc: '邀请政府部门、专家学者、基层群众等多方主体参与，形成合力。',
                  color: 'from-indigo-500 to-indigo-700'
                },
                {
                  icon: '📋',
                  title: '闭环管理',
                  desc: '建立协商成果跟踪落实机制，确保协商建议落地见效，形成工作闭环。',
                  color: 'from-cyan-500 to-cyan-700'
                },
              ].map((item) => (
                <div key={item.title} className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-white card-hover`}>
                  <span className="text-3xl">{item.icon}</span>
                  <h4 className="font-bold mt-3 mb-2">{item.title}</h4>
                  <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 照片 Tab */}
        {activeTab === 'photos' && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-[var(--text-dark)] mb-6">📸 分中心活动照片</h3>
            <div className="photo-grid">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhoto(photo)}
                  className="aspect-video rounded-xl overflow-hidden bg-gray-100 relative group card-hover"
                >
                  <img
                    src={photo}
                    alt={`分中心照片 ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                      ;(e.target as HTMLElement).parentElement!.innerHTML = '<span class="text-4xl opacity-30">📷</span>'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-xs font-medium">照片 {index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 文件 Tab */}
        {activeTab === 'docs' && (
          <div className="animate-fade-in space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-dark)] mb-6">📂 相关文件</h3>
            {[
              { name: '2026杭州市政协新时代协商民主实践中心上城区分中心基本情况.docx', type: 'Word文档', icon: '📝' },
              { name: '上城区实践分中心活动计划.docx', type: 'Word文档', icon: '📅' },
              { name: '2.街道委员小组委员名单.xlsx', type: 'Excel表格', icon: '📊' },
            ].map((file) => (
              <a
                key={file.name}
                href={`/data/协商民主实践中心/${file.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--border-light)] card-hover group"
              >
                <span className="text-3xl">{file.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[var(--text-dark)] truncate group-hover:text-[var(--primary-red)] transition-colors">{file.name.replace(/\.\w+$/, '')}</p>
                  <p className="text-sm text-[var(--text-muted)]">{file.type}</p>
                </div>
                <svg className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--primary-red)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
