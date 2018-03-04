module.exports = (sequance, el) => {
  let start = 0;
  let end = sequance.length;
  let mid = Math.round(sequance.length / 2);
  console.log('mid', mid);

  while (start >= end && end > 0) {
      if (sequance[mid] === el) return mid;
      if (sequance[mid] < el)start = mid + 1;
      if (sequance[mid] > el)end = mid - 1;
      mid = Math.round((end + start) / 2);
    //  mid = Math.round(end-start)/2+start;
      console.log('end', end);
      console.log('start', start);
  }

  for (let i = 0; i < sequance.length; i += 1) {
      if (sequance[i] === el) {
          return i;
      }
  }
  return -1;
};
