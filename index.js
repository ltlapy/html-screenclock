function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clocktxt_main').innerHTML =  h + ":" + m;
    document.getElementById('clocktxt_sc').innerHTML =  s;

    shapes = document.getElementsByClassName('clock_shape')
    
    shapes[0].style.transform = "translate(-50%, -50%) rotate(" + (h%12/12 * 360 + 45) + "deg)";
    shapes[1].style.transform = "translate(-50%, -50%) rotate(" + (m / 60 * 360 + 45) + "deg)";
    shapes[2].style.transform = "translate(-50%, -50%) rotate(" + (s / 60 * 360 + 45) + "deg)";

    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }