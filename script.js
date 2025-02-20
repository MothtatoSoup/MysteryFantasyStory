
// C O D E   S E T    U P
// ---------------------------------

// ---- STORY CONTENT ----
let StoryTitle = document.getElementById("Title"); // The Title of the page

let StoryText = document.getElementById("SText"); // The story text
// List of content for the story text
//const STxtList = ["At the corner of Elven St lies a small cafe emitting the heavenly smell of coffee. <br/> It's Monday, so your favorite barista, Agis Helethana, is working. <br/> You do have to get to your office, but would a cup of coffee, or tea, really hurt?<br/><br/><br/>What do you do?<br/>1: You might have a client waiting, better head straight to work<br/>2: You are a bit early, stopping in to say hello and get a drink won't hurt<br/>" , "You decided it's best to head straight to work <br/> Though as you leave, you catch a glimse of Agis looking at you through the window <br/> You can't make out his face but you know he's disapointed. To bad for him<br/><br/><br/>  You arrive at work. The silence buzzing louder than usual.<br/>  Normally there's the goblins at the front desk.<br/>but they aren't there<br/><br/> Normally there's the cleaner faries.<br/>But they aren't there<br/><br/>Obviously. They get upset with even the smallest speck of dust so why would they ever allow a stain on the floor.<br/><br/><br/> <br/> ...<br/><br/><br/><br/>  A Stain on the floor...?<br/><br/><br/><br/> Before you can even examine it...<br/><br/> A loud ringing feels your ears<br/><br/>The world starts to blur tog3tHer<br/><br/>Y0u g3t v3Ry dzsy<br/><br/> S3e m0v3MenT<br/><br/><br/> b3cOme v3Ry br1Ght<br/><br/> VeRy waRm<br/> <br/> <br/> f1R3<br/><br/><br/><br/> 1: Resart "]; 
const STxtList = ["Scene 0","Scene 1","Scene 2","Scene 3","Scene 4","Scene 5","Scene 6","Scene 7","Scene 8","Scene 9","Scene 10","Scene 11","Scene 12","Scene 13"]
let SceneImage = document.getElementById("image"); // The images displayed
const StoryImages = ["FROG.jpg","FROG.jpg"] // List of images for the scene
let BottomImage = document.getElementById("image2"); //Bottom Image
const StoryImagesBottom = ["FROG.jpg","FROG.jpg"] // List of bottom images for the scene

// THE SCENE
let TheScene = 0; // What scene it is on
function SceneNum(num){
    // CHanges text based on scene
    StoryText.innerHTML = STxtList[num]; //I'm using innerHTML here so that I can do multilined strings

    // CHanges images based on scene based on scene
    SceneImage = SceneImage.src=StoryImages[num]; 
    BottomImage = BottomImage.src=StoryImagesBottom[num]; 
    TheScene = num;
    console.log(TheScene)
}

SceneNum(0); // Sets it to the beginning scene
console.log('Scene 0')

// ---- INPUT ----
let UserInput = document.getElementById("UserAns"); // What the user inputted
let ValidInput = document.getElementById("inputresponse"); //What displays depending on the input


// S T O R Y     C O D E
// ---------------------------------

document.getElementById("TheButton").addEventListener("click", function changeTheScene(){ //Event listener, this function will change the scene based on what is inputed
    if (UserInput.value == 1){
        console.log("User Input 1");
        ValidInput.textContent = "";
        if(TheScene == 0){
            SceneNum(1);
            console.log("Scene Change 1")
        }else if(TheScene == 1){ // Scene #1 is an ending
            SceneNum(0);
            console.log("Scene Change 0")
        }

    }else if(UserInput.value == 2){
        ValidInput.textContent = "";
        if(TheScene == 0){
            // add code here
        }if(TheScene == 1){ // Scene #1 is an ending, only accepts the input: 1
            ValidInput.textContent = "Not Valid Input Try again!!!";
        }

    }else{
        ValidInput.textContent = "Not Valid Input Try again!!!";
    }
    // Prevents the webpage from restoring itself after the button is Clicked!!
    // VERY IMPORTANT!!!
    event.preventDefault(); // 'Event' does not work. 'event' is deprecated so I may need to find another way
})


/* For Loop. Include at least one for loop in your story.
▪ Example: Gathering clues will add to an array of foundClues. Clicking
the clues button should iterate through the clues array and display all
foundClues.
▪ You could also use a for loop to apply multiple css stylings to a variety
of elements.*/

/* Image Hover: When the user hovers over the image, display a tooltip or
change the image to provide additional information or hints. Use the
mouseover and mouseout event listeners. You can create a separate <div>
element for the tooltip and initially hide it using CSS. HTML DOM Event
Object*/

/* Keyboard Input: When the user presses specific keys (e.g., arrow keys,
spacebar), trigger different events in the story, such as revealing hidden clues
or navigating between scenes. Use the keydown event listener on the
document object. You can access the pressed key using event.key.*/
