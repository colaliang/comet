'use client'

import { useState, useEffect, ReactNode } from 'react'

interface LazyLoaderProps {
  children: ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
}

const LazyLoader = ({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  className = ''
}: LazyLoaderProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!elementRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(elementRef)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(elementRef)

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef)
      }
    }
  }, [elementRef, threshold, rootMargin])

  return (
    <div ref={setElementRef} className={className}>
      {isVisible ? (
        children
      ) : (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-200 h-10 w-10"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LazyLoader