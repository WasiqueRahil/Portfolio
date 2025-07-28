const typewrite = document.querySelector(".typewrite");
if (typewrite) {
    const texts = JSON.parse(typewrite.getAttribute("data-text"));
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type(){
        if (count===texts.length) count=0;
        currentText=texts[count];
        letter=currentText.slice(0,++index);
        typewrite.textContent= letter;

        if (letter.length===currentText.length){
            count++;
            index=0;
            setTimeout(type,1000);
        } else{
            setTimeout(type,1000);
        }
    })();
}

document.getElementById("themeToggle").addEventListener("click", function (){
    document.body.classList.toggle("dark");
});