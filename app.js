document.getElementById("btn1").onclick = function(){
    inputString = document.getElementById("text1").value;
    var counter = 0;
    var flippedString = '';
    var ishappyFace=true;  
    var arr = [];
    stringArray = Array.from(inputString);
    for (let i =0 ;i<stringArray.length-1; i++){
        if(stringArray[i]!= stringArray[i+1]){
            arr = new Array(i+1).fill(stringArray[i+1]);
            counter++;
            } 
        else{
            arr.push(stringArray[i]);
            }
        }
    arr.push(stringArray[stringArray.length-1])
    stringArray.forEach(element=> {
        if(element=='-')
            ishappyFace = false;
        });
    inputString = stringArray.join();
    if(ishappyFace){
        flippedString = inputString;  
        }
    else{
        flippedString = inputString.replaceAll('-','+');
        counter++;
        }
    alert(flippedString+" All pancakes served with happyFace side up with "+counter+" flips!");
    }
