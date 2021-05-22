// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

const { count } = require('console');
const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('031_BTECH_JAN2021.pdf');

pdf(dataBuffer).then(function(data) {
 
    // number of pages
    // console.log(data.numpages);
    // // number of rendered pages
    // console.log(data.numrender);
    // // PDF info
    // console.log(data.info);
    // // PDF metadata
    // console.log(data.metadata); 
    // // PDF.js version
    // // check https://mozilla.github.io/pdf.js/getting_started/
    // console.log(data.version);
    // PDF text
    // console.log((data.text.length)); 
    // let arr = data.text.split(" ");
    // console.log((arr))
    let allData = data.text
    var patt1 = /[^9]\d{5}031\d{2}\D/gmi;
    // const regex = /\b[^9]\d{5}031\d{2}\b/gm;

    var result = allData.match(patt1);
    // console.log(result)
    // result.sort()
    // count = result.filter(x => x == 41411503118).length;
    // console.log(allData)
    // console.log(findDuplicates(result))
    x = new Set(result)
    // console.log(x)
    result = Array.from(x);
    let finalArray = []
    let obj = {}
    for (i=0; i<result.length-1;i++){
        obj = {}
        // console.log(result[word])
        w = result[i].slice(0,(result[i].length)-1)
        w2 = result[i+1].slice(0,(result[i+1].length)-1)
        var pos = allData.search(w);
        var pos2 = allData.search(w2);
        var res = allData.slice(pos+11, pos2);
        var pos3 = res.search('RESULT');
        if(pos3 == -1){
            a = 1
            // console.log('wtf')
            // console.log('start',res,'end')
        }
        else{
        var res2 = res.slice(0,pos3);
        res = res2
        }
        ind = res.indexOf('SID:')

        let regex1 = /\d{6}\W\d\W/gmi;
        var subjectCodes = res.match(regex1);

        obj.rollNum = w
        obj.name = res.slice(0,ind)
        obj.marks = []

        obj2 = {}
        for(j=0;j<subjectCodes.length;j++){
            obj2 = {}
            let marks = res.slice(res.lastIndexOf(subjectCodes[j]),res.lastIndexOf(subjectCodes[j+1]))
            var marks2 = marks.split("\n");
            if(marks2[2] != undefined)
            var fMarks = marks2[2].slice(0,2)
            else 
            fMarks = 0
            obj2.sub = subjectCodes[j]
            obj2.score = fMarks
            obj.marks.push(obj2)
            // console.log('\n',i,'\n',fMarks)
        }
        // console.log(i)
        // obj.subjects = subjectCode
        finalArray.push(obj)
        // console.log('start-------->', res,'<-----------end')
        // if(result[word] == 41411503118)
        // console.log(ind)
    }
    for(i=0;i<finalArray.length;i++)
    console.log(finalArray[i]) 
    // console.log(finalArray.length)
});