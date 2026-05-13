export default function Footer() {
  return (
    <footer className="bg-[var(--text-dark)] text-white/80 mt-16">
      {/* 装饰线 */}
      <div className="h-1 bg-gradient-to-r from-[var(--gold)] via-[var(--primary-red)] to-[var(--gold)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 左侧信息 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-red)] to-[var(--gold)] flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "'Noto Serif SC', serif" }}>政</span>
              </div>
              <div>
                <h3 className="font-bold text-white" style={{ fontFamily: "'Noto Serif SC', serif" }}>上城区政协</h3>
                <p className="text-xs text-white/50">CPPCC Shangcheng District</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              中国人民政治协商会议杭州市上城区委员会
            </p>
          </div>

          {/* 中间链接 */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">快速导航</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="/weiyuan-zhijia" className="hover:text-[var(--gold-light)] transition-colors">委员之家</a></li>
              <li><a href="/lvzhi-pingtai" className="hover:text-[var(--gold-light)] transition-colors">委员履职平台</a></li>
              <li><a href="/xingji-fengcai" className="hover:text-[var(--gold-light)] transition-colors">星级工作室风采</a></li>
              <li><a href="/lvzhi-jihua" className="hover:text-[var(--gold-light)] transition-colors">履职计划</a></li>
            </ul>
          </div>

          {/* 右侧联系 */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">联系我们</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              地址：浙江省杭州市上城区<br/>
              邮编：310000
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} 杭州市上城区政协 版权所有
          </p>
          <p className="text-xs text-white/30">
            凝聚共识 · 协商民主 · 服务发展
          </p>
        </div>
      </div>
    </footer>
  )
}
