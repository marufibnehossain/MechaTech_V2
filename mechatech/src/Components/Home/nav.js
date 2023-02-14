window.onscroll = function (){scroll()};
function scroll(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.534)";
    }
    else{
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }

}

export default scroll;