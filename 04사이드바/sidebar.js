var menuBtn = document.getElementById("menuBtn");
var sidenav = document.querySelector(".sidenav");

menuBtn.addEventListener('click', function() {

    console.log(sidenav.style.width);

    var wid = sidenav.style.width; //width 값 저장

    // if(wid === '' || wid === '200px'){ //문자열 공백이거나 200px이라면 이라는 조건
    //     sidenav.style.width = '0px';
    // } else {
    //     sidenav.style.width = '200px';
    // }

    console.log(window.innerWidth); //브라우저의 너비

    if(window.innerWidth <= 767){ //모바일 환경

        //모바일 환경 자체에서 공백이 들어간다.
        if(wid === '' || wid === '0px'){ //공백이거나 width가 0px인 경우
            sidenav.style.width = '200px';
        } else {
            sidenav.style.width = '0px';
        }

    } else { //브라우저 환경

        if(wid === '' || wid === '200px'){ 
            sidenav.style.width = '0px';
        } else {
            sidenav.style.width = '200px';
        }
    }


})