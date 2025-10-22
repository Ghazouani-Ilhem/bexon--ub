import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Load external scripts
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      })
    }

    // Load required scripts
    const loadScripts = async () => {
      try {
        await loadScript('/assets/js/jquery.min.js')
        await loadScript('/assets/js/bootstrap.bundle.min.js')
        await loadScript('/assets/js/gsap.min.js')
        await loadScript('/assets/js/ScrollSmoother.js')
        await loadScript('/assets/js/gsap-scroll-to-plugin.min.js')
        await loadScript('/assets/js/gsap-scroll-trigger.min.js')
        await loadScript('/assets/js/gsap-split-text.min.js')
        await loadScript('/assets/js/jquery.nice-select.min.js')
        await loadScript('/assets/js/swiper.min.js')
        await loadScript('/assets/js/odometer.min.js')
        await loadScript('/assets/js/venobox.min.js')
        await loadScript('/assets/js/appear.min.js')
        await loadScript('/assets/js/wow.min.js')
        await loadScript('/assets/js/meanmenu.js')
        await loadScript('/assets/js/main.js')
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    }

    loadScripts()
  }, [])

  return <Component {...pageProps} />
}
