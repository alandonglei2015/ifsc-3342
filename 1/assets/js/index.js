var btnList = document.getElementsByClassName("tabshow");
var divList = document.getElementsByClassName("show");

const cw = document.body.clientWidth

function changeTab () {
  for(var i = 0; i < btnList.length; i++ ) {
    btnList[i].index = i; //给每个按钮添加index属性，标记是第几个按钮
    console.log(btnList[i].index, 'btnList[i].index')
    btnList[i].onclick = function() {
      for(var j = 0; j < btnList.length; j++) {
        //将所有的按钮样式去掉，块隐藏
        btnList[j].style.color = "";
      }
      //给点击的按钮添加样式，对应的块显示
      this.style.color = "#fee13f"
      // if(cw >= 800){
      //   divList[this.index].style.display = "flex";
      // } else if(cw < 800){
      //   divList[this.index].style.display = "block";
      // }
    }
  }
}