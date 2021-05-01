/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//selecting sections
const sections = document.querySelectorAll("section");

const ul_element= document.getElementById("navbar__list");
const documentFragment = document.createDocumentFragment();



// build the nav
// Scroll to section on link click
function create(){
    sections.forEach((Item)=>{
        //creating Links and setting them titles
        let newNavelementText= Item.getAttribute("data-nav");
        let newNavelement= document.createElement("a");
        let text=document.createTextNode(newNavelementText);
        
        //creating Li 
        let newli=document.createElement("li");
        newNavelement.appendChild(text);
        newli.appendChild(newNavelement);
        newNavelement.addEventListener("click",(event)=>{
            Item.scrollIntoView({behavior:"smooth"});
        })
        documentFragment.appendChild(newli);
    }
    );
    
    ul_element.appendChild(documentFragment);


}


create();


//Scrolling Function
// Scroll to anchor ID using scrollTO event
//Styling and marking active sections
function scrolling (){
    window.addEventListener("scroll",()=>{
        sections.forEach((section)=>{
            const boundReact =section.getBoundingClientRect();
    
    
            if (boundReact.top>0 && boundReact.top <300){
                
                sections.forEach((activeSection)=>{
                    activeSection.style.background= "#aeaeae";
                })

                section.style.background="#405165";
                
    
                
            }
        })
    })    



}

scrolling ();



//To the top button

ToTop = document.getElementById("buttonToTop");

//Show btn when scroll
window.onscroll = function() {scrollTillTheTop()};

function scrollTillTheTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    ToTop.style.display = "block";
  } else {
    ToTop.style.display = "none";
  }
}

//when click go to the top 
function toTheTop() {
    // for safary users
  document.body.scrollTop = 0;  
  //For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0; 
}








