const doAnimation = (steps) => {
  if (steps.length === 0) return;

  const thisStep = steps.shift();
  thisStep.step();
  setTimeout(() => doAnimation(steps), thisStep.delay);
}

const aboutMeAnimation = () => {
  const command = document.querySelector('#about-me > header > h2');
  const ul = document.getElementById('about-me-list');
  const list = document.querySelectorAll('#about-me-list > li');
  const p = document.getElementById('about-me-blurb');

  const commandOuput = [ul, ...list, p];

  // init
  const commandContent = command.innerText;
  command.innerText = "";
  commandOuput.forEach(el => {
    el.classList.add('hidden');
  });

  // animate
  const animationSteps = [];
  animationSteps.push(
    ...Array.from(commandContent, letter => 
      ({
        step: () => {command.innerText += letter;},
        delay: 120
      })
    )
  );
  animationSteps.push(
    ...commandOuput.map(line => 
      ({
        step: () => {line.classList.remove('hidden');},
        delay: 20
      })
    )
  );

  doAnimation(animationSteps);
}

module.exports = aboutMeAnimation;