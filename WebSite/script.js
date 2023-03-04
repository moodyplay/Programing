let activeIndex = 0;


const articles = document.getElementsByTagName("article");

const RightClick = () => {

const nextIndex = activeIndex + 1

const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
    nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);

currentArticle.dataset.status = "after";

nextArticle.dataset.status = "active";

activeIndex = nextIndex;


}

const LeftClick = () => {

    const nextIndex = activeIndex - 1;
    
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
        nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentArticle.dataset.status = "afterLeft";
    
    

    nextArticle.dataset.status = "active";
    
    activeIndex = nextIndex;
    
    
 }

 const buttonShake = () => {
    var pushed = document.getElementById("Btn");
    pushed.classList.add("shake");
    var delay = setTimeout(function(){
        pushed.classList.remove("shake");
    }, 300)
}
const rightButtonShake = () => {
    var pushed = document.getElementById("EBtn");
    pushed.classList.add("shake");
    var delay = setTimeout(function(){
        pushed.classList.remove("shake");
    }, 300)
}



