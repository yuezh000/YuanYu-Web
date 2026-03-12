export default function CTA() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute left-0 right-0 top-0 gradient-line" />

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
          开启
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            科研新范式
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          让科研工作者回归"定义问题的人"。
        </p>
        <p className="text-base text-gray-500 max-w-xl mx-auto mb-10">
          科学家从"泥瓦匠"转变为"架构师" —— 切问学术负责七步流程的执行，人类负责关键节点的方向把控。
        </p>

        <a
          href="https://www.qiewenpaper.com?utm_source=yuanyu-web"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-primary text-white font-semibold text-base sm:text-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/30"
        >
          立即体验切问学术
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
