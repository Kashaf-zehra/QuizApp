

function button(){
var x=document.getElementById("inp")
if(x.value==""){
    alert("User name required")
}
else{
      window.location.href= "quiz.html"
}
}

function check(){
    var  score=0;
    var right_ans=document.getElementById("ques2")
    var ques1=document.getElementById("ques1")
    var ques2=document.getElementById("ques3")
    var ques3=document.getElementById("ques4")
    if(right_ans.checked==true){
        score++
        alert("Q1 is right")
    }
    else{
        alert("Q1 is wrong")
    }


    var right_ans2=document.getElementById("ques1-2")
    var quesa=document.getElementById("ques2-2")
    var quesb=document.getElementById("ques3-2")
    var quesc=document.getElementById("ques4-2")
    if(right_ans2.checked==true){
        score++
        alert("Q2 is right")
    }
    else{
        alert("Q2 is wrong")
    }

    var right_ans3=document.getElementById("ques2-3")
    var quesd=document.getElementById("ques1-3")
    var quese=document.getElementById("ques3-3")
    var quesf=document.getElementById("ques4-3")
    if(right_ans3.checked==true){
        score++
        alert("Q3 is right")
    }
    else{
        alert("Q3 is wrong")
    }

    var right_ans4=document.getElementById("ques4-4")
    var quesg=document.getElementById("ques1-4")
    var quesh=document.getElementById("ques3-4")
    var quesi=document.getElementById("ques4-4")
    if(right_ans4.checked==true){
        score++
        alert("Q4 is right")
    }
    else{
        alert("Q4 is wrong")
    }

    alert("Your Score Is"+ " "+ score++ +"/4")



}