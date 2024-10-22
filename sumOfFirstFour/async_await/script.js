function calculate(){
    return new Promise((resolve, reject)=>{
        let val = [1,2,3,4];
        let count = 0;
        for (let i =0; i<val.length;i++){
            count +=val[i];
        }
        setTimeout(()=>{
            console.log("Sum is ", count);
            resolve(count);

        },1000);
    });
}
async function displaySum(){
    try{
        const sum = await calculate();
        document.getElementById("result").innerText = sum;
    }catch (error){
        console.error("An error occured: ",error);
    }
}
displaySum();