const fs = require('fs');

fs.readFile('IT.json', (err, data) => {
    if (err) throw err;
    const student = JSON.parse(data);
    x = student
    for(i=0;i<student.length;i++){
        if(student[i].rollNum == 35511503118)
        console.log(student[i])
    }
});
