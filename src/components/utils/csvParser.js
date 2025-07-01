export function processCSV(data) {
  const rows = data.split('\n').map(row => row.split(','));
  return rows.slice(1).map(row => {
    if (row.length >= 7) {
      return {
        sno: row[0].trim(),
        hallticket: row[1].trim(),
        subjectCode: row[2].trim(),
        subjectName: row[3].trim(),
        internalMarks: row[4].trim(),
        grade: row[5].trim(),
        credits: row[6].trim()
      };
    }
    return null;
  }).filter(Boolean);
}