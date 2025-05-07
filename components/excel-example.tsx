'use client';

import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

interface ExcelRow {
  [key: string]: string | number;
}

const ExcelExample = () => {
  const [data, setData] = useState<ExcelRow[]>([]);

  useEffect(() => {
    const fetchExcel = async () => {
      const res = await fetch('/data/requirements_sample.xlsx');
      const arrayBuffer = await res.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData: ExcelRow[] = XLSX.utils.sheet_to_json(worksheet);
      setData(jsonData);
    };

    if (typeof window !== 'undefined') {
      fetchExcel();
    }
  }, []);

  return (
    <div className="overflow-x-auto mt-6 rounded border border-gray-200">
      <table className="min-w-full table-auto border-collapse text-sm">
        <thead className="bg-gray-100">
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
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
    </div>
  );
};

export default ExcelExample;
