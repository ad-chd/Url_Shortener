import React from 'react';

const ResponsiveTable = ({ columns, rows }) => {
  return (
    <div className="responsive-table">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.label}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.urlCode}>
              {columns.map((column) => (
                <td key={`${row.urlCode}-${column.label}`}>
                  {row[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
