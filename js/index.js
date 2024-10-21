
function getInputValue(id) {
    return document.getElementById(id).value;
}


function generateMadLib() {
    const noun1 = getInputValue("noun1");
    const verb1 = getInputValue("verb1");
    const adj1 = getInputValue("adj1");
    const adj2 = getInputValue("adj2");
    const noun2 = getInputValue("noun2");
    const noun3 = getInputValue("noun3");
    const adj3 = getInputValue("adj3");
    const noun4 = getInputValue("noun4");
    const noise = getInputValue("noise");
    const verb3 = getInputValue("verb3");
    const adj4 = getInputValue("adj4");
    const noun5 = getInputValue("noun5");

    const story = `On a ${adj1} Halloween night, a ${noun1} decided to ${verb1} through a ${adj2} haunted house. 
    Inside, a ${noun2} was stirring a ${adj3} ${noun3} in a bubbling ${noun4}. Suddenly, the ghost heard a loud 
    ${noise} coming from the ${adj4} ${noun5}. As the winds began to ${verb3}, the ${noun1} knew it was time to 
    escape... or stay for eternity!`;

    document.getElementById("MadLib").innerText = story;
}
