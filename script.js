
// C O D E   S E T    U P
// HTML elements
const StoryTitle = document.getElementById("Title");
const SceneTitle = document.getElementById("STitle");
const StoryText = document.getElementById("SText");
const SceneImage = document.getElementById("image"); 

STxtList = ["Beggining Text", "Omg a change!!"];
function ChangeStoryText(i) {
    StoryText.textContent = STxtList[i]
}

ChangeStoryText(0);







/* For Loop. Include at least one for loop in your story.
▪ Example: Gathering clues will add to an array of foundClues. Clicking
the clues button should iterate through the clues array and display all
foundClues.
▪ You could also use a for loop to apply multiple css stylings to a variety
of elements.*/

/* Event Listeners. When an event is triggered (like mouseclick), it should:
▪ Change the text content of one or more paragraphs to advance the
story. Use the textContent property of the paragraph element. For
example: paragraph1.textContent = "You venture into the dark forest.";
Not every event needs to change the image. It could simply
advance the dialogue if needed.
*hint* write a function to update the text box with the appropriate
story text.
▪ JavaScript DOM EventListener
▪ Change the image displayed. Change the src attribute of the image
element. For example: image.src = "forest.jpg"; Make sure you have
image files named forest.jpg, etc., in the same directory as your HTML
file. *hint* write a function to change images to the passed
argument image src.
▪ You must also modify the style (e.g., color, font) of some text using
your .css file or inline JS code.*/

/* Image Hover: When the user hovers over the image, display a tooltip or
change the image to provide additional information or hints. Use the
mouseover and mouseout event listeners. You can create a separate <div>
element for the tooltip and initially hide it using CSS. HTML DOM Event
Object*/

/* Keyboard Input: When the user presses specific keys (e.g., arrow keys,
spacebar), trigger different events in the story, such as revealing hidden clues
or navigating between scenes. Use the keydown event listener on the
document object. You can access the pressed key using event.key.*/
