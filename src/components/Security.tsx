export default function Security() {
  return (
    <section id="security" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute left-0 right-0 top-0 gradient-line" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm text-primary font-medium tracking-wider uppercase">Security & Service</span>
        </div>
        <h2 className="section-title">安全与服务保障</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          企业级安全防护与全方位客户成功体系
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-glow rounded-2xl p-5 sm:p-8 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">数据安全与隐私</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                企业级端到端加密，保护研究课题与科研成果不泄露
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                严格遵循数据合规标准，保障用户隐私安全
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                独立数据隔离环境，确保机构间数据零交叉
              </li>
            </ul>
          </div>

          <div className="card-glow rounded-2xl p-5 sm:p-8 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">客户成功体系</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                专属客服团队，提供一对一技术支持与咨询
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                专家培训服务，帮助团队快速上手并深度使用
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                定制化解决方案，匹配不同机构的个性化需求
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
