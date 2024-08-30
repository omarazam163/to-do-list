const express = require("express")
const dp = require("./dpconfig")
const app =express()
app.use(express.json())
const user=[]
function generateRandomNumber() {
    return Math.floor(10000 + Math.random() * 90000);
  }
function getSecondsSinceStartOfDay() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    return hours * 3600 + minutes * 60 + seconds;
  }
app.post("/users",async (req,res)=>{
    const {title} = req.body
    const {discription}= req.body
    const {completed}= req.body
    if(title===null||completed===null)
    {
        res.status(404).send("enter valid data")
    }
    let task =
    {
        id:generateRandomNumber(),
        title: title,
        discription: discription,
        completed: completed,
        start: getSecondsSinceStartOfDay(),
        end:100
    }
    try
    {
        await dp("todos").insert(task);
        res.send("done")
    }
    catch(err)
    {
        console.log(err)
        res.status(400).send("error");
    }
})
app.get("/users", async (req,res)=>{
    try{
    const todos = await dp("todos");
    res.send(res.json(todos));
    }
    catch(err)
    {
        res.status(400).send("failed")
    }
} )
app.put("/users/:id",async (req,res)=>
{
    const {id} = req.params
    const {title} = req.body
    const {discription}= req.body
    const {completed}= req.body
    if(title===null||completed===null)
    {
        res.status(404).send("enter valid data")
    }
    let task =
    {
        id:id,
        title: title,
        discription: discription,
        completed: completed,
        start: getSecondsSinceStartOfDay(),
        end:100
    }
    try
    {
        const current_todo = await dp("todos").where({id}).update(task);
        res.status(200).send(`update is done for ${id}`)
    }
    catch
    {
        res.status(400).send("update failed")
    }
})
app.delete("/users/:id",async (req,res)=>
{
    const {id} = req.params
    try
    {
        const current_todo = await dp("todos").where({id}).del();
        res.status(200).send(`delete is done for ${id}`)
    }
    catch
    {
        res.status(400).send("delete failed")
    }
}

)
app.listen(3000,()=>console.log("started on port 3000"))