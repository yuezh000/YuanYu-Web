const features = [
  {
    title: '智能文献检索',
    desc: '对话式搜索、跨语言翻译检索、复杂逻辑筛选',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: '深度文献阅读',
    desc: '一键生成论文摘要、核心贡献点提取、数据图表解读',
    gradient: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    title: '智能科研洞察',
    desc: '全域文献扫描、研究空白识别、领域趋势预测',
    gradient: 'from-teal-500/20 to-emerald-500/20',
  },
  {
    title: '实验方案设计',
    desc: '研究假设推演、实验流程规划、资源配置建议',
    gradient: 'from-emerald-500/20 to-green-500/20',
  },
  {
    title: '自动实验执行',
    desc: '学术代码生成、干实验仿真模拟、全自动任务流调度',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    title: '数据深度分析',
    desc: '原始数据处理、统计模型构建、科学图表一键绘制',
    gradient: 'from-purple-500/20 to-fuchsia-500/20',
  },
  {
    title: '论文协作撰写',
    desc: '结构化草稿生成、多语言语言润色、学术格式一键排版',
    gradient: 'from-fuchsia-500/20 to-pink-500/20',
  },
  {
    title: '个人知识管理',
    desc: '智能标签体系、云端同步、科研笔记关联',
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute left-0 right-0 top-0 gradient-line" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm text-primary font-medium tracking-wider uppercase">Features</span>
        </div>
        <h2 className="section-title">功能全景 · 八大核心能力</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          覆盖科研全链路的智能化能力矩阵
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group card-glow rounded-2xl p-6 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="text-xs text-primary/60 font-mono mb-3">0{i + 1}</div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
