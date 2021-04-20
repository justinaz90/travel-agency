export const formatTime = (timeInSeconds) => {
  if (!timeInSeconds || isNaN(timeInSeconds) || timeInSeconds < 0) {
    return null;
  } else {
    let ss = Math.floor(timeInSeconds % 60);
    let mm = Math.floor((timeInSeconds / 60) % 60);
    let hh = Math.floor(timeInSeconds / 3600);
    ss = ss.toString().padStart(2, '0');
    mm = mm.toString().padStart(2, '0');
    hh = hh.toString().padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  }
};
