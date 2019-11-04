const checkTime = (start, end) => {
  let s = 60;
  let d = ':';
  let b = start.split(d);
  b = b[0] * s * s + b[1] * s;
  let e = end.split(d);
  e = e[0] * s * s + e[1] * s;
  let t = new Date();
  t = t.getHours() * s * s + t.getMinutes() * s;

  return (t >= b && t <= e);
};