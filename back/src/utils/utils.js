function formatTimeStamp(timeStamp, dateSeparator = "-", timeSeparator = ":") {
  const date = new Date(timeStamp);

  const year   = date.getFullYear().toString();
  const month  = ("0" + (date.getMonth() + 1)).slice(-2);
  const day    = ("0" + date.getDate()).slice(-2);
  const hour   = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);
  const second = ("0" + date.getSeconds()).slice(-2);

  return `${year}${dateSeparator}${month}${dateSeparator}${day} ${hour}${timeSeparator}${minute}${timeSeparator}${second}`;
}

export default formatTimeStamp;
