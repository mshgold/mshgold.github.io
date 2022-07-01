


var humber = document.getElementById("icon-humber");
function showMenu() {
   
   var mhumber= document.querySelector(".itemsMenuHamber");
    if (mhumber.className === "itemsMenuHamber d-none"){
      
        mhumber.className+="d-show"
    }else{
        mhumber.className="itemsMenuHamber d-none"
    }
}

