$(document).ready(
    function(){
        getData();
    }
);
function getData(){
    let localStorageData=localStorage.getItem("student");
    let studentObj=JSON.parse(localStorageData);
    console.log(studentObj);
    $("#firstName").text(studentObj.firstName);
    $("#lastName").text(studentObj.lastName);
    $("#motherName").text(studentObj.motherName);
    $("#fatherName").text(studentObj.fatherName);
    $("#address").text(studentObj.address);
    $("#dob").text(studentObj.dob);
    $("#pincode").text(studentObj.pincode);
    $("#course").text(studentObj.course);
    $("#email").text(studentObj.email);
}
