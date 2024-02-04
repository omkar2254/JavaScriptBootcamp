//for each loop 
const languages = ["js", "html", "css"];

//for each loop take callback function
languages.forEach( function(lang){
    console.log(lang);
})

const frameworks = ["React", "Angular", "Vue"]
frameworks.forEach((i, index, arr)=>{
    //console.log(i, index, arr);
})

function printMe(item){
    //console.log(item);
}
frameworks.forEach(printMe);

const object = [
    {
        langName: "Javascript",
        ext: "js"
    },
    {
        langName: "html",
        ext: "html"
    },
    {
        langName: "CSS",
        ext: "css"
    }
]

object.forEach((item)=>{
    //console.log(item);
    console.log(item.ext);
})