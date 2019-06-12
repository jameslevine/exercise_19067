export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  const todayDate = new Date(dateToFormatTimeMillis);
  const todayDateDayMonthYear = todayDate.getFullYear().toString() + todayDate.getMonth().toString() + todayDate.getDate().toString();
  const systemDate = new Date(systemDateTimeMillis);
  const systemDateDayMonthYear = systemDate.getFullYear().toString() + systemDate.getMonth().toString() + systemDate.getDate().toString();
  const formattedDateDate = todayDate.getDate() < 10 ? "0" + todayDate.getDate().toString() : todayDate.getDate().toString();
  const formattedDateMonth = todayDate.getMonth() < 10 ? "0" + (todayDate.getMonth()+1).toString() : todayDate.getMonth().toString();
  const todayDateFormatted = `${formattedDateDate}/${formattedDateMonth}/${todayDate.getFullYear().toString()}`;
  return (todayDateDayMonthYear === systemDateDayMonthYear) ? "TODAY" : todayDateFormatted;
};
