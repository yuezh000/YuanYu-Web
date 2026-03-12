import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '源语智能 - 可信任的AI伙伴，点亮你的创造力',
  description: '源语智能聚焦AI领域20年，诞生于复旦大学自然语言处理实验室，致力于赋能每一位科研工作者。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
