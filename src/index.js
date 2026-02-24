// import nlp from 'compromise'
// import {rando} from '@nastyox/rando.js'
import {createServer} from 'http'

// function apply(str, pos, func) {
//     var doc = nlp(str);
//     doc = doc.normalize('heavy');
//     doc = doc[pos+'s']()[func]();
//     return doc
// } 

// var data = await fetch('https://doikayt.vercel.app/api');
// var obj = await data.json();
// var objArr = Object.values(obj).flat(2);
// var sentences = [];
// for (let i = 0; i < objArr.length; i++) {
//     let desc = objArr[i]?.description;
//     if (!desc) {
//         continue;
//     }
//     if (desc.includes('...')) {
//         continue;
//     } 
//     let sentence = Array.isArray(desc.split('.')) ? desc.split('. ')[0]+'.' : desc;
//     sentences.push(sentence);
// }

// var paragraph = sentences.join(' ').toLowerCase()

// var doc = nlp(paragraph)

// doc.normalize('medium')

// doc.unique()

// var verbArr = doc.verbs().out('array')
// var nounArr = nounArr = doc.nouns().out('array')

// function verb() {
//     var randomVerb = verbArr[rando(verbArr.length-1)]
//     return randomVerb
// }
// function noun() {
//     var randomNoun = nounArr[rando(nounArr.length-1)]
//     return randomNoun
// }


// var thoughts = ['and did u know I brushed my teeth today', 'and did you know the patriots lost', 'and did you know the sky is turning red', 'did you know', 'and did you know that god isn\'t dead', 'and where is my phone', 'and where did it go', '????', 'and what are your thoughts on genocide', 'and are trans people real', 'and what about antisemitism?', 'and is any of this new', 'and what is knowledge anyway', 'and is this a fungal infection', 'and what\'s your ideal way to die']



createServer((req,res)=>{
//     var preHtml =`emma@emmas-MacBook-Air worldburning %

//   IS IT POETRY

// that ${noun() + ' ' + verb() + ' ' + noun() + '  &'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}
// ${noun() + ' ' + verb() + ' ' + noun() + '--&'}


//       ${rando(thoughts).value}
      
// `

    var html = `<!DOCTYPE html>
<html style="filter:invert(100%)">
    <head>
        <title>by emma kn</title>
    </head>
    <body>
        <pre>${'preHtml'}</pre>
    </body>
</html>`
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(html)
}).listen(8080)