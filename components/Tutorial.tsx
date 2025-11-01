'use client'

import { useState } from 'react'
import { 
  Download, 
  Mail, 
  Settings, 
  CheckCircle, 
  Copy, 
  ExternalLink,
  Monitor,
  Apple,
  AlertCircle,
  Play,
  ArrowRight
} from 'lucide-react'
import { COMET_DOWNLOAD_URL, TUTORIAL_STEPS, copyToClipboard } from '@/lib/utils'

const Tutorial = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [copiedCode, setCopiedCode] = useState(false)

  const handleCopyCode = async () => {
    const code = 'set http_proxy=http://127.0.0.1:7890& set https_proxy=http://127.0.0.1:7890& start "" ".\\comet_installer_latest.exe"'
    const success = await copyToClipboard(code)
    if (success) {
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    }
  }

  const stepIcons = [
    <Settings key="settings" className="w-6 h-6" />,
    <Download key="download" className="w-6 h-6" />,
    <Monitor key="monitor" className="w-6 h-6" />,
    <CheckCircle key="check" className="w-6 h-6" />
  ]

  const systemRequirements = [
    {
      icon: <Monitor className="w-5 h-5" />,
      title: 'Windows系统',
      requirements: ['Windows 10 或更高版本', '至少4GB内存', '1GB可用存储空间']
    },
    {
      icon: <Apple className="w-5 h-5" />,
      title: 'Mac系统', 
      requirements: ['macOS 10.15 或更高版本', '至少4GB内存', '1GB可用存储空间']
    }
  ]

  return (
    <section id="tutorial" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-max">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Comet浏览器教程</span> 完整指南
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comet安装设置 + Perplexity入门 + 推广收益攻略，从零开始学会AI浏览器赚钱
          </p>
        </div>

        {/* 系统要求 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">系统要求</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {systemRequirements.map((system, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-600 rounded-lg mr-3">
                    {system.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{system.title}</h4>
                </div>
                <ul className="space-y-2">
                  {system.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 步骤导航 */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            {TUTORIAL_STEPS.map((step, index) => (
              <div key={index} className="flex items-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 ${
                    activeStep === index
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    activeStep === index ? 'bg-white text-primary-500' : 'bg-gray-100'
                  }`}>
                    {stepIcons[index]}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">步骤 {step.id}</div>
                    <div className="text-sm opacity-90">{step.title}</div>
                  </div>
                </button>
                {index < TUTORIAL_STEPS.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-400 mx-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 步骤详情 */}
        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg mr-4">
                {stepIcons[activeStep]}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  步骤 {TUTORIAL_STEPS[activeStep].id}: {TUTORIAL_STEPS[activeStep].title}
                </h3>
                <p className="text-gray-600">{TUTORIAL_STEPS[activeStep].description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {TUTORIAL_STEPS[activeStep].details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center w-6 h-6 bg-primary-500 text-white rounded-full text-sm font-semibold mt-0.5">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 特殊步骤的额外内容 */}
            {activeStep === 1 && (
              <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  官方邀请链接
                </h4>
                <div className="flex items-center space-x-3">
                  <code className="flex-1 p-3 bg-white rounded border text-sm font-mono">
                    {COMET_DOWNLOAD_URL}
                  </code>
                  <a
                    href={COMET_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary whitespace-nowrap"
                  >
                    立即访问
                  </a>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="mt-6 space-y-4">
                <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Windows用户网络问题解决方案
                  </h4>
                  <p className="text-yellow-800 mb-3">
                    如果安装过程中遇到&quot;等待网络连接&quot;提示，请使用以下命令：
                  </p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <div className="mb-2"># 1. 打开命令提示符，进入安装包目录</div>
                    <div className="mb-2">cd C:\Users\YourName\Downloads</div>
                    <div className="mb-2"># 2. 运行以下命令</div>
                    <div className="mb-2">set http_proxy=http://127.0.0.1:7890&amp; set https_proxy=http://127.0.0.1:7890&amp; start &quot;&quot; &quot;.\comet_installer_latest.exe&quot;</div>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="mt-3 flex items-center space-x-2 text-yellow-700 hover:text-yellow-900 font-medium"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copiedCode ? '已复制！' : '复制命令'}</span>
                  </button>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  激活Pro会员的关键步骤
                </h4>
                <p className="text-green-800 mb-3">
                  <strong>重要提醒：</strong>登录后必须在搜索框中提出一个问题，Pro会员才会激活！
                </p>
                <div className="bg-white p-4 rounded border">
                  <p className="text-gray-700 mb-2">建议提问示例：</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>&quot;什么是人工智能？&quot;</li>
                    <li>&quot;今天的天气如何？&quot;</li>
                    <li>&quot;推荐一些学习资源&quot;</li>
                  </ul>
                </div>
              </div>
            )}

            {/* 导航按钮 */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                <span>上一步</span>
              </button>

              <button
                onClick={() => setActiveStep(Math.min(TUTORIAL_STEPS.length - 1, activeStep + 1))}
                disabled={activeStep === TUTORIAL_STEPS.length - 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeStep === TUTORIAL_STEPS.length - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                <span>下一步</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA部分 */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold mb-4">
            <CheckCircle className="w-5 h-5 mr-2" />
            准备好了？立即开始获取！
          </div>
          <div>
            <a
              href={COMET_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              开始下载 Comet AI
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tutorial