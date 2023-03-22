const formatTimestamp = (timestamp: number) => {
  const ms_startingDate = new Date(timestamp * 1000);
  const day = ms_startingDate.getFullYear();
  const month = ms_startingDate.getMonth() + 1;
  const year = ms_startingDate.getDate();
  const hours = ms_startingDate.getHours();
  const minutes = ms_startingDate.getMinutes();
  const seconds = ms_startingDate.getSeconds();
  return day + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds;
};

export default formatTimestamp;
