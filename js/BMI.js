function sum(){
    var n1=document.getElementsByName("num1")[0].value
    var n2=document.getElementsByName("num2")[0].value
    n1=Number.parseInt(n1)
    n2=Number.parseInt(n2)
    var answer="<b> แสดงข้อมูลตรงนี้ </b><br> ตัวเลขที่ 1 :" +n1;
        answer+="<br> ตัวเลขที่ 2 :" +n2;
        answer+="<br> ผลรวม " +(n1+n2)
    document.getElementById("showanswer").innerHTML=answer;

}