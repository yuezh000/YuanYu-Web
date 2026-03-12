export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
        {/* Orbit rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/3 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm mb-6 sm:mb-8 max-w-[90vw]">
          <span className="w-2 h-2 rounded-full bg-primary pulse-glow shrink-0" />
          <span className="truncate sm:whitespace-normal">诞生于复旦大学NLP实验室 · 聚焦AI领域20年</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 sm:mb-6">
          <span className="text-white">可信任的AI伙伴</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            点亮你的创造力
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          赋能每一位科研工作者，让学术探索更高效、更智能。
          <br className="hidden sm:block" />
          将确定性的重复认知劳动交给算力，将灵感发现交还给人类。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.qiewenpaper.com?utm_source=yuanyu-web"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
          >
            开始使用切问学术
          </a>
          <a
            href="#product"
            className="px-8 py-3.5 rounded-full border border-white/10 text-gray-300 font-medium text-base hover:border-primary/30 hover:text-white transition-all"
          >
            了解更多
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {[
            { num: '20+', label: 'AI领域深耕年数' },
            { num: '亿级', label: '全球学术文献覆盖' },
            { num: '7步', label: '科研全链路闭环' },
            { num: '秒级', label: '全球数据实时更新' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary glow-text">{s.num}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
