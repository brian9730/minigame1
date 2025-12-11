var ycard = [];

//게임 시작 함수
function Start(){
    //상대방에게 무작위 카드 5장 할당
  for (i = 1; i < 6; i++) {
    rn = Math.floor(Math.random()*5)+1;
        if(ycard.indexOf(rn) === -1) {
            ycard.push(rn);
        }
        else {
            //중복된 카드가 나오면 다시 시도
            i--;
        }
  }
  //시작 버튼 숨김
    document.getElementById("start").style.display="none";
  //플레이어와 상대방에게 카드 배분  
    document.getElementById("card1").src = "img/card1.png";
    document.getElementById("card2").src = "img/card2.png";
    document.getElementById("card3").src = "img/card3.png";
    document.getElementById("card4").src = "img/card4.png";
    document.getElementById("card5").src = "img/card5.png";
    document.getElementById("ycard1").src = "img/ycard.png";
    document.getElementById("ycard2").src = "img/ycard.png";
    document.getElementById("ycard3").src = "img/ycard.png";
    document.getElementById("ycard4").src = "img/ycard.png";
    document.getElementById("ycard5").src = "img/ycard.png";  

}
//게임 재시작 함수
function Restart(){
    //모든 이미지 삭제
    alldel();
    //다시 시작 버튼 클릭 시 처음 화면으로 이동
    location.href='index.html';
}

//각 카드를 화면에 표시하고 애니메이션을 주기 위한 함수들
function putm1(){
    var mycard = 1;
    document.getElementById("card1").style.left = "882px";
    document.getElementById("card1").style.top = "490px";

    //상대방이 패를 선택하고 있는 시간 
    setTimeout(function () {
        alert("상대편이 패를 선택하고 있습니다!");
        }, 2000);
        //상대방이 1번 카드를 플레이하도록 호출
    setTimeout(function () {
        puty1();
    }, 3000);
    //결과를 비교하는 함수 호출
    setTimeout(function () {
       compare(1,1);
    }, 5000);
}
function putm2(){
    del();
    document.getElementById("card2").style.left = "882px";
    document.getElementById("card2").style.top = "490px";
    setTimeout(function () {
        alert("상대편이 패를 선택하고 있습니다!");
        }, 2000);
    setTimeout(function () {
        puty2();
    }, 3000);
    setTimeout(function () {
        compare(2,2);
     }, 5000);

}
function putm3(){
    del();
    document.getElementById("card3").style.left = "882px";
    document.getElementById("card3").style.top = "490px";
    setTimeout(function () {
        alert("상대편이 패를 선택하고 있습니다!");
        }, 2000);
    setTimeout(function () {
        puty3();
    }, 3000);
    setTimeout(function () {
        compare(3,3);
     }, 5000);

}
function putm4(){
    del();
    document.getElementById("card4").style.left = "882px";
    document.getElementById("card4").style.top = "490px";
    setTimeout(function () {
        alert("상대편이 패를 선택하고 있습니다!");
        }, 2000);
    setTimeout(function () {
        puty4();
    }, 3000);
    setTimeout(function () {
        compare(4,4);
     }, 5000);
}

function putm5(){
    del();
    document.getElementById("card5").style.left = "882px";
    document.getElementById("card5").style.top = "490px";
    setTimeout(function () {
        alert("상대편이 패를 선택하고 있습니다!");
        }, 2000);
    setTimeout(function () {
        puty5();
    }, 3000);
    setTimeout(function () {
        compare(5,5);
     }, 5000);
   
}
function puty1(){
    var ynum1 = ycard1;
    document.getElementById("ycard1").style.top = "290px";
    document.getElementById("ycard1").style.left = "882px";
   
}
function puty2(){
    var ynum1 = ycard2;
    document.getElementById("ycard2").style.top = "290px";
    document.getElementById("ycard2").style.left = "882px";
}
function puty3(){
    var ynum1 = ycard3;
    document.getElementById("ycard3").style.top = "290px";
    document.getElementById("ycard3").style.left = "882px";
}
function puty4(){
    var ynum1 = ycard4;
    document.getElementById("ycard4").style.top = "290px";
    document.getElementById("ycard4").style.left = "882px";
}
function puty5(){
    var ynum1 = ycard5;
    document.getElementById("ycard5").style.top = "290px";
    document.getElementById("ycard5").style.left = "882px";
}


var win = 0;
var ywin = 0;
var count = 0;

//카드 비교 및 결과 처리 함수
function compare(my, you){
    if(my > ycard[you]){
        //플레이어가 이길 경우
        win++
        count++
        document.getElementById("rramp").style.display="block";
        document.getElementById("rramp").src = "img/red.png";
        document.getElementById("num"+win+"").style.display="block";
        document.getElementById("num"+win+"").src = "img/num"+win+".png";
        document.getElementById("ynum"+ywin+"").style.display="block";
        document.getElementById("ynum"+ywin+"").src = "img/num"+ywin+".png";
        //2초후 결과 표시 숨김
        setTimeout(function () {
            del();
            document.getElementById("rramp").style.display="none";
            document.getElementById("num"+win+"").style.display="none";
            document.getElementById("ynum"+ywin+"").style.display="none";
        }, 2000);
        
    }
    else if(my < ycard[you]){
        //플레이어가 지는 경우
        ywin++;
        count++;
        document.getElementById("bramp").style.display="block";
        document.getElementById("bramp").src = "img/blue.png";
        document.getElementById("num"+win+"").style.display="block";
        document.getElementById("num"+win+"").src = "img/num"+win+".png";
        document.getElementById("ynum"+ywin+"").style.display="block";
        document.getElementById("ynum"+ywin+"").src = "img/num"+ywin+".png";
        //2초후 결과 표시 숨김
        setTimeout(function () {
            del();
            document.getElementById("bramp").style.display="none";
            document.getElementById("num"+win+"").style.display="none";
            document.getElementById("ynum"+ywin+"").style.display="none";
        }, 2000);
    }
    else{
        //비긴 경우
        count++;
        document.getElementById("ramp").style.display="block";
        document.getElementById("ramp").src = "img/draw.png";
        document.getElementById("num"+win+"").style.display="block";
        document.getElementById("num"+win+"").src = "img/num"+win+".png";
        document.getElementById("ynum"+ywin+"").style.display="block";
        document.getElementById("ynum"+ywin+"").src = "img/num"+ywin+".png";
        //2초후 결과 표시 숨김
        setTimeout(function () {
            del();
            document.getElementById("ramp").style.display="none";
            document.getElementById("num"+win+"").style.display="none";
            document.getElementById("ynum"+ywin+"").style.display="none";
        }, 2000);
    }
      //결과에 따라서 점수 호출
       if(win>ywin&&count==5){
            document.getElementById("result1").src = "img/youwin.png";
        }
        else if(win==3){
            document.getElementById("result1").src = "img/youwin.png";
        }
        else if(win<ywin&&count==5){
            document.getElementById("result2").src = "img/youlose.png";
        }
        else if(ywin==3){
            document.getElementById("result2").src = "img/youlose.png";
        } 
        else if(win==ywin&&count==5){
            document.getElementById("result3").src = "img/youdraw.png";
        }
    
     
}

function del(){
    document.getElementById("ramp").src = "";
    document.getElementById("bramp").src = "";
    document.getElementById("rramp").src = "";
}
//모든 카드 삭제
function alldel(){
    document.getElementById("card1").src = "";
    document.getElementById("card2").src = "";
    document.getElementById("card3").src = "";
    document.getElementById("card4").src = "";
    document.getElementById("card5").src = "";
    document.getElementById("ycard1").src = "";
    document.getElementById("ycard2").src = "";
    document.getElementById("ycard3").src = "";
    document.getElementById("ycard4").src = "";
    document.getElementById("ycard5").src = "";
    document.getElementById("ramp").src = "";
    document.getElementById("bramp").src = "";
    document.getElementById("rramp").src = "";
    document.getElementById("result1").src = "";
    document.getElementById("result2").src = "";
}