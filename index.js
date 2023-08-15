// document.querySelector(".w").addEventListener("click",handleClick); //adding event
// function handleClick()
// {
//     alert("jaldi waha se hato");
// }

// document.querySelector(".w").addEventListener("click",function () //annonymous fn
// {
//     alert("jaldi waha se hato");
// });

// var aud = new Audio("sounds/tom-1.mp3"); //audio
// aud.play();



for(var i = 0;i<document.querySelectorAll(".drum").length;i++)   //using for loop to add event listeners to all the drums
{
    console.log("hello");
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
         makeSound(this.textContent);
         makeAnimation(this.textContent);


    });
}



document.addEventListener("keypress",function(event)     //keypress event
{
    makeSound(event.key);

    makeAnimation(event.key);

});






function makeSound(key) //makes sound
{
    switch(key)
    {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3"); //audio
           
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3"); //audio
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3"); //audio
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3"); //audio
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3"); //audio
            snare.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3"); //audio
            kick.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3"); //audio
            crash.play();
            break;
        default :
            alert("please enter correct input");
 
    }
}


function makeAnimation(key)
{
    var htmlelement = document.querySelector("."+key);
    htmlelement.classList.add("pressed"); //adds animation

    setTimeout(function()  //executes anonymous fn after 100 ms delay
    {
       htmlelement.classList.remove("pressed");
    },100);

}