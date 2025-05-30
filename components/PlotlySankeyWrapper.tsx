// components/PlotlySankeyWrapper.tsx
'use client'

import dynamic from 'next/dynamic'

const PlotlySankey = dynamic(() => import('./PlotlySankey'), { ssr: false })

export default function PlotlySankeyWrapper() {
  return <PlotlySankey />
}
