function getdata(form){
    var cardid=form.cardid.value
    var fname=form.fname.value;
    var lname=form.lname.value;
    var stdid=form.stdid.value;
    var birthday=form.birthday.value;
    var activity=form.activity.value;
    var gender=form.gender.value;
    var comment=form.comment.value;
    var answer=` ${cardid}  ${fname}  ${lname}  ${stdid}  ${birthday}  ${gender}  ${activity}  ${comment}`;
    var answer="<b> แสดงข้อมูลตรงนี้ : </b><br> รหัสบัตรประชาชน : " +cardid;
        answer+="<br> ชื่อ : " +fname;
        answer+="<br> นามสกุล : " +lname;
        answer+="<br> รหัสนักศึกษา : " +stdid;
        answer+="<br> วันเกิด : " +birthday;
        answer+="<br> กิจกรรมที่ชอบ : " +activity;
        answer+="<br> เพศ : " +gender;
        answer+="<br> นิยามเกี่ยวกับตัวเอง : " +comment;
    document.getElementById("show").innerHTML=answer;
}