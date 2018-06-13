const getRandomAddition = item => item.additions[Math.floor(item.additions.length * Math.random())];

// via http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page#answer-10730777
function findTextNodes(el) {
  const nodes = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  return nodes;
}

function generateLink(src) {
  const link = document.createElement('a');
  link.href = src;
  link.target = 'context-source';
  link.rel = 'noopener noreferrer';
  link.title = 'Quelle für diesen Kontext';
  link.style.cssText = 'text-decoration:underline;color:inherit;cursor:pointer;opacity:.5';
  link.textContent = '*';
  return link;
}

function makeBerndGreatAgain(nodes) {
  nodes.forEach(node => (node.textContent = node.textContent.replace(/Björn Höcke/g, 'Bernd Höcke')));
}

// extend text content with extension sentences
function addAddition({ node, index }, item, highlight) {
  if (!node) return false;
  const addition = getRandomAddition(item);
  const nextChar = node.textContent[index];
  const isEndOfSentence = !nextChar || nextChar !== ' ';
  const range = document.createRange();
  range.setStart(node, index);
  if (!isEndOfSentence) {
    range.insertNode(document.createTextNode(','));
  }
  if (highlight) {
    range.insertNode(generateLink(addition.src));
  }
  range.insertNode(document.createTextNode(`, ${addition.text}`));
}

function main({ highlight, amount }) {
  const items = data
    .filter(item => document.body.innerHTML.includes(`${item.forename} ${item.name}`))
    .map(item => Object.assign(item, { regex: new RegExp(`\\b${item.name}\\b`, 'g') }));

  const textNodes = findTextNodes(document.body);

  const exemptRegex = RegExp(exemptions.join('|'), 'g');
  const exemptNodes = [];
  textNodes.forEach(node => {
    let rx;
    while ((rx = exemptRegex.exec(node.textContent))) {
      exemptNodes.push({ node, start: rx.index, end: rx.index + rx[0].length });
    }
  });

  items.forEach(item => {
    const nameNodes = [];
    textNodes.forEach(node => {
      let rx;
      while ((rx = item.regex.exec(node.textContent))) {
        if (
          !exemptNodes.some(
            exNode => exNode.node === node && exNode.end > rx.index && exNode.start < rx.index + rx[0].length
          )
        ) {
          nameNodes.push({ node, index: rx.index + rx[0].length });
        }
      }
    });

    switch (amount) {
      case '1':
        addAddition(nameNodes[0], item, highlight);
        break;

      case '5':
        for (let i = nameNodes.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [nameNodes[i], nameNodes[j]] = [nameNodes[j], nameNodes[i]];
        }
        nameNodes
          .slice(0, 5)
          .sort((a, b) => b.index - a.index)
          .forEach(node => addAddition(node, item, highlight));
        break;

      default:
        nameNodes.reverse().forEach(node => addAddition(node, item, highlight));
        break;
    }
  });

  makeBerndGreatAgain(textNodes);
}

getSettings(main);
