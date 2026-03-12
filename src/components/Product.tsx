const steps = [
  { step: '01', label: '文献检索', icon: '🔍' },
  { step: '02', label: '论文阅读', icon: '📖' },
  { step: '03', label: '问题发现', icon: '💡' },
  { step: '04', label: '实验设计', icon: '🧪' },
  { step: '05', label: '实验执行', icon: '⚙️' },
  { step: '06', label: '数据分析', icon: '📊' },
  { step: '07', label: '论文写作', icon: '✍️' },
];

const painPoints = [
  { hours: '18.7h', desc: '整理文献、筛选摘要' },
  { hours: '13.4h', desc: '处理数据、清洗表格' },
  { hours: '11.2h', desc: '代码调试、环境配置' },
  { hours: '7.8h', desc: '排版、图表、参考文献' },
  { hours: '<5h', desc: '真正用于创新思考', highlight: true },
];

export default function Product() {
  return (
    <section id="product" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute left-0 right-0 top-0 gradient-line" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm text-primary font-medium tracking-wider uppercase">Product</span>
        </div>
        <h2 className="section-title">切问学术 · 全链路科研加速器</h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          智能体在给定研究任务后的七大环节中实现闭环与自动驾驶
        </p>

        {/* 7-step pipeline */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-12 sm:mb-20">
          {steps.map((s) => (
            <div key={s.step} className="card-glow rounded-xl px-3 sm:px-5 py-3 sm:py-4 text-center transition-all duration-300">
              <div className="text-xl sm:text-2xl mb-1">{s.icon}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5">STEP {s.step}</div>
              <div className="text-xs sm:text-sm font-semibold text-white">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Pain points */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white text-center mb-2">科研人员的时间困境</h3>
          <p className="text-center text-gray-500 text-sm mb-8">中国科研信息化发展报告2026</p>
          <div className="space-y-3">
            {painPoints.map((p) => (
              <div
                key={p.desc}
                className={`flex items-center gap-3 sm:gap-4 rounded-xl px-4 sm:px-6 py-3 sm:py-4 ${
                  p.highlight
                    ? 'bg-primary/10 border border-primary/30'
                    : 'bg-white/[0.02] border border-white/5'
                }`}
              >
                <div className={`text-lg sm:text-2xl font-bold shrink-0 w-14 sm:w-20 ${p.highlight ? 'text-primary' : 'text-gray-500'}`}>
                  {p.hours}
                </div>
                <div className="flex-1">
                  <div className={`h-2 rounded-full ${p.highlight ? 'bg-primary/30' : 'bg-white/5'}`}>
                    <div
                      className={`h-full rounded-full ${p.highlight ? 'bg-primary' : 'bg-gray-600'}`}
                      style={{
                        width: p.highlight ? '15%' : `${(parseFloat(p.hours) / 20) * 100}%`,
                      }}
                    />
                  </div>
                  <p className={`text-sm mt-1 ${p.highlight ? 'text-primary font-medium' : 'text-gray-400'}`}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target users */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {['高校学生', '学术研究人员', '医生', '企业R&D团队', '情报分析师'].map((u) => (
            <span
              key={u}
              className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm text-gray-400"
            >
              {u}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
