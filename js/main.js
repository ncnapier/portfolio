

// setTimeout(fadeOutH1(), 3000)
        
// setTimeout(moveImg(30), '3000')
// setTimeout(moveImg(50), '3200')
// setTimeout(moveImg(100), '3400')
// setTimeout(moveImg(150), '3600')
// setTimeout(moveImg(200), '3800')
// setTimeout(moveImg(250), '4000')
// setTimeout(moveImg(300), '4200')
// setTimeout(moveImg(350), '4400')
  
//setTimeout(h1Switchsides(), 10000)
    

// setTimeout(unhideH2(), 1000)
    
// setTimeout(
//         document.getElementById("list").innerText = "a Full Stack Software Engineer", 1000)
    
// setTimeout(
//         document.getElementById("list").innerText = "generator of digital assets", 1500)
// setTimeout(
//         document.getElementById("list").innerText = "your next Web Developer", 2000)
    
//setTimeout(function(){
    //     fadeInH1()
    //     document.getElementById("list").innerText = ""
    //     hideH2()
    // }, 2500)
        


// setTimeout(unhidePortfolio(), 3000)
        
        

    
  


// function moveImg(x) {
//     document.getElementById('profilePic').style.right = x + "px"
// }

// function fadeOutH1() {
//     document.getElementById('headerText').style.opacity = 100 - (window.pageYOffset - 133) + "%"
// }
// function fadeInH1() {
//     document.getElementById('headerText').style.opacity = 0 + (window.pageYOffset - 307) + "%"
// }
// function h1Switchsides(){
//     document.querySelector('#intro').style.justifyContent = "flex-end"
// }
// function unhideH2() {
//     document.querySelector('h2').classList.remove("hide")
// }
// function hideH2() {
//     document.querySelector('h2').classList.add("hide")
// }
// function unhidePortfolio() {
//     document.getElementById('portfolio').classList.remove("hide")
// }
// function headerRelative(){
//     document.querySelector('header').style.position = "relative"
// }



setTimeout(function myMove() {
    let id = null;
    const elem = document.getElementById("profilePic");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 75);
    function frame() {
      if (pos == 50) {
        clearInterval(id);
      } else {
        pos++;
        
        elem.style.right = pos + 'vw';
      }
    }
  }, 2000)

  setTimeout(function myMove2() {
    let id = null;
    const elem = document.getElementById("headerText");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 400) {
        clearInterval(id);
      } else {
        pos++;
        
        elem.style.left = pos + 'px';
      }
    }
  }
  ,2000)

  setTimeout(function myMove3() {
    let id = null;
    const elem = document.getElementById("profileImg");
    let pos = 400
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
      if (pos == 150) {
        clearInterval(id);
      } else {
        pos--;
        
        elem.style.height = pos + 'px';
      }
    }
  }, 3000)

  setTimeout(function myMove3() {
    let id = null;
    const elem = document.getElementById("intro");
    let pos = 500
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
      if (pos == 200) {
        clearInterval(id);
      } else {
        pos--;
        
        elem.style.height = pos + 'px';
      }
    }
    //document.getElementById("profilePic").style.position = "static"
  }, 3000)

// setTimeout(function unhideH2() {
//     document.querySelector('h2').classList.remove("hide")
// }, 1000)

// setTimeout(
//         document.getElementById("list").innerText = "a Full Stack Software Engineer", 1200)
    
// setTimeout(
//         document.getElementById("list").innerText = "generator of digital assets", 1700)
// setTimeout(
//         document.getElementById("list").innerText = "your next Web Developer", 1900)

  