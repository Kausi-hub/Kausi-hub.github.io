'use client'

import { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'

interface ExcelRow {
  [key: string]: string | number
}

const ExcelExample = () => {
  const [sheets, setSheets] = useState<string[]>([])
  const [selectedSheet, setSelectedSheet] = useState<string | null>(null)
  const [data, setData] = useState<ExcelRow[]>([])
  const [workbook, setWorkbook] = useState<XLSX.WorkBook | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchExcel = async () => {
      try {
        const res = await fetch('/mydata/motion_control_system_requirements.xlsx')
        if (!res.ok) throw new Error(`Failed to load file: ${res.status}`)

        const arrayBuffer = await res.arrayBuffer()
        const wb = XLSX.read(arrayBuffer, { type: 'array' })

        const allSheetNames = wb.SheetNames
        const defaultSheet = allSheetNames[0]

        setWorkbook(wb)
        setSheets(allSheetNames)
        setSelectedSheet(defaultSheet)

        const worksheet = wb.Sheets[defaultSheet]
        const jsonData: ExcelRow[] = XLSX.utils.sheet_to_json(worksheet)
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

  const handleSheetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value
    setSelectedSheet(selected)

    if (workbook) {
      const worksheet = workbook.Sheets[selected]
      const jsonData: ExcelRow[] = XLSX.utils.sheet_to_json(worksheet)
      setData(jsonData)
    }
  }

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, worksheet, selectedSheet || 'Sheet1')
    XLSX.writeFile(wb, 'exported_data.xlsx')
  }

  return (
    <div className="mt-6 min-h-[200px] border-2 border-dashed border-blue-500 bg-white p-4 shadow">
      <p className="mb-2 text-sm text-gray-600">📄 Requirements Preview:</p>

      {error && (
        <div className="text-red-600">
          <p>Failed to load data: {error}</p>
        </div>
      )}

      {!error && sheets.length > 1 && (
        <div className="mb-4">
          <label htmlFor="sheet-select" className="mr-2 font-medium">
            Select Sheet:
          </label>
          <select
            id="sheet-select"
            className="rounded border px-2 py-1"
            value={selectedSheet || ''}
            onChange={handleSheetChange}
          >
            {sheets.map((sheet) => (
              <option key={sheet} value={sheet}>
                {sheet}
              </option>
            ))}
          </select>
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
                <th key={key} className="border px-4 py-2 text-left font-medium text-black">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="even:bg-gray-50">
                {Object.values(row).map((val, i) => (
                  <td key={i} className="border px-4 py-2 text-black">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {data.length > 0 && (
        <div className="mt-4">
          <button
            onClick={handleDownload}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Download Sheet
          </button>
        </div>
      )}
    </div>
  )
}

export default ExcelExample
