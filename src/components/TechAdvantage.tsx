const advantages = [
  {
    num: '01',
    title: '卓越的即时学习力',
    desc: '首创评估体系，确保AI告别死记硬背，实现文献"现学现用"。',
  },
  {
    num: '02',
    title: '定义行业标准',
    desc: '深耕底层对齐算法，核心技术已被全球主流AI开发平台官方集成。',
  },
  {
    num: '03',
    title: '以小博大的极限性能',
    desc: '轻量化模型在逻辑推理与任务执行上，可媲美顶尖商业大模型。',
  },
  {
    num: '04',
    title: '科研成本精准导航',
    desc: '具备领先的能力预测技术，在研发早期即可预判效果，显著节省算力与资源。',
  },
];

export default function TechAdvantage() {
  return (
    <section id="tech" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute left-0 right-0 top-0 gradient-line" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm text-primary font-medium tracking-wider uppercase">Hard-Core R&D</span>
        </div>
        <h2 className="section-title">硬核驱动</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          汇聚AI资深学者与算法专家，以顶尖科研实力构筑技术护城河
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((a) => (
            <div
              key={a.num}
              className="card-glow rounded-2xl p-5 sm:p-8 flex gap-4 sm:gap-6 items-start transition-all duration-300"
            >
              <div className="text-4xl font-black text-primary/20 shrink-0 leading-none">
                {a.num}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
