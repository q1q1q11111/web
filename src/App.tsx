import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import WeiYuanZhiJia from './pages/WeiYuanZhiJia'
import JieDaoXiaoZu from './pages/JieDaoXiaoZu'
import JieBieQingKuang from './pages/JieBieQingKuang'
import XieShangMinZhu from './pages/XieShangMinZhu'
import LvZhiPingTai from './pages/LvZhiPingTai'
import XingJiFengCai from './pages/XingJiFengCai'
import LvZhiJiHua from './pages/LvZhiJiHua'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-cream)]">
        <div className="text-center animate-fade-in-up">
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="absolute inset-0 border-4 border-[var(--gold-light)] rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-[var(--primary-red)] rounded-full animate-spin"></div>
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[var(--primary-red)]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              政
            </span>
          </div>
          <p className="text-[var(--text-muted)] text-sm tracking-widest">上城区政协</p>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-pattern flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weiyuan-zhijia" element={<WeiYuanZhiJia />} />
            <Route path="/jiedao-xiaozu" element={<JieDaoXiaoZu />} />
            <Route path="/jiebie-qingkuang" element={<JieBieQingKuang />} />
            <Route path="/xieshang-minzhu" element={<XieShangMinZhu />} />
            <Route path="/lvzhi-pingtai" element={<LvZhiPingTai />} />
            <Route path="/xingji-fengcai" element={<XingJiFengCai />} />
            <Route path="/lvzhi-jihua" element={<LvZhiJiHua />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
