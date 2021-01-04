let dotask=(success,failure)=>{
    let isDone = false;
    if (isDone)
        success('Task is done')
    else
        failure('task is not done')
}
dotask((message)=>{
    console.log(message)
},(message)=>{
    console.error(message)
})

//Actual cleaning
let cleanCamara = new Promise((resolve, reject)=>{
    isDone=false;
    if(isDone)
        resolve('Done');
    else
        reject('Not Done')
});
cleanCamara.then((message)=>{
    console.log(message)
}).catch((err)=>{
    console.error(err)
})
