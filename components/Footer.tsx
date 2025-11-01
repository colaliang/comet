'use client'

import { Zap, ExternalLink, Mail, MessageSquare, MessageCircle } from 'lucide-react'
import { scrollToElement, COMET_DOWNLOAD_URL } from '@/lib/utils'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: '产品介绍', href: 'features' },
      { name: '注册教程', href: 'tutorial' },
      { name: '常见问题', href: 'faq' },
    ],
    resources: [
      { name: 'Perplexity官网', href: 'https://perplexity.ai', external: true },
      { name: '技术支持', href: '#support' },
      { name: '使用条款', href: '#terms' },
      { name: '隐私政策', href: '#privacy' },
    ],
    social: [
      { name: '邮箱联系', href: 'mailto:cola@ydjia.com', icon: <Mail className="w-5 h-5" /> },
      { name: 'WhatsApp', href: 'https://wa.me/85294891518', icon: <MessageSquare className="w-5 h-5" />, external: true },
    ]
  }

  const handleLinkClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener noreferrer')
    } else if (href.startsWith('#')) {
      scrollToElement(href.substring(1))
    } else {
      scrollToElement(href)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* 主要内容区域 */}
      <div className="container-max">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 品牌信息 */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">
                  Comet<span className="text-primary-400">AI</span>
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                专业的Perplexity Comet AI浏览器推广平台，帮助用户免费获取价值200美元的Pro会员，体验顶级AI搜索技术。
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://pplx.ai/kejieleung69941"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out min-w-[200px] flex items-center justify-center"
                >
                  立即下载
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* 产品链接 */}
            <div>
              <h3 className="text-lg font-semibold mb-6">产品导航</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 资源链接 */}
            <div>
              <h3 className="text-lg font-semibold mb-6">相关资源</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href, link.external)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      {link.name}
                      {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 社交媒体和联系方式 */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <span className="text-gray-400">联系我们：</span>
                <div className="flex items-center space-x-4">
                  {footerLinks.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.external ? '_blank' : undefined}
                      rel={social.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                      title={social.name}
                    >
                      {social.icon}
                      <span className="hidden sm:inline">{social.name}</span>
                    </a>
                  ))}
                  
                  {/* 微信咨询 */}
                  <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    <span className="hidden sm:inline">微信咨询</span>
                    <div className="bg-white p-1 rounded">
                      <Image
                        src="/wechat-qrcode.png"
                        alt="微信二维码"
                        width={128}
                        height={128}
                        className="rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-gray-400 text-sm lg:self-center">
                © {currentYear} Comet AI推广. 保留所有权利.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部声明 */}
      <div className="bg-gray-950 py-4">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">
              本网站为Perplexity Comet AI浏览器的非官方推广网站，旨在帮助用户了解和使用相关产品。
            </p>
            <p>
              所有商标和产品名称归其各自所有者所有。使用本网站即表示您同意我们的服务条款和隐私政策。
            </p>
          </div>
        </div>
      </div>

      {/* 返回顶部按钮 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-40"
        aria-label="返回顶部"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer