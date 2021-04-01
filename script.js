function showNumber(num){
    document.getElementById("display").innerHTML += num;
}

function showOperator(val){
    var data = getData();
    var operator = data.split("")[data.length-1];
    if(operator != "+" && operator != "-" && operator != "/" && operator != "*" && operator != "."){
        document.getElementById("display").innerHTML += val;
    }
}

function deleteFunction(){
    var data = getData();
    data = data.split("")
    data.pop();
    document.getElementById("display").innerHTML = data.join("");
}

function eraseAll(){
    document.getElementById("display").innerHTML = "";
}

function getData(){
    var data = document.getElementById("display").innerHTML;
    return data;
}

function percentage(){
    var data = getData();
    var operator = data.split("")[data.length-1];
    if(operator != "+" && operator != "-" && operator != "/" && operator != "*" && operator != "."){
        document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML)/100
    }
}

function equalsTo(){
    var data = getData();
    var operator = data.split("")[data.length-1];
    if(operator != "+" && operator != "-" && operator != "/" && operator != "*" && operator != "."){
        document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML)
    } else{
        dataArr = data.split("");
        dataArr.pop();
        document.getElementById("display").innerHTML = eval(dataArr.join(""))
;    }
}
