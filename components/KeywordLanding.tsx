'use client'

import { useState } from 'react'
import { ChevronRight, DollarSign, GraduationCap, Lightbulb, HelpCircle } from 'lucide-react'

interface KeywordSection {
  id: string
  title: string
  description: string
  keywords: string[]
  icon: React.ComponentType<any>
  color: string
  content: {
    title: string
    description: string
    features: string[]
    cta: string
  }
}

const keywordSections: KeywordSection[] = [
  {
    id: 'brand',
    title: '核心品牌词',
    description: 'Perplexity Comet官方推广',
    keywords: ['perplexity comet', 'comet browser', 'comet ai browser', 'perplexity comet 推广', 'comet 拉新', 'comet 佣金'],
    icon: Lightbulb,
    color: 'from-blue-500 to-indigo-600',
    content: {
      title: 'Perplexity Comet浏览器 - 官方推广平台',
      description: '体验革命性的AI浏览器，获得免费Perplexity Pro会员，开启智能搜索新时代。',
      features: [
        '免费获得价值200美元的Perplexity Pro会员',
        '先进的AI搜索技术，准确率提升300%',
        '隐私保护，数据安全有保障',
        '跨平台支持，Windows/Mac/Linux全覆盖'
      ],
      cta: '立即体验Comet浏览器'
    }
  },
  {
    id: 'action',
    title: '行动意图词',
    description: 'Comet推广赚钱方法',
    keywords: ['如何推广 comet', 'comet 怎么赚钱', 'perplexity 佣金计划', 'comet referral program', 'comet 邀请链接', 'comet 拉新教程', 'perplexity 赚美金'],
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
    content: {
      title: '如何推广Comet赚钱？完整佣金计划指南',
      description: '掌握Comet推广技巧，通过邀请链接获得丰厚佣金奖励，实现被动收入。',
      features: [
        '每成功邀请一位用户，获得现金奖励',
        '多层级佣金体系，收益持续增长',
        '专属邀请链接，追踪推广效果',
        '实时佣金统计，收益透明可见'
      ],
      cta: '获取我的邀请链接'
    }
  },
  {
    id: 'tutorial',
    title: '教程指南词',
    description: 'Comet使用完整教程',
    keywords: ['comet 浏览器教程', 'comet 使用指南', 'perplexity 入门', 'comet 安装', 'comet 设置', 'comet 自动化任务'],
    icon: GraduationCap,
    color: 'from-purple-500 to-violet-600',
    content: {
      title: 'Comet浏览器完整使用教程',
      description: '从安装到高级功能，全面掌握Comet浏览器的使用技巧和自动化任务设置。',
      features: [
        '详细安装步骤，支持所有操作系统',
        'Perplexity Pro功能完整介绍',
        '自动化任务设置指南',
        '高级搜索技巧和快捷键'
      ],
      cta: '查看完整教程'
    }
  },
  {
    id: 'earnings',
    title: '收益证明词',
    description: 'Comet推广真实收益',
    keywords: ['comet 日入200刀', 'perplexity 推广收益', 'ai浏览器赚钱', 'comet 拉新奖励', 'perplexity 现金奖励'],
    icon: DollarSign,
    color: 'from-yellow-500 to-orange-600',
    content: {
      title: 'Comet推广日入200刀 - 真实收益展示',
      description: '查看真实用户的推广收益案例，了解如何通过Comet推广实现可观的被动收入。',
      features: [
        '真实用户日入200美元案例分析',
        'Perplexity推广收益排行榜',
        'AI浏览器赚钱成功故事',
        '拉新奖励实时到账记录'
      ],
      cta: '查看收益案例'
    }
  }
]

export default function KeywordLanding() {
  const [activeSection, setActiveSection] = useState<string>('brand')

  const currentSection = keywordSections.find(section => section.id === activeSection) || keywordSections[0]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comet推广 <span className="text-gradient">关键词导航</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            根据您的搜索意图，快速找到相关的Comet推广信息和教程
          </p>
        </div>

        {/* 关键词分类导航 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keywordSections.map((section) => {
            const Icon = section.icon
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  activeSection === section.id
                    ? 'border-indigo-500 bg-indigo-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {section.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {section.keywords.slice(0, 3).map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {keyword}
                    </span>
                  ))}
                  {section.keywords.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      +{section.keywords.length - 3}
                    </span>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* 当前选中的内容区域 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 内容 */}
            <div>
              <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${currentSection.color} text-white text-sm font-medium mb-6`}>
                <currentSection.icon className="w-4 h-4 mr-2" />
                {currentSection.title}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {currentSection.content.title}
              </h3>
              
              <p className="text-lg text-gray-600 mb-8">
                {currentSection.content.description}
              </p>

              <div className="space-y-4 mb-8">
                {currentSection.content.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${currentSection.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group`}>
                {currentSection.content.cta}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 关键词云 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">相关关键词</h4>
              <div className="flex flex-wrap gap-3">
                {currentSection.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r ${currentSection.color} text-white rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 cursor-pointer`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white rounded-xl border border-gray-200">
                <div className="flex items-center mb-3">
                  <HelpCircle className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="font-medium text-gray-900">搜索提示</span>
                </div>
                <p className="text-sm text-gray-600">
                  {activeSection === 'brand' && '搜索这些关键词可以找到Comet浏览器的官方信息和下载链接。'}
                  {activeSection === 'action' && '这些关键词帮助您了解如何通过推广Comet获得收益。'}
                  {activeSection === 'tutorial' && '使用这些关键词可以找到详细的使用教程和设置指南。'}
                  {activeSection === 'earnings' && '搜索这些词可以查看真实的收益案例和成功故事。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}