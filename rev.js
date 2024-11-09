// Array of reviewer items (Each item has a definition and term)
const items = [
    { definition: "1. Animation", term: "Process of designing, drawing, making layouts and preparation of photographic sequences which are integrated in the multimedia and gaming products." },
    { definition: "2. Traditional Animation", term: "Refers to animation Hand-drawn on paper. Process used for most of the production throughout the 20th century." },
    { definition: "3. 2D Animation (Vector – based)", term: "One of the major types of animation. It is widely used for creating animated for the movies, cartoons, marketing, videos, advertisement" },
    { definition: "4. 3D Animation", term: "Process objects and making them come to life by creating the illusion that they are moving through a 3D space." },
    { definition: "5. Motion Graphics", term: "Way to communicate with the viewer, and add depth to story" },
    { definition: "6. Stop Motion", term: "animated filmmaking technique in which objects are physically manipulated in small increments between Individually photographed frames." },
    { definition: "7. Whiteboard Animation", term: "where an artist draws a scene on a whiteboard and records it as an illustrative story" },
    { definition: "8. Typography Animation", term: "Animated Typography or Kinetic Typography is a type of animation that involves moving text with effects like Expanding, Shrinking, or anything else that suits the scene." },
    { definition: "9. Claymation", term: "type of stop motion animation that involves creating a scene in clay." },
    { definition: "10. Rotoscope Animation", term: "Process of creating animated sequences by tracing over live-action footage frame by frame." },
    { definition: "11. Flipbook Animation", term: "One of the earliest forms of animation that involves a small book with drawings on its pages." },
    { definition: "12. Puppetry Animation", term: "Puppets as the video’s primary subjects instead of any other objects." },
    
    //Week 2
    
    { definition: "13. Timeline", term: "Organizes and controls a document's content over time in layers and frames." },
    { definition: "14. Timeline Control", term: "Surfacing extra functionality upfront" },
    { definition: "15. Multi Layer View and Single Layer View", term: "Types of Layer View" },
    { definition: "16. Camera Tool", term: "It can change the rotation and scaling of symbols or frame once you enable this" },
    { definition: "17. Layer Parenting view", term: "Displays the parenting hierarchy of layers" },
    { definition: "18. Layers Depth", term: "creates a layer depth panel and allows you to modify the depth of the active layer provided in the list." },
    { definition: "19. Keyframe", term: "Frame where a new symbol instance appears in the timeline" },
    { definition: "20. Span", term: "Frame selection allows you to select a range of frames between two keyframes with a single click"},
    { definition: "21. Static Frame span", term: "Frame selection allows you to select a range of frames between two keyframes with a single click." },
    { definition: "22. Actionscipt3.0", term: "The platform type of character animation" },
    { definition: "23. Frames", term: "Core of any animation, dictating each segment of time and movement." },
    
    // Week 3

    { definition: "24. Tools Panel", term: "Let you draw, paint, select, and modify artwork, as well as change the view of the Stage." },
    { definition: "25. Brush Tool (B)", term: "Use to custom-define a brush by setting parameters of the brush such as shape and angle." },
    { definition: "26. Bone Tool (M)", term: "Use the Bone tool to use Inverse kinematics (IK), a way of animating objects using bones chained into linear or branched armatures in parent-child relationships." },
    { definition: "27. Camera tool (C)", term: "Use to mimic a virtual camera movement" },
    { definition: "28. Ellipse Tool (O)", term: "Use to draw circles and ovals." },
    { definition: "29. Pencil Tool (Shift + Y)", term: "Draw and edit freehand lines" },
    { definition: "30. Pen Tool (P)", term: "To draw straight and curved lines to create object" },
    { definition: "31. Rectangle Tool (R)", term: "To draw squares and rectangles." },
    { definition: "32. Transform Tool (Q)", term: "To scale, rotate, or skew a selection." },
    { definition: "33. Library Panel (Ctrl + L)", term: "It stores the media assets that you create in the Animate authoring environment or import to use in the document." },
    { definition: "34. CC Libraries", term: "It lists all the creative assets that you have stored in your libraries along with the assets that others have shared with you." },
    { definition: "35. Selection Tool (V)", term: "This tool is use to select an entire object. Click or drag an object to enclose object with rectangular selection." },
    { definition: "36. Subselection Tool (A)", term: "Tool to reshape a motion path of an animation. You can expose the control points and Bezier handles on the path that correspond to each position property keyframe." },
    { definition: "37. Lasso Tool (L)", term: "Tool to create an irregular selection outline on an object." },
    { definition: "38. Polygon Tool (Shift + L)", term: "Tool to define a selection area with a series of connected straight lines." },
    { definition: "39. Magic Wand tool", term: "To select areas of a bitmap graphic that contain the same or similar colors." },
    
    //Week 4
    
    { definition: "40. Symbols", term: "It is a graphic, button, or movie clip that you create." },
    { definition: "41. Movie Clips", term: "use to create reusable pieces of animation in Adobe Animate. It have their own multi-frame timeline that is independent from the main movie's Timeline" },
    { definition: "42. Graphic Symbols", term: "It is a collection of frames used in animations or single frame mode. An animated graphic symbol is tied to the Timeline of the document in which the symbol is placed." },
    { definition: "43. Button Symbols", term: "It is a special type of four-frame interactive movie clip in Adobe Animate." },
    { definition: "44. Looping Modes", term: "It is associated with symbol instance decides playback behavior of that instance." },
    { definition: "45. Graphic Looping", term: "Every graphic symbol instance has looping properties (that is loop mode, first frame, last frame) associated with it." },
    { definition: "46. Loop", term: "It plays the frames of the Graphic from ‘first frame’ to ‘last frame’ in sequence and keeps looping until there are frames on the parent timeline’s frame span." },
    { definition: "47. Play Once", term: "It plays the frames of the Graphic only once from ‘first frame’ to ‘last frame’. After that instance stays at ‘last frame’ for the rest of the frames in the parent timeline’s frame span." },
    { definition: "48. Single Frame", term: "It plays only one frame of Graphic that is pointed by the ‘first frame’ property." },
    { definition: "49. Reverse Play Once", term: "It plays the frames of the Graphic only once in reverse order that is starting from ‘last frame’ to ‘first frame’." },
    { definition: "50. Reverse Loop", term: "It plays the frames of the Graphic in reverse order that is starting from ‘last frame’ to ‘first frame’ in sequence & keep looping over in reverse order until there are frames on the parent timeline’s frame span." },
    { definition: "51. First Frame", term: "It specifies from which frame of Graphic, the loop playback of symbol instance should begin." },
    { definition: "52. Last Frame", term: "It specifies up to which frame of Graphic, the loop playback should go." },
    { definition: "53. Button Symbols", term: "It doesn't actually play linearly like a normal timeline; it reacts to mouse pointer movement and actions by jumping to the appropriate frame." },
    { definition: "54. Edit Symbols", term: "When you edit a symbol, Animate updates all the instances of that symbol in your document." },
    { definition: "55. Event Sound", term: "It plays when its starting keyframe first appears and the plays in its entirety, independently of the playhead in the Timeline, even if the SWF file stops playing." },
    { definition: "56. Steam Sound", term: "Animate forces animation to keep pace with stream sounds. If Animate can’t draw animation frames quickly enough, it skips frames. Unlike event sounds, this sound effect stop if the SWF file stops playing." },
    { definition: "57. Start", term: "It is the same as Event, except that if the sound is already playing, no new instance of the sound plays." },
    { definition: "58. Stop", term: "It silences the specified sound." },
    { definition: "59. Importing Sounds", term: "You place sound files into Animate by importing them into the library or directly importing them to stage." },
    { definition: ".asnd", term: "This is the native sound format of Adobe® Soundbooth™" },
    { definition: "60. Shape Tweening", term: "You draw a vector shape at one specific frame in the Timeline. And, change that shape or draw another shape at another specific frame." },
];


let currentPage = 1;
const itemsPerPage = 5;

function renderItems() {
    const listContainer = document.getElementById('reviewer-list');
    listContainer.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const currentItems = items.slice(start, end);
    currentItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `<h3>${item.definition}</h3><p>${item.term}</p>`;
        listContainer.appendChild(itemElement);
    });
}

function goToNextPage() {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
        currentPage++;
        renderItems();
    }
}

function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderItems();
    }
}


function toggleMenu() {
    const navOptions = document.querySelector('.nav-options');
    navOptions.classList.toggle('active');
}


document.getElementById('next-page').addEventListener('click', goToNextPage);
document.getElementById('prev-page').addEventListener('click', goToPrevPage);
document.getElementById('burger-menu').addEventListener('click', toggleMenu);

renderItems();
