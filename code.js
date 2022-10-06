
let header = document.querySelector(".header");

// change the logo to white, change burger icon and display the menu
document.querySelector(".burger").onclick = function(){
    document.querySelector(".nav").classList.toggle("translate-y-0");
    header.classList.toggle("white");
    if(header.classList.contains("white")){
        document.querySelector(".burger").setAttribute("src", "images/icon-close.svg");
        document.querySelector(".logo img").setAttribute("src", "images/logo-white.svg");
        document.querySelector(".nav").style.cssText = "transition-property: color, translate, transform;transition-duration: 0.3s, 0.3s, 0.3s;"
    }else{
        document.querySelector(".burger").setAttribute("src", "images/icon-hamburger.svg");
        document.querySelector(".logo img").setAttribute("src", "images/logo-bookmark.svg");
        setTimeout(()=>{
            document.querySelector(".nav").style.cssText = "transition-property: color, translate, transform;transition-duration: 0.3s, 0.3s, 0s;"
        }, 3000);
    }
}

// making sure menu will and it's design not affect our design if we leave it open and change to bigger screens
const mediaQuery = window.matchMedia('(min-width: 768px)');
mediaQuery.addEventListener("change", (media)=>{
    if(media.matches){
        document.querySelector(".logo img").setAttribute("src", "images/logo-bookmark.svg");
    }else{
        if(header.classList.contains("white")){
            document.querySelector(".logo img").setAttribute("src", "images/logo-white.svg");
        }
    }
});


let tabs = document.querySelectorAll(".tabs span");
let illustration = document.querySelector(".features img[alt='illu-tab1']");
let h1 = document.querySelector(".features .info h1");
let p = document.querySelector(".features .info p");

// changing tabs on click
tabs.forEach((tab)=>{
    tab.onclick = function(e){
        tabs.forEach((tb)=>tb.classList.replace("tab-active", "tab"));
        e.currentTarget.classList.replace("tab", "tab-active");
        fades(e.target.dataset.illu);
    }
});


// function to make some fade animation when we change tab
function fades(target){
    illustration.classList.add("animate-fadeout");
    h1.classList.add("animate-fadeout2");
    p.classList.add("animate-fadeout2");
    setTimeout(() => {
            illustration.setAttribute("src", `images/${target}.svg`);
            switch(target){
                case "illustration-features-tab-1":
                    h1.textContent = "Bookmark in one click";
                    p.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
                    break;
                case "illustration-features-tab-2":
                    h1.textContent = "Intelligent search";
                    p.textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
                    break;
                case "illustration-features-tab-3":
                    h1.textContent = "Share your bookmarks";
                    p.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
                    break;
            }
    }, 1100);
    setTimeout(()=>{
        illustration.classList.replace("animate-fadeout", "animate-fadein");
        h1.classList.replace("animate-fadeout2", "animate-fadein2");
        p.classList.replace("animate-fadeout2", "animate-fadein2");
    }, 1200);
    setTimeout(()=>{
        illustration.classList.remove("animate-fadein");
        h1.classList.remove("animate-fadein2");
        p.classList.remove("animate-fadein2");
    }, 2000);
}

// animate summary appearance
document.querySelectorAll("details").forEach((detail)=>{
    detail.addEventListener('toggle', (e)=>{
        document.querySelectorAll("details > *:not(summary)").forEach((one)=>{
            if(detail.open){
                one.classList.add("animate-sweep");
            }else{
                one.classList.remove("animate-sweep");
            }
        })
    });
})

let input = document.querySelector("input");
let error = document.querySelector(".email img");

// display error style when email is not valid
input.addEventListener('invalid', (e)=>{
    e.preventDefault();
    document.querySelector(".email").classList.add("after:translate-y-[30px]", "after:w-[calc(100%-22px)]");
    input.classList.add("transition-colors", "duration-300", "border-2", "border-red-500");
    error.classList.add("transition", "duration-300");
    error.classList.remove("opacity-0");
    document.querySelector(".contact .btn").classList.add("re-medium:mt-8");
});


let fb = document.querySelector(".fb");
let twt = document.querySelector(".twt");


changeColor(fb);
changeColor(twt);

// function to change color of svg when we hover on an anchor
function changeColor(element){
    element.parentElement.onmouseenter = ()=>{
        element.children[0].setAttribute("fill", "hsl(0, 94%, 66%)");
        element.children[0].style.cssText = "transition: 0.3s";
    }
    element.parentElement.onmouseleave = ()=>{
        element.children[0].setAttribute("fill", "#FFF");
        element.children[0].style.cssText = "transition: 0.3s";
    }
}

const leftedHiddenElements = document.querySelectorAll(".section-left");
const rightedHiddenElements = document.querySelectorAll(".section-right");

animateOnScroll(leftedHiddenElements);
animateOnScroll(rightedHiddenElements);

// function to animate on scroll 
function animateOnScroll(elements){
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
            else{
                entry.target.classList.remove("show");
            }
        });
    });
    elements.forEach((el)=> observer.observe(el));
}