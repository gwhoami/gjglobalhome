function formatDate(date: Date | string): string {
  if (!date) {
    return '';
  }
  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  const year = parsedDate?.getFullYear();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthIndex = parsedDate?.getMonth();
  const month = monthIndex !== undefined ? monthNames[monthIndex] : '';
  const day = String(parsedDate?.getDate()).padStart(2, '0');

  return `${month}${day},${year} `;
}

export default formatDate;
