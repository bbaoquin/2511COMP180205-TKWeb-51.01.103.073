
$(document).ready(function () {
  
  for (let i = 0; i < 3; i++) {
    let pumpkin = $("<img class='pumpkin' src='../images/smile-pumpkin.png'>");
    pumpkin.css({
      top: Math.random() * window.innerHeight + "px",
      left: Math.random() * window.innerWidth + "px",
      animationDelay: i + "s"
    });
    $("body").append(pumpkin);
  }

  const bgAudio = new Audio("../images/sounds.mp3"); // Đặt file nhạc vào thư mục images
  bgAudio.loop = true;
  bgAudio.volume = 0.8;
  bgAudio.play().catch(() => {
    console.log("Âm thanh chờ click để phát");
  });

  $(document).click(function(){
    bgAudio.play();
  });
});
