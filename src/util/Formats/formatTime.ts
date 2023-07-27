function formatTime(time: string) {
  const [hours] = time.split(':');
  const parsedHours = parseInt(hours, 10);
  return parsedHours >= 12 ? 'PM' : 'AM';
}
export default formatTime;
