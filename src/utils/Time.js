export const inTimeRange = (start, end) => {
  const s = 60;
  const d = ':';

  let t = new Date();
  let b = start.split(d);
  let e = end.split(d);

  b = b[0] * s * s + b[1] * s;
  e = e[0] * s * s + e[1] * s;
  t = t.getHours() * s * s + t.getMinutes() * s;

  return t >= b && t <= e;
};

export const isToday = day => {
  const d = new Date().getDay();
  return day === d;
};

export const isHoliday = day => {
  return day === 0 || day === 6;
};
