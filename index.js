//greeting fade in/out
const greetings = ["Hello", "مرحبا", "Hola", "Bonjour", "Ciao"]
let i = 0;
const textElement = document.getElementById("hello_text");
function animate_greeting(){
    textElement.style.opacity = 0;
    setTimeout(()=>{
        i = (i + 1) % greetings.length;
        if(i==1){
            textElement.style.fontSize="69px";
        }
        else{
            textElement.style.fontSize="80px";
        }
        textElement.textContent = greetings[i];
        textElement.style.opacity = 1;
    }, 1000);

}
textElement.style.opacity=1;
setInterval(animate_greeting,3000);
