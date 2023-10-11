function merge(arrLeft, arrRight) {
  const len1 = arrLeft.length;
  const len2 = arrRight.length;
  const len = len1 + len2;
  const merged = Array(len);
 
  let i = 0;
  let l = 0;
  let r = 0;
  while(i < len) {
    if(r === len2 || arrLeft[l] < arrRight[r]) {
      merged[i] = arrLeft[l];
      l++;
    } else {
      merged[i] = arrRight[r];
      r++;
    }
    i++;
  }
  return merged;
}
