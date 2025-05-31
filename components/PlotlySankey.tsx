'use client'

import React from 'react'
import Plot from 'react-plotly.js'
import { SankeyTrace } from 'plotly.js'

const PlotlySankey: React.FC = () => {
  const sankeyTrace: SankeyTrace = {
    type: 'sankey',
    orientation: 'h',
    node: {
      pad: 15,
      thickness: 20,
      line: { color: 'black', width: 0.5 },
      label: [
        'Start',
        'Design phase?',
        'FMEA',
        'Simple problem?',
        '5 Why',
        'Multiple causes?',
        'Fishbone',
        'Complex system?',
        'FTA',
        'Recurring issue?',
        '8D or 3x5',
        'Prioritize causes?',
        'Pareto Analysis',
        'Decision-making needed?',
        'Kepner-Tregoe',
        'End',
      ],
      color: 'lightgreen',
      arrangement: 'snap',
      y: [0.1, 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 7.0, 7.0, 1.4, 1.4, 1.7, 1.7, 2.0, 2.0, 3.0],
    },
    link: {
      source: [0, 1, 1, 3, 4, 9, 3, 5, 5, 7, 7, 9, 11, 11, 13],
      target: [1, 2, 3, 4, 9, 5, 10, 6, 7, 8, 9, 11, 12, 13, 14],
      value: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      color: [
        'blue',
        'green',
        'gray',
        'orange',
        'pink',
        'lightblue',
        'purple',
        'lightgray',
        'teal',
        'salmon',
        'darkgreen',
        'orange',
        'pink',
        'skyblue',
        'black',
      ],
      label: [
        '→ Design phase?',
        'Yes → FMEA',
        'No → Simple?',
        'Yes → 5 Why',
        'No → Multiple causes?',
        'Yes → Fishbone',
        'Yes → 3x5 or 8D?',
        'No → Complex System?',
        'Yes → FTA',
        'No → Recurring?',
        'Yes → 3x5 or 8D',
        'No → Prioritize Causes?',
        'Yes → Pareto',
        'No → Decision?',
        'Yes → KT',
      ],
    },
  }

  return (
    <Plot
      data={[sankeyTrace]}
      layout={{
        title: 'Root Cause Analysis Flow',
        font: { size: 12, color: 'black' },
        height: 600, // allows responsive layout
      }}
      style={{ width: '100%' }}
      useResizeHandler
      config={{ responsive: true }}
    />
  )
}

export default PlotlySankey
