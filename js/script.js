function colorGenerator(){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode =  "#" + randomNumber.toString(16);
    console.log(randomNumber,randomCode);

    document.body.style.backgroundColor = randomCode;
    document.getElementById('colorCode').innerHTML=randomCode;
    document.getElementById('sample').style.backgroundColor= randomCode;


     let copiedCode = navigator.clipboard.writeText(randomCode);

     document.getElementById('colorMessage').innerHTML="Copied to clipboard";
 
    setTimeout(function(){
 
         document.getElementById('colorMessage').innerHTML="";
 
    }, 3000)

    

     
   

}

