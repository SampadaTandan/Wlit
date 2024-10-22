function calculate(callback) {
    return new Promise((resolve, reject) => {
        let val = [1, 2, 3, 4];
        let count = 0;
        
        for (let i = 0; i < val.length; i++) {
            count += val[i];
        }
        
       
        setTimeout(() => {
            console.log("Sum is ", count);
            resolve(count);  // Resolve the promise with the result
        }, 1000); 
    }).then((result) => {
        callback(result);  // Pass the result to the callback function
    }).catch((error) => {
        console.error("An error occurred:", error);
    });
}

function handleResult(result) {
    document.getElementById("result").innerText = result;
    // document.getElementById("calculate").innerHTML = result;
    
}
calculate(handleResult);
