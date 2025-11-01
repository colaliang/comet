import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comet浏览器推广教程 - 日入200刀Perplexity Pro佣金计划 | 免费获取AI搜索会员',
  description: '【Comet拉新赚钱教程】如何推广Comet浏览器日入200刀？详细Perplexity佣金计划指南，comet邀请链接获取，AI浏览器赚钱攻略。零成本体验价值200美元的Perplexity Pro会员！',
  keywords: [
    // 核心品牌词
    'perplexity comet', 'comet browser', 'comet ai browser', 'perplexity comet 推广', 'comet 拉新', 'comet 佣金',
    // 行动意图词
    '如何推广 comet', 'comet 怎么赚钱', 'perplexity 佣金计划', 'comet referral program', 'comet 邀请链接', 'comet 拉新教程', 'perplexity 赚美金',
    // 教程指南词
    'comet 浏览器教程', 'comet 使用指南', 'perplexity 入门', 'comet 安装', 'comet 设置', 'comet 自动化任务',
    // 收益证明词
    'comet 日入200刀', 'perplexity 推广收益', 'ai浏览器赚钱', 'comet 拉新奖励', 'perplexity 现金奖励',
    // 问题解决方案词
    'Perplexity Pro', 'Comet浏览器', 'AI浏览器', '免费会员', 'AI搜索', '人工智能', '智能搜索', '浏览器插件', '搜索引擎', '免费试用'
  ],
  authors: [{ name: 'Comet Promote Team', url: 'https://comet-bwmy1ti95-kejieleungs-projects.vercel.app' }],
  creator: 'Comet Promote Team',
  publisher: 'Comet Promote Team',
  category: 'Technology',
  classification: 'AI Browser, Search Engine, Free Software',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://comet-bwmy1ti95-kejieleungs-projects.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
      'zh': '/',
    },
  },
  openGraph: {
    title: 'Comet浏览器推广教程 - 日入200刀Perplexity Pro佣金计划',
    description: '【Comet拉新赚钱教程】如何推广Comet浏览器日入200刀？详细Perplexity佣金计划指南，comet邀请链接获取，AI浏览器赚钱攻略。',
    url: 'https://comet-bwmy1ti95-kejieleungs-projects.vercel.app',
    siteName: 'Comet AI浏览器推广',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Comet AI浏览器 - 免费Perplexity Pro会员',
        type: 'image/jpeg',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
    countryName: 'China',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comet浏览器推广教程 - 日入200刀Perplexity Pro佣金计划',
    description: '【Comet拉新赚钱教程】如何推广Comet浏览器日入200刀？详细Perplexity佣金计划指南，AI浏览器赚钱攻略。',
    images: ['/og-image.jpg'],
    creator: '@CometAI',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'baidu-site-verification': 'your-baidu-verification-code',
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light" />
        
        {/* 百度SEO优化 */}
        <meta name="baidu-site-verification" content="your-baidu-verification-code" />
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        
        {/* 性能优化 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pplx.ai" />
        
        {/* 结构化数据 - 网站信息 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Comet AI浏览器推广",
              "alternateName": "免费Perplexity Pro会员获取",
              "url": "https://comet-bwmy1ti95-kejieleungs-projects.vercel.app",
              "description": "免费获取Perplexity Pro会员的官方推广网站",
              "inLanguage": "zh-CN",
              "publisher": {
                "@type": "Organization",
                "name": "Comet Promote Team",
                "url": "https://comet-bwmy1ti95-kejieleungs-projects.vercel.app"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://comet-bwmy1ti95-kejieleungs-projects.vercel.app/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* 结构化数据 - 软件应用 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Comet AI浏览器",
              "applicationCategory": "BrowserApplication",
              "operatingSystem": "Windows, macOS, Linux",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "description": "免费AI浏览器，提供Perplexity Pro会员体验",
              "downloadUrl": "https://pplx.ai/kejieleung69941",
              "featureList": [
                "免费Perplexity Pro会员",
                "AI智能搜索",
                "隐私保护",
                "快速浏览"
              ]
            })
          }}
        />
        
        {/* 结构化数据 - 组织信息 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Comet Promote Team",
              "url": "https://comet-bwmy1ti95-kejieleungs-projects.vercel.app",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "cola@ydjia.com"
              },
              "sameAs": [
                "https://wa.me/your-whatsapp-number"
              ]
            })
          }}
        />
        
        {/* 结构化数据 - FAQ页面 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Comet浏览器怎么赚钱？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "通过Comet推广计划，您可以获得每个成功邀请的佣金奖励。使用您的专属邀请链接推广Comet浏览器，每成功邀请一位用户注册并使用，即可获得相应的现金奖励。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "如何获取Comet邀请链接？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "注册Comet浏览器后，在个人中心或推广页面可以找到您的专属邀请链接。复制此链接分享给朋友或在社交媒体上推广，即可开始赚取佣金。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "Perplexity佣金计划是什么？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Perplexity佣金计划是通过推广Comet浏览器获得Perplexity Pro会员奖励的计划。成功推广一定数量的用户后，您可以获得免费的Perplexity Pro会员资格或现金奖励。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comet拉新有什么技巧？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "有效的Comet拉新技巧包括：1) 在社交媒体分享您的使用体验；2) 向朋友介绍Comet的免费AI功能；3) 参与相关社区讨论；4) 制作教程内容；5) 利用口碑传播效应。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comet浏览器如何安装？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "访问官方网站下载Comet浏览器安装包，支持Windows、macOS和Linux系统。下载后运行安装程序，按照提示完成安装即可开始使用免费的AI搜索功能。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "使用Comet浏览器安全吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Comet浏览器采用先进的隐私保护技术，不会收集您的个人隐私数据。所有搜索和浏览行为都经过加密处理，确保您的网络活动安全私密。"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          {children}
        </div>
      </body>
    </html>
  )
}