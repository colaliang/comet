import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Comet AI浏览器推广 - 免费获取Perplexity Pro会员',
    short_name: 'CometAI推广',
    description: '专业的Perplexity Comet AI浏览器推广平台，帮助用户免费获取价值200美元的Pro会员，体验顶级AI搜索技术。零成本获取，立即下载使用。',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
    background_color: '#ffffff',
    theme_color: '#6366f1',
    orientation: 'portrait-primary',
    categories: ['productivity', 'utilities', 'education', 'business'],
  lang: 'zh-CN',
  dir: 'ltr',
  prefer_related_applications: false,
  screenshots: [
      {
        src: '/screenshot-wide.jpg',
        sizes: '1280x720',
        type: 'image/jpeg'
      },
      {
        src: '/screenshot-narrow.jpg',
        sizes: '750x1334',
        type: 'image/jpeg'
      }
    ],
    icons: [
      {
        src: '/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    shortcuts: [
      {
        name: '立即获取Pro会员',
        short_name: '获取会员',
        description: '快速获取免费Perplexity Pro会员',
        url: '/#tutorial',
        icons: [
          {
            src: '/shortcut-icon.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      }
    ]
  }
}