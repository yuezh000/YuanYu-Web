const values = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z" />
      </svg>
    ),
    title: '极速探索',
    subtitle: '全球学术资源"智慧雷达"',
    desc: '跨语言、跨数据库的对话式检索，毫秒级定位全球顶尖学术成果，让文献调研不再大海捞针。',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '深度洞察',
    subtitle: '复杂认知活动"超级助手"',
    desc: '自动识别研究空白、预测领域趋势，将海量文献中的隐藏规律转化为清晰可执行的科研洞见。',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: '高效创造',
    subtitle: '科研全链过程"自动驾驶"',
    desc: '从实验设计到论文写作，七步全链路智能代理，让科研工作者从繁重执行中解放，专注创新本身。',
  },
];

export default function CoreValues() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm text-primary font-medium tracking-wider uppercase">Why YuanYu</span>
        </div>
        <h2 className="section-title">为什么选择源语智能</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          探索 · 洞察 · 创造 —— 三大核心价值驱动科研范式革新
        </p>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="card-glow rounded-2xl p-5 sm:p-8 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{v.title}</h3>
              <p className="text-sm text-primary mb-3">{v.subtitle}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
