import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// 动态导入界别照片
const photoCount = 50

export default function JieBieQingKuang() {
  const [photos, setPhotos] = useState<string[]>([])
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 生成照片列表
    const photoList = Array.from({ length: photoCount }, (_, i) => `/data/界别照片/界别活动照片${i + 1}.webp`)
    setPhotos(photoList)
    setLoading(false)
  }, [])

  return (
    <div className="min-h-screen">
      {/* 页面头部 */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-emerald-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-emerald-300/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <Link to="/" className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6 transition-colors">
            ← 返回首页
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            📊 界别基本情况
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">各界别情况介绍与活动照片集锦</p>
          
          <div className="flex gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-black text-[var(--gold-light)]">{photoCount}</div>
              <div className="text-xs text-white/55 mt-1">张活动照片</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-[var(--gold-light)]">多</div>
              <div className="text-xs text-white/55 mt-1">个界别覆盖</div>
            </div>
          </div>
        </div>
      </section>

      {/* 内容 */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* 界别介绍卡片 */}
        <div className="bg-white rounded-2xl shadow-xl border border-[var(--border-light)] p-8 md:p-10 mb-10 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6 title-decoration" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            各界别概况
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: '中国共产党界', color: 'from-red-500 to-red-700', icon: '🚩' },
              { name: '民主党派界', color: 'from-blue-500 to-blue-700', icon: '🤝' },
              { name: '无党派人士界', color: 'from-purple-500 to-purple-700', icon: '🌟' },
              { name: '共青团与青联界', color: 'from-green-500 to-green-700', icon: '🌱' },
              { name: '工会界', color: 'from-orange-500 to-orange-700', icon: '👷' },
              { name: '妇联界', color: 'from-pink-400 to-pink-600', icon: '👩' },
              { name: '工商界', color: 'from-yellow-500 to-yellow-700', icon: '💼' },
              { name: '科学技术界', color: 'from-cyan-500 to-cyan-700', icon: '🔬' },
              { name: '教育界', color: 'from-indigo-500 to-indigo-700', icon: '📚' },
              { name: '文化艺术界', color: 'from-fuchsia-500 to-fuchsia-700', icon: '🎭' },
              { name: '医疗卫生界', color: 'from-teal-500 to-teal-700', icon: '🏥' },
              { name: '社会福利和社会保障界', color: 'from-rose-500 to-rose-700', icon: '❤️' },
            ].map((sector) => (
              <div key={sector.name} className={`flex items-center gap-3 p-4 bg-gradient-to-r ${sector.color} rounded-xl text-white card-hover`}>
                <span className="text-2xl">{sector.icon}</span>
                <span className="font-medium">{sector.name}</span>
              </div>
            ))}
          </div>

          {/* 文件下载 */}
          <div className="mt-8 pt-6 border-t border-[var(--border-light)]">
            <a href="/data/界别基本情况/1.各界别情况介绍.docx" download className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-md">
              📄 下载各界别情况介绍（Word文档）
            </a>
          </div>
        </div>

        {/* 照片画廊 */}
        <div className="animate-fade-in-up delay-200" style={{ animationFillMode: 'forwards' }}>
          <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            📸 活动照片集锦
          </h3>
          
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="photo-grid">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhoto(photo)}
                  className="aspect-square rounded-xl overflow-hidden bg-gray-100 relative group card-hover"
                  style={{ animationDelay: `${Math.min(index * 0.03, 1)}s` }}
                >
                  <img
                    src={photo}
                    alt={`界别活动照片 ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                      ;(e.target as HTMLElement).parentElement!.classList.add('flex', 'items-center', 'justify-center')
                      ;(e.target as HTMLElement).parentElement!.innerHTML = '<span class="text-4xl opacity-30">📷</span>'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-xs font-medium">照片 {index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 图片预览模态框 */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl z-10 transition-colors"
          >
            ✕
          </button>
          <img
            src={selectedPhoto}
            alt="预览"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
