function getDay(date: string) {
  var dateObj = new Date(date);
  var dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
  return dayOfWeek;
}
export default getDay;
