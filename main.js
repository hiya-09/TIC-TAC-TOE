function myfunc() {

    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
  
    if ((b1 == 'Δ' || b1 == 'Δ') && (b2 == 'Δ' ||
        b2 == 'Δ') && (b3 == 'Δ' || b3 == 'Δ')) {
        document.getElementById('print')
            .innerHTML = "Player Δ won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b1 == 'Δ' || b1 == 'Δ') && (b4 == 'Δ' ||
        b4 == 'Δ') && (b7 == 'Δ' || b7 == 'Δ')) {
        document.getElementById('print')
            .innerHTML = "Player Δ won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b7 == 'Δ' || b7 == 'Δ') && (b8 == 'Δ' || 
        b8 == 'Δ') && (b9 == 'Δ' || b9 == 'Δ')) {
        document.getElementById('print')
            .innerHTML = "Player Δ won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
    }
    else if ((b3 == 'Δ' || b3 == 'Δ') && (b6 == 'Δ' || 
        b6 == 'Δ') && (b9 == 'Δ' || b9 == 'Δ')) {
        document.getElementById('print')
            .innerHTML = "Player Δ won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else if ((b1 == 'Δ' || b1 == 'Δ') && (b5 == 'Δ' || 
        b5 == 'Δ') && (b9 == 'Δ' || b9 == 'Δ')) {
        document.getElementById('print')
            .innerHTML = "Player Δ won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else if ((b3 == 'Δ' || b3 == 'Δ') && (b5 == 'Δ' || 
        b5 == 'Δ') && (b7 == 'Δ' || b7 == 'Δ')) {
        document.getElementById('print')
            .innerHTML = "Player Δ won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b2 == 'Δ' || b2 == 'Δ') && (b5 == 'Δ' || 
        b5 == 'Δ') && (b8 == 'Δ' || b8 == 'Δ')) {
        document.getElementById('print')
            .innerHTML = "Player Δ won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b4 == 'Δ' || b4 == 'Δ') && (b5 == 'Δ' || 
        b5 == 'Δ') && (b6 == 'Δ' || b6 == 'Δ')) {
        document.getElementById('print')
            .innerHTML = "Player Δ won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
 
    else if ((b1 == 'O' || b1 == 'O') && (b2 == 'O' || 
        b2 == 'O') && (b3 == 'O' || b3 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b1 == 'O' || b1 == 'O') && (b4 == 'O' || 
        b4 == 'O') && (b7 == 'O' || b7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b7 == 'O' || b7 == 'O') && (b8 == 'O' || 
        b8 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
    }
    else if ((b3 == 'O' || b3 == 'O') && (b6 == 'O' || 
        b6 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else if ((b1 == 'O' || b1 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else if ((b3 == 'O' || b3 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b7 == 'O' || b7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b2 == 'O' || b2 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b8 == 'O' || b8 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b4 == 'O' || b4 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b6 == 'O' || b6 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
  

    else if ((b1 == 'Δ' || b1 == 'O') && (b2 == 'Δ' 
        || b2 == 'O') && (b3 == 'Δ' || b3 == 'O') && 
        (b4 == 'Δ' || b4 == 'O') && (b5 == 'Δ' || 
        b5 == 'O') && (b6 == 'Δ' || b6 == 'O') && 
        (b7 == 'Δ' || b7 == 'O') && (b8 == 'Δ' || 
        b8 == 'O') && (b9 == 'Δ' || b9 == 'O')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
    }
    else {
  
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player Δ Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player O Turn";
        }
    }
}

function myfunc_2() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
  
}

flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "Δ";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
  
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b2").value = "Δ";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
  
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "Δ";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
  
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "Δ";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
  
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "Δ";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
  
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "Δ";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
  
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b7").value = "Δ";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
  
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("b8").value = "Δ";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
  
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("b9").value = "Δ";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}
