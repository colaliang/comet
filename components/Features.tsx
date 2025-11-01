'use client'

import { useState } from 'react'
import { 
  Zap, 
  Brain, 
  Shield, 
  Rocket, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Search,
  MessageSquare,
  BarChart3
} from 'lucide-react'

const Features = () => {
  const [activeTab, setActiveTab] = useState(0)

  const mainFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI原生设计',
      description: '从底层架构开始，专为AI交互优化的浏览器体验',
      details: [
        '智能搜索建议',
        '上下文理解',
        '多模态交互',
        '个性化推荐'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '极速响应',
      description: '比传统浏览器快3倍的AI搜索和处理速度',
      details: [
        '毫秒级响应',
        '智能缓存',
        '并行处理',
        '优化算法'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '隐私保护',
      description: '企业级安全保护，确保您的数据和隐私安全',
      details: [
        '端到端加密',
        '本地处理',
        '无数据收集',
        '匿名浏览'
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: '功能丰富',
      description: '集成多种AI工具，满足各种使用场景需求',
      details: [
        '智能总结',
        '多语言翻译',
        '代码生成',
        '文档分析'
      ]
    }
  ]

  const comparisonData = [
    {
      feature: 'AI搜索能力',
      comet: '顶级Pro级别',
      chrome: '基础搜索',
      atlas: '7天试用'
    },
    {
      feature: '会员价值',
      comet: '$200/月 免费',
      chrome: '无AI功能',
      atlas: '限时7天'
    },
    {
      feature: '使用门槛',
      comet: '零门槛注册',
      chrome: '需要插件',
      atlas: '需要邀请码'
    },
    {
      feature: '功能完整性',
      comet: '完整Pro功能',
      chrome: '有限功能',
      atlas: '基础功能'
    }
  ]

  const proFeatures = [
    {
      icon: <Search className="w-6 h-6" />,
      title: '无限AI搜索',
      description: '不受次数限制的高质量AI搜索体验'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: '智能对话',
      description: '与AI进行深度对话，获得专业见解'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: '数据分析',
      description: '强大的数据处理和可视化分析能力'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: '全球资源',
      description: '访问全球最新信息和知识库'
    }
  ]

  const tabs = [
    { name: '核心特性', content: 'features' },
    { name: '产品对比', content: 'comparison' },
    { name: 'Pro权益', content: 'pro' }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            为什么选择 <span className="text-gradient">Comet AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            体验下一代AI浏览器，享受价值200美元的Pro级别功能，完全免费
          </p>
        </div>

        {/* 标签页导航 */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === index
                    ? 'bg-white text-primary-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* 标签页内容 */}
        <div className="min-h-[600px]">
          {/* 核心特性 */}
          {activeTab === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {mainFeatures.map((feature, index) => (
                <div key={index} className="card p-8 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* 产品对比 */}
          {activeTab === 1 && (
            <div className="animate-fade-in">
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                  Comet AI vs 竞品对比
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">功能特性</th>
                        <th className="text-center py-4 px-6 font-semibold text-primary-600">
                          Comet AI
                          <div className="text-xs text-primary-500 font-normal">推荐</div>
                        </th>
                        <th className="text-center py-4 px-6 font-semibold text-gray-600">Chrome</th>
                        <th className="text-center py-4 px-6 font-semibold text-gray-600">OpenAI Atlas</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                          <td className="py-4 px-6 text-center">
                            <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                              <Star className="w-4 h-4 mr-1" />
                              {row.comet}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-600">{row.chrome}</td>
                          <td className="py-4 px-6 text-center text-gray-600">{row.atlas}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Pro权益 */}
          {activeTab === 2 && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-semibold mb-4">
                  <Star className="w-4 h-4 mr-2" />
                  价值 $200/月 的Pro会员权益
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  解锁全部Pro级别功能
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  通过Comet AI浏览器，您将获得完整的Perplexity Pro会员权限，享受顶级AI搜索体验
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {proFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl">
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">$200</div>
                    <div className="text-sm text-gray-500">原价/月</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">免费</div>
                    <div className="text-sm text-gray-500">现在获取</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Features