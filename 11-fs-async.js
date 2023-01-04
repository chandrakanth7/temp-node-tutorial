const {readFile, writeFile, read, write} = require('fs') 

console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return;
    }
    else
    {
        const first = result
        readFile('./content/second.txt','utf-8',(err, result)=>{
            if(err)
            {
                console.log(err)
                return;
            }
            else
            {
                const second = result
                writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,(err,result)=>
                {
                    if(err)
                    {
                        console.log(err)
                        return
                    }
                    else
                    {
                        console.log('Done with the task')
                    }
                })
            }
        })
    }
})
console.log('Starting next task')