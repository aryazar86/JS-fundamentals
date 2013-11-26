$(document).ready(function() {
    var user = "X"
    var win = false;
    
    function checkForWin() {
        var winCombos = [["#1","#2","#3"],["#4","#5","#6"],["#7","#8","#9"],["#1","#4","#7"],["#2","#5","#8"],["#3","#6","#9"],["#1","#5","#9"],["#3","#5","#7"]];
        for(combo= 0; combo < winCombos.length; combo++){
            var check = winCombos[combo];
            if ((win == false) && ($(check[0]).text() != " ") && ($(check[2]).text() != " ") && ($(check[3]).text() != " ") && ($(check[0]).text() == $(check[1]).text() ) && ($(check[0]).text() == $(check[1]).text() ) && ($(check[1]).text() == $(check[2]).text() )){
                win = true;
                for(i=0; i <= 2; i++){
                    console.log("HERE");
                    $(check[i]).css({'background-color': 'red'});
                }
                console.log(win);
             }  
         }
     }
    
    function changeUser() {
        if (user == "X"){
            user = "O";
        }else{
            user = "X";
        }
    }
    
    $('.container').on('click', function(e) {
        if (win == false){
            var stuff = $(this)
            if(stuff.text() == " "){
                stuff.text(user);
                checkForWin();
                changeUser();
            }
        }
    });
});