window.onload=function(){
    var searchresult=document.getElementById("searchresult")
    document.onclick=function(event){
        if(event.target.id !== 'searchresult'){
            searchresult.style.display="block";
        }
        if(event.target.id !== 'searchinput'){
            searchresult.style.display="none";
        }
    }
}