import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export function copyToClipboard(text: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        () => resolve(true),
        () => resolve(false)
      )
    } else {
      // 降级方案
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'absolute'
      textArea.style.left = '-999999px'
      document.body.prepend(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        resolve(true)
      } catch (error) {
        resolve(false)
      } finally {
        textArea.remove()
      }
    }
  })
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export const COMET_DOWNLOAD_URL = 'https://pplx.ai/kejieleung69941'

export const TUTORIAL_STEPS = [
  {
    id: 1,
    title: '准备阶段',
    description: '确保设备和网络环境满足要求',
    details: [
      '设备要求：Windows/Mac电脑',
      '网络要求：需要代理访问',
      '邮箱准备：推荐Gmail邮箱'
    ]
  },
  {
    id: 2,
    title: '下载注册',
    description: '访问邀请链接并完成邮箱验证',
    details: [
      '访问邀请链接',
      '点击接受邀请',
      '输入邮箱地址',
      '验证邮箱验证码'
    ]
  },
  {
    id: 3,
    title: '安装配置',
    description: '下载并安装Comet浏览器',
    details: [
      '下载安装包',
      'Mac：拖拽到应用文件夹',
      'Windows：双击安装',
      '处理网络连接问题'
    ]
  },
  {
    id: 4,
    title: '激活Pro会员',
    description: '登录并激活Pro会员权限',
    details: [
      '首次登录浏览器',
      '在搜索框提出任意问题',
      '确认Pro标记出现',
      '检查邮件通知'
    ]
  }
]