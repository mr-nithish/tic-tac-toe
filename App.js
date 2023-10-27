function reset(){
    location.reload();
    document.getElementById("b1").value='';
    document.getElementById("b2").value='';
    document.getElementById("b3").value='';
    document.getElementById("b4").value='';
    document.getElementById("b5").value='';
    document.getElementById("b6").value='';
    document.getElementById("b7").value='';
    document.getElementById("b8").value='';
    document.getElementById("b9").value='';
}
function check(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;

    if(b1=='x'&&b2=='x'&&b3=='x')
    {
        document.getElementById('out').innerHTML="Player X Won the Match ...";
    }
    else if(b1=='x'&&b4=='x'&&b7=='x')
    {
        document.getElementById('out').innerHTML="Player X Won the Match ...";
    }
    else if(b1=='x'&&b5=='x'&&b9=='x')
    {
        document.getElementById('out').innerHTML="Player X Won the Match ...";
    }
    else if(b2=='x'&&b5=='x'&&b8=='x')
    {
        document.getElementById('out').innerHTML="Player X Won the Match ...";
        //nn();
    }
    else if(b3=='x'&&b6=='x'&&b9=='x')
    {
        document.getElementById('out').innerHTML="Player X Won the Match ...";
        //n();
    }
    else if(b3=='x'&&b5=='x'&&b7=='x')
    {
        document.getElementById('out').innerHTML="Player X Won the Match ...";
        //n();
    }
    else if(b4=='x'&&b5=='x'&&b6=='x')
    {
        document.getElementById('out').innerHTML="Player X Won the Match ...";
        //n();
    }
    else if(b7=='x'&&b8=='x'&&b9=='x')
    {
        document.getElementById('out').innerHTML="Player X Won the Match ...";
        //n();
    }
    else if(b1=='o'&&b2=='o'&&b3=='o')
    {
        document.getElementById('out').innerHTML="Player O Won the Match ...";
        //n();
    }
    else if(b1=='o'&&b4=='o'&&b7=='o')
    {
        document.getElementById('out').innerHTML="Player O Won the Match ...";
        //n();
    }
    else if(b1=='o'&&b5=='o'&&b9=='o')
    {
        document.getElementById('out').innerHTML="Player O Won the Match ...";
        //n();
    }
    else if(b2=='o'&&b5=='o'&&b8=='o')
    {
        document.getElementById('out').innerHTML="Player O Won the Match ...";
        //n();
    }
    else if(b3=='o'&&b6=='o'&&b9=='o')
    {
        document.getElementById('out').innerHTML="Player O Won the Match ...";
        //n();
    }
    else if(b3=='o'&&b5=='o'&&b7=='o')
    {
        document.getElementById('out').innerHTML="Player O Won the Match ...";
        //n();
    }
    else if(b4=='o'&&b5=='o'&&b6=='o')
    {
        document.getElementById('out').innerHTML="Player O Won the Match ...";
        //n();
    }
    else if(b7=='o'&&b8=='o'&&b9=='o')
    {
        document.getElementById('out').innerHTML="Player O Won the Match ...";
        //n();
    }
    else if((b1 == 'X' || b1 == '0') && (b2 == 'X'|| b2 == '0') && (b3 == 'X' || b3 == '0') &&(b4 == 'X' || b4 == '0') && (b5 == 'X' ||b5 == '0') && (b6 == 'X' || b6 == '0') &&(b7 == 'X' || b7 == '0') && (b8 == 'X' ||b8 == '0') && (b9 == 'X' || b9 == '0'))
    {
        document.getElementById('out').innerHTML="Match Tie ...";
        //n();
    }
    else
    {
        if(flag==1)
        {
            document.getElementById('out').innerHTML = "Player X turn ...";
            
        }
        else
        {
            document.getElementById('out').innerHTML = "Player O turn ...";
        }
    }
}

flag=1;
function func3(){
    if(flag==1)
    {
        document.getElementById("b1").value='x';
        document.getElementById("b1").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b1").value='o';
        document.getElementById("b1").disabled=true;
        flag=1;
    }
}

function func4(){
    if(flag==1)
    {
        document.getElementById("b2").value='x';
        document.getElementById("b2").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b2").value='o';
        document.getElementById("b2").disabled=true;
        flag=1;
    }
}

function func5(){
    if(flag==1)
    {
        document.getElementById("b3").value='x';
        document.getElementById("b3").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b3").value='o';
        document.getElementById("b3").disabled=true;
        flag=1;
    }
}

function func6(){
    if(flag==1)
    {
        document.getElementById("b4").value='x';
        document.getElementById("b4").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b4").value='o';
        document.getElementById("b4").disabled=true;
        flag=1;
    }
}

function func7(){
    if(flag==1)
    {
        document.getElementById("b5").value='x';
        document.getElementById("b5").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b5").value='o';
        document.getElementById("b5").disabled=true;
        flag=1;
    }
}

function func8(){
    if(flag==1)
    {
        document.getElementById("b6").value='x';
        document.getElementById("b6").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b6").value='o';
        document.getElementById("b6").disabled=true;
        flag=1;
    }
}

function func9(){
    if(flag==1)
    {
        document.getElementById("b7").value='x';
        document.getElementById("b7").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b7").value='o';
        document.getElementById("b7").disabled=true;
        flag=1;
    }
}

function func10(){
    if(flag==1)
    {
        document.getElementById("b8").value='x';
        document.getElementById("b8").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b8").value='o';
        document.getElementById("b8").disabled=true;
        flag=1;
    }
}
function func11(){
    if(flag==1)
    {
        document.getElementById("b9").value='x';
        document.getElementById("b9").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b9").value='o';
        document.getElementById("b9").disabled=true;
        flag=1;
    }
}