const nums = [1, 2, 3, 4, 5, 6, 7, 8]

//const newNums = nums.filter((num) => num > 4)

const  newNums = nums.filter((num)=>{
    return num > 4;
})
console.log(newNums)

const books = [
    {title: "Atomic Habits", genere: "Self Help", published: 2012},
    {title: "Hitler", genere: "History", published: 1902},
    {title: "Lord Ganpati", genere: "Spirtiual", published: 2023},
    {title: "Coffee break", genere: "Fiction", published: 2029},
    {title: "King", genere: "Fiction", published: 2012},
    {title: "Atomic Particles", genere: "Science", published: 2112},
]

const fictionBooks = books.filter((bk)=> bk.genere==="Fiction")
//console.log(fictionBooks)

const publishDate = books.filter((pb)=>pb.published > 2000)
//console.log(publishDate)

//console.log(books)

const bappaBooks = books.filter((bk)=>{
    return bk.title === "Lord Ganpati";
})
console.log(bappaBooks);