const main = document.querySelector('main');

const joke1 = "Hear about the new restaurant called Karma? There's no menu, you get what you deserve.";
const joke2 = "Did you hear about the actor who fell through the floorboards? He was just going through a stage.";
const joke3 = "What sits at the bottom of the sea and twitches? A nervous wreck.";

const htmlTemplate = `
  <ul>
    <li>${joke1}</li>
    <li>${joke2}</li>
    <li>${joke3}</li>
  </ul>
`;

main.innerHTML = htmlTemplate;

const paragraph = document.createElement('p');

paragraph.textContent = "That's all folks!";

document.body.appendChild(paragraph);
