document.getElementById("Execute").addEventListener("click", function(){
    
    let sentence = document.getElementById("sentence").value;

    let removecharacters = sentence.replace(" ",',', '*', ":");

    //let splitWords = removeCharacters.trim().split(" ")
    let splitWords = removeCharacters.trim().split(" ").filter(function(w) { return w !== ""; });
    
   document.getElementById("sent-count").value = splitWords.length;

    let wordsDiv = document.getElementById("words");
    wordsDiv.innerHTML = "";

   splitWords.forEach(function(word) {
        var span = document.createElement("span");
        span.textContent = word + " ";
        span.style.textDecoration = "underline";
        wordsDiv.appendChild(span);
    });
});