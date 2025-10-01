import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals (simplified version without web-vitals package)
    // Note: For production, install web-vitals package: npm install web-vitals

    // Monitor page load performance
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (perfData) {
            const metrics = {
              // First Contentful Paint
              fcp: perfData.domContentLoadedEventEnd - perfData.fetchStart,
              // Largest Contentful Paint
              lcp: perfData.loadEventEnd - perfData.fetchStart,
              // Time to Interactive
              tti: perfData.domInteractive - perfData.fetchStart,
              // Total Blocking Time
              tbt: perfData.domContentLoadedEventEnd - perfData.domInteractive,
            };

            // Log performance metrics in development
            if (process.env.NODE_ENV === 'development') {
              console.log('Performance Metrics:', metrics);
            }

            // Send to analytics if needed
            if (typeof (window as any).gtag !== 'undefined') {
              (window as any).gtag('event', 'page_performance', {
                event_category: 'Performance',
                event_label: 'Page Load',
                value: Math.round(metrics.lcp)
              });
            }
          }
        }, 0);
      });
    }

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          
          // Log slow resources in development
          if (process.env.NODE_ENV === 'development' && resource.duration > 1000) {
            console.warn('Slow resource:', {
              name: resource.name,
              duration: resource.duration,
              size: resource.transferSize
            });
          }
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
