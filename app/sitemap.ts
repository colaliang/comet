import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://comet-bwmy1ti95-kejieleungs-projects.vercel.app'
  const currentDate = new Date()
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
      alternates: {
        languages: {
          'zh-CN': baseUrl,
          'zh': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/#features`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#tutorial`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#hero`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // 关键词着陆页相关页面
    {
      url: `${baseUrl}/#keyword-landing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // 核心品牌词相关页面
    {
      url: `${baseUrl}/#perplexity-comet`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // 行动意图词相关页面
    {
      url: `${baseUrl}/#comet-referral-program`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // 教程指南词相关页面
    {
      url: `${baseUrl}/#comet-browser-tutorial`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // 收益证明词相关页面
    {
      url: `${baseUrl}/#comet-earnings-proof`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    // 问题解决方案相关页面
    {
      url: `${baseUrl}/#comet-solutions`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.82,
    },
  ]
}