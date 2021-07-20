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
const sections = document.querySelectorAll('section')
const navBar = document.getElementById('navbar__list')

// console.log(navbar)
// console.log(sections)


// build the nav
//document fragmet => virtual 

function addSectionToNavBar(sections, navBar){
    //create document fragment to enhance performance
    const docFrag = document.createDocumentFragment()
    
    //array for all listitems
    let listItems;
    sections.forEach(section => {
        const a = document.createElement('a')
        a.setAttribute('href',`#${section.id}`)
        a.setAttribute('class','menu__link')
        a.innerText=`${section.id}`
        const li= document.createElement('li')
        li.innerText=`${section.id}`
        li.style.cursor='pointer'
        li.addEventListener('click', ()=>{
            
            section.scrollIntoView({
                alignToTop:true,
                behavior:"instant",
                block:"start",
                
            })
        })
        // li.appendChild(a)
       
        docFrag.appendChild(li)
        
        // listItems.push(li)
    });

 
    //add sections to docfrag
    // console.log(docFrag)
    navBar.appendChild(docFrag)

}


addSectionToNavBar(sections, navBar)

// Add class 'active' to section when near top of viewport

function isInViewport (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 
const docfragMenu = document.createDocumentFragment()

const navMenu = document.createElement('div')
navMenu.setAttribute('id','menu')

const line1 = document.createElement('div')
line1.setAttribute('class','line')
navMenu.appendChild(line1)

const line2 = document.createElement('div')
line2.setAttribute('class','line')
navMenu.appendChild(line2)

const line3 = document.createElement('div')
line3.setAttribute('class','line')
navMenu.appendChild(line3)

docfragMenu.appendChild(navMenu)

const header = document.querySelector('body > header')
// console.log(header)
header.insertBefore(docfragMenu,document.querySelector('.page__header > nav'))


//responsive
const burgerMenu = document.getElementById('menu')


burgerMenu.style.display='none'




let winWidth
winWidth = document.documentElement.clientWidth
console.log(winWidth)
const navOnMobile=document.querySelector('#navMenu')

burgerMenu.addEventListener('click', function(){
    if(navOnMobile.style.display ==='none'){navOnMobile.style.display='block';
    navOnMobile.classList.add('menu-on-mobile')}
    else if((navOnMobile.style.display ==='block')) navOnMobile.style.display='none'
    
})

if(winWidth <= 540){
    navOnMobile.style.display='none';
        navOnMobile.classList.remove('navbar__menu')
        
   
        
   
   
burgerMenu.style.display='block'

navOnMobile.classList.add('menu-on-mobile')
    
}else{
    navOnMobile.style.display='block';
    burgerMenu.style.display='none'
   if( navOnMobile.classList.contains('menu-on-mobile')){
    navOnMobile.classList.remove('menu-on-mobile')
    navOnMobile.classList.add('navbar__menu')

   }else{
    navOnMobile.classList.add('navbar__menu')
   }

}





window.addEventListener('resize', function(){

    //check miobile size

    winWidth = document.documentElement.clientWidth

    
 
    if(winWidth <= 540){
            navOnMobile.style.display='none';
            navOnMobile.classList.remove('navbar__menu')
        //     burgerMenu.addEventListener('click', function(){
        //         navOnMobile.style.display='block';
        //         navOnMobile.classList.add('menu-on-mobile')}
                
                
        // )
       
            
       
       
    burgerMenu.style.display='block'
   
    navOnMobile.classList.add('menu-on-mobile')
        
    }else{
        navOnMobile.style.display='block';
        burgerMenu.style.display='none'
       if( navOnMobile.classList.contains('menu-on-mobile')){
        navOnMobile.classList.remove('menu-on-mobile')
        navOnMobile.classList.add('navbar__menu')

       }else{
        navOnMobile.classList.add('navbar__menu')
       }

    }


});


const liTest = document.querySelectorAll('#navbar__list > li')
// console.log(liTest)

document.addEventListener('scroll',function (e){
    //prevent default
    e.preventDefault();
    

    // window.scrollTo({
    //     top:10,
    //     left:10,
    //     behavior:'smooth'
    // }) // i tryed :(
   
    for (let i = 0; i < sections.length; i++) {
        
        if(isInViewport(sections[i])){
            // sections[i].scrollIntoView({
            //     alignToTop:true,
            //     behavior:"smooth",
            //     block:"start",
                
            // })
            if(!liTest[i].classList.contains("active")) liTest[i].classList.add("active");
        }else if(liTest[i].classList.contains("active"))liTest[i].classList.remove('active')  
    
    // console.log(isInViewport(sections[i]))
        
    }

  
    
})

// Scroll to section on link click

// Set sections as active


