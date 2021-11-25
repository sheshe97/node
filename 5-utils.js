const sayHi=(name)=>{
    console.log(`hello ${name}`)
}

module.exports=sayHi
const path=require("path")
const user=path.sep
console.log(user)
const pathfolder=path.join("content","subtiti","text.txt")
console.log(pathfolder)
const abs=path.resolve(__dirname,"content","subtiti","text.txt")
console.log(abs);