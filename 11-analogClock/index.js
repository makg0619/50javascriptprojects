setInterval(() => {
  date = new Date();
  hhour = date.getHours();
  mmintue = date.getMinutes();
  ssecond = date.getSeconds();
  hrotation = 30*hhour + mmintue/2;
  mrotation = 6*mmintue;
  srotation = 6*ssecond;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);