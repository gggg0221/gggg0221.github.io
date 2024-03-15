// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 10, y = 0, dx = 5, dy = 5, r = 30, color = "#003366", m = 30;
let x2 = canvas.width , y2 = 10, dx2 = 8, dy2 = 8, r2 = 30, color2 = "#FFA500", m2=60;
// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = x + dx;
    y = y + dy;

    x2 = x2 + dx2;
    y2 = y2 + dy2;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
  if(x<0 || x>canvas.width)
  {
    dx = -dx;
  }
  if(y<0 || y>canvas.height)
  {
    dy = -dy;
  }
  if(x2<0 || x2>canvas.width)
  {
    dx2 = -dx2;
  }
  if(y2<0 || y2>canvas.height)
  {
    dy2 = -dy2;
  }
  if((x-x2)*(x-x2) + (y-y2)*(y-y2) < (r+r2)*(r+r2))
  {
    [[dx, dx2 , dy, dy2]] = [[dx2, dx, dy2, dy]];
  }

  if((x-x2)*(x-x2) + (y-y2)*(y-y2) < (r+r2)*(r+r2))
  {
    color = "#2894FF";
    color2 ="#FFBB77";
  }
  //let M = m + m2;
  //[[dx, dy], [dx2, dy2]] = [[((m-m2)*dx+2*m2*dx2)/M, dy2], [dx, ((m2-m)*dy2+2*m*dy)/M]]

    drawBall(x, y, r, color);
    drawBall(x2, y2, r2, color2);
  
    requestAnimationFrame(draw);
}
draw();