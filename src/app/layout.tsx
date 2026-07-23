import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Huzaifa Abdul Qadir | Senior Software Engineer & AI Architect Portfolio',
  description: 'Software engineer portfolio specializing in Next.js, React, TypeScript, Tailwind CSS, Framer Motion animations, and AI integrations.',
  keywords: ['Next.js portfolio', 'Software Engineer', 'React Developer', 'Framer Motion animations', 'TypeScript Engineer', 'AI Software Architect'],
  authors: [{ name: 'Huzaifa Abdul Qadir' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-[#07090e] text-gray-100 selection:bg-indigo-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
