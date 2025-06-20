function MyStaticTable() {
  const tableStyle = {
    width: "80%",
    margin: "40px auto",
    borderCollapse: "collapse",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  };

  const theadStyle = {
    backgroundColor: "#1F2937", // deep blue-gray
    color: "#ffffff",
    textAlign: "left"
  };

  const headerCellStyle = {
    padding: "12px 16px",
    border: "1px solid #ccc",
  };

  const rowHeaderStyle = {
    backgroundColor: "#f3f4f6", // light gray for row header
    fontWeight: "bold",
    padding: "12px 16px",
    border: "1px solid #ccc"
  };

  const materialStyle = {
    backgroundColor: "#e0f2f1", // soft teal
    padding: "12px 16px",
    border: "1px solid #ccc"
  };

  const silicaStyle = {
    backgroundColor: "#fff9c4", // light yellow
    padding: "12px 16px",
    border: "1px solid #ccc"
  };

  return (
    <table style={tableStyle}>
      <thead style={theadStyle}>
        <tr>
          <th style={headerCellStyle}>Items</th>
          <th style={headerCellStyle}>S1V Ultra</th>
          <th style={headerCellStyle}>Description</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(4)].map((_, index) => (
          <tr key={index}>
            {index === 0 && (
              <td style={rowHeaderStyle} rowSpan={4}>
                Optical Fiber
              </td>
            )}
            <td style={materialStyle}>Material</td>
            <td style={silicaStyle}>Silica Glass</td>
          </tr>
        ))}
        {[...Array(4)].map((_, index) => (
          <tr key={index}>
            {index === 0 && (
              <td style={rowHeaderStyle} rowSpan={4}>
                Optical Fiber   
              </td>
            )}
            <td style={materialStyle}>Material</td>
            <td style={silicaStyle}>Silica Glass</td>
          </tr>
        ))}
        {[...Array(4)].map((_, index) => (
          <tr key={index}>
            {index === 0 && (
              <td style={rowHeaderStyle} rowSpan={4}>
                Optical Fiber
              </td>
            )}
            <td style={materialStyle}>Material</td>
            <td style={silicaStyle}>Silica Glass</td>
          </tr>
        ))}
        {[...Array(4)].map((_, index) => (
          <tr key={index}>
            {index === 0 && (
              <td style={rowHeaderStyle} rowSpan={4}>
                Optical Fiber
              </td>
            )}
            <td style={materialStyle}>Material</td>
            <td style={silicaStyle}>Silica Glass</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyStaticTable;
