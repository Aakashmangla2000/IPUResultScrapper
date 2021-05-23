const api_url = 
      "http://localhost:3000/";

var y

var reset = 0
var val = 0
 
 async function fetchApi(){
    var branch = document.getElementById("branch").value

    var x = await fetch(api_url+branch);
    y = await x.json()
    // console.log(y,branch);
    const student = y
    // const student = JSON.parse(dat);
    var z = document.getElementById("myText").value;
    nhtml = ""
    html = `<tr id="" class="table-el"><td>%nm%</td><td> %sub%</td><td> %marks%</td></tr>`;
    html2 = `<tr id="" class="table-el"><td>%nm%</td><td style="font-weight: bold;"> %sub%</td><td style="font-weight: bold;"> %marks%</td></tr>`
    // var myobj = document.querySelectorAll("#table-body");
    // myobj.remove();
    // document.querySelector('#table-body').adja('beforeend',nhtml);
    if(reset == 1)
    for(i=0;i<13;i++){
        document.getElementById("myTable2").deleteRow(1);
        reset = 0
        // console.log('hi')
    }

    for(i=0;i<student.length;i++){
        if(student[i].rollNum == z){
        // val = student[i].marks.length+1
        console.log(student[i])

        var obj = {};

        for ( var k=0, len=student[i].marks.length; k < len; k++ )
            obj[student[i].marks[k]['sub']] = student[i].marks[k];

        student[i].marks = new Array();
        for ( var key in obj )
        student[i].marks.push(obj[key]);

        for(j=0;j<student[i].marks.length;j++){
            nhtml = html.replace('%nm%', j);
            nhtml = nhtml.replace('%sub%', student[i].marks[j].sub);
            nhtml = nhtml.replace('%marks%', student[i].marks[j].score);
            document.querySelector('#table-body').insertAdjacentHTML('beforeend',nhtml);
        }

        nhtml = html2.replace('%nm%', student[i].marks.length);
        nhtml = nhtml.replace('%sub%', 'CGPA');
        nhtml = nhtml.replace('%marks%', student[i].cgpa.toFixed(2));
        document.querySelector('#table-body').insertAdjacentHTML('beforeend',nhtml);

        document.getElementById('fname').innerHTML = student[i].name
        reset = 1
        break;
    }   
    }
 }    
 
function findStu(){
    fetchApi()
}