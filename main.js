const api_url = 
      "http://localhost:3000/elements";

    var y
 
 async function fetchApi(){
    var x = await fetch(api_url);
    y = await x.json()
    console.log(y);
    const student = y
    // const student = JSON.parse(dat);
    var z = document.getElementById("myText").value;

    for(i=0;i<student.length;i++){
        if(student[i].rollNum == z){
        console.log(student[i])
        document.getElementById('name').innerHTML = student[i].name
        document.getElementById('rollno').innerHTML = student[i].rollNum
        document.getElementById('cgpa').innerHTML = student[i].cgpa.toFixed(2)
    }
    }
 }    
 
function findStu(){
    fetchApi()
}