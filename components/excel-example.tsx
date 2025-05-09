'use client'

import { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'

const ExcelExample = () => {
  const [sheets, setSheets] = useState<string[]>([])
  const [selectedSheet, setSelectedSheet] = useState<string | null>(null)
  const [tableData, setTableData] = useState<(string | number | null)[][]>([])
  const [merges, setMerges] = useState<XLSX.Range[]>([])
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
        setMerges(worksheet['!merges'] || [])

        const range = XLSX.utils.decode_range(worksheet['!ref']!)
        const matrix: (string | number | null)[][] = []

        for (let R = range.s.r; R <= range.e.r; ++R) {
          const row: (string | number | null)[] = []
          for (let C = range.s.c; C <= range.e.c; ++C) {
            const cellAddress = XLSX.utils.encode_cell({ r: R, c: C })
            const cell = worksheet[cellAddress]
            row.push(cell ? cell.v : null)
          }
          matrix.push(row)
        }

        setTableData(matrix)
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
      setMerges(worksheet['!merges'] || [])

      const range = XLSX.utils.decode_range(worksheet['!ref']!)
      const matrix: (string | number | null)[][] = []

      for (let R = range.s.r; R <= range.e.r; ++R) {
        const row: (string | number | null)[] = []
        for (let C = range.s.c; C <= range.e.c; ++C) {
          const cellAddress = XLSX.utils.encode_cell({ r: R, c: C })
          const cell = worksheet[cellAddress]
          row.push(cell ? cell.v : null)
        }
        matrix.push(row)
      }

      setTableData(matrix)
    }
  }

  const isMergedCell = (row: number, col: number) => {
    for (const merge of merges) {
      if (row >= merge.s.r && row <= merge.e.r && col >= merge.s.c && col <= merge.e.c) {
        return {
          isStart: row === merge.s.r && col === merge.s.c,
          rowSpan: merge.e.r - merge.s.r + 1,
          colSpan: merge.e.c - merge.s.c + 1,
        }
      }
    }
    return null
  }

  const renderedCells = new Set<string>()

  const handleDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData)
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
          <label htmlFor="sheet-select" className="mr-2 font-medium text-black">
            Select Sheet:
          </label>
          <select
            id="sheet-select"
            className="rounded border px-2 py-1 text-black"
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

      {!error && tableData.length === 0 && (
        <p className="text-gray-500 italic">⏳ Loading data or no rows found...</p>
      )}

      {tableData.length > 0 && (
        <div className="max-h-[400px] overflow-y-auto">
          <table className="min-w-full table-auto border-collapse text-sm">
            <tbody>
              {tableData.map((row, rIdx) => (
                <tr key={rIdx} className="even:bg-gray-50">
                  {row.map((cell, cIdx) => {
                    const cellKey = `${rIdx}-${cIdx}`
                    if (renderedCells.has(cellKey)) return null

                    const mergeInfo = isMergedCell(rIdx, cIdx)

                    if (mergeInfo) {
                      if (!mergeInfo.isStart) return null
                      for (let r = 0; r < mergeInfo.rowSpan; r++) {
                        for (let c = 0; c < mergeInfo.colSpan; c++) {
                          renderedCells.add(`${rIdx + r}-${cIdx + c}`)
                        }
                      }
                      return (
                        <td
                          key={cellKey}
                          rowSpan={mergeInfo.rowSpan}
                          colSpan={mergeInfo.colSpan}
                          className="border px-4 py-2 text-black"
                        >
                          {cell}
                        </td>
                      )
                    }

                    renderedCells.add(cellKey)
                    return (
                      <td key={cellKey} className="border px-4 py-2 text-black">
                        {cell}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tableData.length > 0 && (
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
