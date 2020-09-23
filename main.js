var studentData;
$(document).ready(function(){
  $.get( "https://sheets.googleapis.com/v4/spreadsheets/1tdvRfB7vHSBWfT27cvHGLi5riurc_BR2XCulJmAXGW4/values/Sheet1!A2:E100?key=AIzaSyB5WTjIR5OZt108xl9uQApzeoNRWuMyYRE", function( data ) {
    studentData = data;
    console.log(data);
  for(i=0;i<data.values.length;i++){
    var studentName = data.values[i][0];
      $('#studentSelect').append($('<option>', {
    value: studentName,
    text: studentName
}));
    
  }
    $('#studentList').show();
    $('#loading').hide();
});
});

$('#studentList').submit(function(e){
  e.preventDefault();
  displayEmployee($('#studentSelect').val())
});

function displayEmployee(name){
  for(i=0;i<studentData.values.length;i++){
    var student = stuentData.values[i];
    if(Student[0] == name){
      $('#studentDetails').html("Name : " +  student[0] + " Sales Target : " + student[3] + " Sales Result : " + student[4]);
      $('#studentDetails').show();
    }
  }
}