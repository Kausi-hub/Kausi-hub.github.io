'use client'

import { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'

interface ExcelRow {
  [key: string]: string | number
}

const ExcelExample = () => {
  const [data, setData] = useState<ExcelRow[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchExcel = async () => {
      try {
        const res = await fetch('/mydata/motion_control_system_requirements.xlsx')
        if (!res.ok) throw new Error(`Failed to load file: ${res.status}`)

        const arrayBuffer = await res.arrayBuffer()
        const workbook = XLSX.read(arrayBuffer, { type: 'array' })

        const sheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetName]
        const jsonData: ExcelRow[] = XLSX.utils.sheet_to_json(worksheet)

        console.log('Loaded Excel data:', jsonData)
        setData(jsonData)
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Error loading Excel:', err)
          setError(err.message)
        } else {
          console.error('Unknown error:', err)
          setError('An unknown error occurred.')
        }
      }
    }

    if (typeof window !== 'undefined') {
      fetchExcel()
    }
  }, [])

  return (
    <div className="mt-6 min-h-[200px] border-2 border-dashed border-blue-500 bg-white p-4 shadow">
      <p className="mb-2 text-sm text-gray-600">📄 Excel Data Preview:</p>

      {error && (
        <div className="text-red-600">
          <p>Failed to load data: {error}</p>
        </div>
      )}

      {!error && data.length === 0 && (
        <p className="text-gray-500 italic">⏳ Loading data or no rows found...</p>
      )}

      {data.length > 0 && (
        <table className="min-w-full table-auto border-collapse text-sm">
          <thead className="bg-gray-100">
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key} className="border px-4 py-2 text-left font-medium">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="even:bg-gray-50">
                {Object.values(row).map((val, i) => (
                  <td key={i} className="border px-4 py-2">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ExcelExample
