'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, AlertTriangle, CheckCircle, Copy } from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const handleCopyCode = async (code: string, index: number) => {
    const success = await copyToClipboard(code)
    if (success) {
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    }
  }

  const faqData = [
    {
      category: 'Comet推广赚钱',
      icon: <HelpCircle className="w-5 h-5" />,
      questions: [
        {
          question: 'Comet怎么赚钱？真的能日入200刀吗？',
          answer: 'Comet referral program是官方推广计划，通过邀请新用户注册可获得佣金。具体收益取决于推广效果和用户活跃度，200刀是理论最高收益。',
          type: 'info'
        },
        {
          question: '如何获取Comet邀请链接？',
          answer: '1. 注册并登录Comet浏览器\n2. 进入推广中心或设置页面\n3. 找到"推广计划"或"Referral"选项\n4. 复制专属邀请链接\n5. 分享链接给潜在用户',
          type: 'tip'
        },
        {
          question: 'Perplexity佣金计划如何运作？',
          answer: '当用户通过你的邀请链接注册并使用Perplexity Pro服务时，你将获得相应佣金。佣金结算周期通常为月结，具体金额根据用户付费情况计算。',
          type: 'info'
        },
        {
          question: 'Comet拉新教程有哪些技巧？',
          answer: '1. 制作详细的使用教程视频\n2. 在社交媒体分享使用体验\n3. 建立用户交流群提供技术支持\n4. 撰写AI浏览器对比文章\n5. 利用SEO优化提升曝光度',
          type: 'tip'
        }
      ]
    },
    {
      category: '注册相关',
      icon: <HelpCircle className="w-5 h-5" />,
      questions: [
        {
          question: '为什么需要代理才能访问？',
          answer: 'Perplexity服务在某些地区需要通过代理访问。建议使用稳定的代理服务，确保网络连接顺畅。',
          type: 'info'
        },
        {
          question: '推荐使用什么邮箱注册？',
          answer: '强烈推荐使用Gmail邮箱注册，因为Gmail能更稳定地接收Perplexity的验证码邮件。避免使用国内邮箱服务。',
          type: 'tip'
        },
        {
          question: '没有收到验证码怎么办？',
          answer: '1. 检查垃圾邮件文件夹\n2. 确认邮箱地址输入正确\n3. 等待2-3分钟后重新发送\n4. 尝试使用Gmail邮箱',
          type: 'warning'
        }
      ]
    },
    {
      category: '安装问题',
      icon: <AlertTriangle className="w-5 h-5" />,
      questions: [
        {
          question: 'Windows安装时显示"等待网络连接"怎么办？',
          answer: '这是最常见的问题，请按以下步骤解决：',
          type: 'error',
          code: `# 1. 打开命令提示符(cmd)
# 2. 进入安装包所在目录
cd C:\\Users\\YourName\\Downloads

# 3. 执行以下命令
set http_proxy=http://127.0.0.1:7890& set https_proxy=http://127.0.0.1:7890& start "" ".\\comet_installer_latest.exe"`,
          steps: [
            '退出当前安装程序',
            '按Win+R，输入cmd，打开命令提示符',
            '使用cd命令进入安装包目录',
            '复制并执行上述代理命令',
            '安装程序将自动启动并正常下载'
          ]
        },
        {
          question: 'Mac系统如何安装？',
          answer: 'Mac系统安装相对简单：\n1. 下载.dmg安装包\n2. 双击打开安装包\n3. 将Comet拖拽到Applications文件夹\n4. 首次运行可能需要在系统偏好设置中允许',
          type: 'info'
        },
        {
          question: '安装包下载失败怎么办？',
          answer: '1. 检查网络代理设置\n2. 尝试更换代理节点\n3. 清除浏览器缓存后重试\n4. 使用其他浏览器下载',
          type: 'warning'
        }
      ]
    },
    {
      category: 'Pro会员激活',
      icon: <CheckCircle className="w-5 h-5" />,
      questions: [
        {
          question: '登录后没有看到Pro标记怎么办？',
          answer: '这是关键步骤！登录后必须在搜索框中提出一个问题，Pro会员才会激活。可以问任何问题，比如"什么是AI？"',
          type: 'tip'
        },
        {
          question: 'Pro会员有什么具体权益？',
          answer: '• 无限次AI搜索\n• 高级数据分析功能\n• 优先访问新功能\n• 更快的响应速度\n• 更准确的搜索结果\n• 支持文件上传分析',
          type: 'info'
        },
        {
          question: 'Pro会员会过期吗？',
          answer: '通过Comet浏览器获得的Pro会员目前没有明确的过期时间，但建议及时使用。Perplexity可能会调整政策。',
          type: 'warning'
        }
      ]
    },
    {
      category: '使用技巧',
      icon: <HelpCircle className="w-5 h-5" />,
      questions: [
        {
          question: '如何最大化利用Pro功能？',
          answer: '1. 使用复杂查询测试AI能力\n2. 上传文档进行分析\n3. 利用数据可视化功能\n4. 尝试多语言搜索\n5. 使用引用和来源验证',
          type: 'tip'
        },
        {
          question: '可以在多个设备上使用吗？',
          answer: '是的，使用同一个账号可以在多个设备上登录Comet浏览器，Pro权限会同步。',
          type: 'info'
        },
        {
          question: '如何获得推广佣金？',
          answer: '1. 成功注册并激活Pro会员\n2. 分享您的专属推广链接\n3. 其他用户通过您的链接注册\n4. 根据推广政策获得相应佣金',
          type: 'info'
        }
      ]
    }
  ]

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comet推广 <span className="text-gradient">问题解决方案</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comet浏览器使用、推广赚钱、Perplexity佣金等问题的完整解决方案
          </p>
        </div>

        {/* FAQ内容 */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              {/* 分类标题 */}
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-600 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              {/* 问题列表 */}
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex
                  const isOpen = openItems.includes(globalIndex)
                  
                  return (
                    <div key={questionIndex} className="card overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            item.type === 'error' ? 'bg-red-500' :
                            item.type === 'warning' ? 'bg-yellow-500' :
                            item.type === 'tip' ? 'bg-green-500' :
                            'bg-blue-500'
                          }`} />
                          <span className="font-semibold text-gray-900">{item.question}</span>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className={`p-4 rounded-lg ${
                            item.type === 'error' ? 'bg-red-50 border border-red-200' :
                            item.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                            item.type === 'tip' ? 'bg-green-50 border border-green-200' :
                            'bg-blue-50 border border-blue-200'
                          }`}>
                            <div className="whitespace-pre-line text-gray-700 mb-4">
                              {item.answer}
                            </div>
                            
                            {/* 代码块 */}
                            {item.code && (
                              <div className="mt-4">
                                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                                  <pre>{item.code}</pre>
                                </div>
                                <button
                                  onClick={() => handleCopyCode(item.code!, globalIndex)}
                                  className="mt-2 flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium text-sm"
                                >
                                  <Copy className="w-4 h-4" />
                                  <span>{copiedIndex === globalIndex ? '已复制！' : '复制代码'}</span>
                                </button>
                              </div>
                            )}
                            
                            {/* 步骤列表 */}
                            {item.steps && (
                              <div className="mt-4">
                                <h5 className="font-semibold text-gray-900 mb-2">详细步骤：</h5>
                                <ol className="list-decimal list-inside space-y-1">
                                  {item.steps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="text-gray-700">{step}</li>
                                  ))}
                                </ol>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 联系支持 */}
        <div className="mt-16 text-center">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">还有其他问题？</h3>
            <p className="text-gray-600 mb-6">
              如果以上解答没有解决您的问题，欢迎联系我们获得更多帮助
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                查看更多教程
              </button>
              <button className="btn-primary">
                联系技术支持
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ