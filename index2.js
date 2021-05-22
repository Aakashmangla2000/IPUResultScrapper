str =  `start--------> RISHITA GOELSID: 190000116605SchemeID: 190312016001
099201(4)
 24   53 
77(A+)
027203(4)
 25   70 
95(O)
028205(4)
 22   60 
82(A+)
049207(4)
 23   75 
98(O)
027209(4)
 22   56 
78(A+)
027211(4)
 24   61 
85(A+)
028253(1)
 34  A
A
027255(1)
 36   54 
90(O)
027257(1)
 39   58 
97(O)
049257(1)
 34   54 
88(A+)
 27 
 <-----------end`
        obj = {}
        ind = str.indexOf('SID:')

        let regex1 = /\d{6}\W\d\W/gmi;
        var subjectCodes = str.match(regex1);

        // let pos = str.search([subjectCode[0].slice(0,subjectCode[0].length-3)])
        // let marks = str.slice(str.lastIndexOf(subjectCode[1]),str.lastIndexOf(subjectCode[2]))
        // var marks2 = marks.split("\n");
        // var fMarks = marks2[2].slice(0,2)

        obj.rollNum = 414
        obj.name = str.slice(0,ind)
        obj.marks = []

        obj2 = {}
        for(i=0;i<subjectCodes.length;i++){
            obj2 = {}
            let marks = str.slice(str.lastIndexOf(subjectCodes[i]),str.lastIndexOf(subjectCodes[i+1]))
            var marks2 = marks.split("\n");
            var fMarks = marks2[2].slice(0,2)
            obj2.sub = subjectCodes[i]
            obj2.score = fMarks
            obj.marks.push(obj2)
            console.log(marks2)
        }

        // console.log(str[pos+subjectCode[0].length+2])
        console.log(obj)