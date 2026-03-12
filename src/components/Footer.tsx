export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-white font-bold text-[10px]">
            源
          </div>
          <span className="text-sm font-semibold text-white">源语智能</span>
        </div>
        <span>&copy; {new Date().getFullYear()} 上海源语真解智能科技有限公司. All rights reserved.</span>
        <a
          href="mailto:info@atominnolab.com"
          className="hover:text-gray-400 transition-colors"
        >
          info@atominnolab.com
        </a>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          沪ICP备2025110110号-2
        </a>
      </div>
    </footer>
  );
}
