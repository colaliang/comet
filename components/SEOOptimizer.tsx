'use client'

import { useEffect } from 'react'

interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string
}

export default function SEOOptimizer({ 
  title = '免费获取Perplexity Pro会员 - Comet AI浏览器',
  description = '零成本体验价值200美元的Perplexity Pro会员！下载Comet AI浏览器，享受顶级AI搜索体验。',
  keywords = 'Perplexity Pro, Comet浏览器, AI浏览器, 免费会员, AI搜索'
}: SEOOptimizerProps) {
  
  useEffect(() => {
    // 百度统计代码
    const baiduScript = document.createElement('script')
    baiduScript.innerHTML = `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?your-baidu-analytics-id";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `
    document.head.appendChild(baiduScript)

    // Google Analytics 4
    const gtag = document.createElement('script')
    gtag.async = true
    gtag.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
    document.head.appendChild(gtag)

    const gtagScript = document.createElement('script')
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `
    document.head.appendChild(gtagScript)

    // 添加面包屑导航结构化数据
    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "首页",
          "item": "https://comet-bwmy1ti95-kejieleungs-projects.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "免费获取Perplexity Pro",
          "item": "https://comet-bwmy1ti95-kejieleungs-projects.vercel.app/#tutorial"
        }
      ]
    })
    document.head.appendChild(breadcrumbScript)

    // 百度推送代码
    const baiduPushScript = document.createElement('script')
    baiduPushScript.innerHTML = `
      (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
          bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        } else {
          bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
      })();
    `
    document.head.appendChild(baiduPushScript)

    // 页面性能监控
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (perfData) {
            // 发送性能数据到分析服务
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart)
          }
        }, 0)
      })
    }

    // 清理函数
    return () => {
      // 清理添加的脚本
      const scripts = document.querySelectorAll('script[src*="baidu"], script[src*="googletagmanager"]')
      scripts.forEach(script => script.remove())
    }
  }, [])

  return null // 不渲染任何内容，只执行副作用
}