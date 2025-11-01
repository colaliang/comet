'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Star, Zap, Gift, Clock } from 'lucide-react'
import { scrollToElement } from '@/lib/utils'

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // 设置一个未来的日期作为活动结束时间
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 1) // 1天后结束

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const features = [
    'Comet referral program 详细教程',
    'Perplexity推广收益实战指南',
    'Comet拉新奖励获取方法',
    'AI浏览器赚钱完整攻略'
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container-max section-padding text-center">
        {/* 限时活动标签 */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-8 animate-pulse-slow">
          <Gift className="w-4 h-4 mr-2" />
          限时免费活动进行中
          <Clock className="w-4 h-4 ml-2" />
        </div>

        {/* 倒计时 */}
        <div className="flex justify-center space-x-4 mb-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold text-primary-600">{value}</div>
                <div className="text-xs text-gray-500 uppercase">
                  {unit === 'days' ? '天' : unit === 'hours' ? '时' : unit === 'minutes' ? '分' : '秒'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 主标题 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="block">Comet浏览器推广</span>
          <span className="text-gradient block">日入200刀</span>
          <span className="block">佣金计划</span>
        </h1>

        {/* 副标题 */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          <span className="font-bold text-primary-600">如何推广Comet赚钱？</span> 详细Perplexity佣金计划教程
          <br />
          <span className="text-lg">Comet拉新教程 + 邀请链接获取 + AI浏览器赚钱攻略</span>
        </p>

        {/* 特性列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start space-x-2">
              <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://pplx.ai/kejieleung69941"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg px-12 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out group w-full sm:w-auto min-w-[280px] flex items-center justify-center"
          >
            立即学习赚钱教程
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => scrollToElement('features')}
            className="btn-secondary text-lg px-8 py-4"
          >
            了解更多
          </button>
        </div>

        {/* 信任指标 */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-primary-500" />
            <span>Comet使用指南详解</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>Perplexity现金奖励</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gift className="w-5 h-5 text-green-500" />
            <span>Comet自动化任务</span>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero