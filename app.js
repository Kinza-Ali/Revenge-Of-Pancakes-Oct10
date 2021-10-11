console.log("File is linked..");

document.getElementById("btn1").onclick = function(){
        inputString = document.getElementById("text1").value;
        var counter = 0;
        stringLength = inputString.length;
        flippedString = '';
        var flag = happyfaces(inputString);
        if(flag){
            flippedString = inputString;
            console.log("All pancakes has happy faces on top");
            counter = 0;
        }
        else{
            var notBlankside = blankSidePancakes(inputString);

            if(notBlankside){
                
            stringArray = Array.from(inputString) 
            for (let i =0 ;i<stringArray.length-1; i++){
                    if(stringArray[i]!= stringArray[i+1]){
                        for(let j=i;j>=0;j--)
                        stringArray[j] = stringArray[j+1]
                        counter++;
                    }
                    
            }
            
                inputString = stringArray.join();
                // check for happy faces and blank faces
                var happyfaceSideUP = happyfaces(inputString);
                if(happyfaceSideUP){
                    flippedString = inputString;
                }
                else{
                    flippedString = inputString.replaceAll('-','+');
                }
            
           }
           else {
               console.log("all blank sides flipped to happy faces");
               flippedString = inputString.replaceAll('-','+');
               counter=1;
               
           }
        }
        console.log(flippedString+" All pancakes served with happyFace side up with "+counter+" flips!");

        alert(flippedString+" All pancakes served with happyFace side up with "+counter+" flips!");
        
}

var happyfaces = function(inputString){
    var flag = true;
    for(let i =0 ;i< stringLength; i++){
        if (inputString[i]== '-'){
            flag = false;
            break;
        }
    }
    return flag;
}
var blankSidePancakes = function(inputString){
    notBlankside = false;
    for(let i =0 ;i< stringLength; i++){
        if (inputString[i]== '+'){
            notBlankside = true;  
        }
    }
    return notBlankside;
}

