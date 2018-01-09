extendText();

function getNameRegex(name) {
  return new RegExp(name, 'g');
}

function getNewString(item, isEndOfSentence) {
  return item.name + ', ' + item.text[Math.floor(item.text.length * Math.random())] + (isEndOfSentence ? '' : ',');
}

// extend text content with extension sentences
function extendText() {
  findTextNodes(document.body).forEach(function(node) {
    data.forEach(function(item) {
      var parts = node.textContent.split(getNameRegex(item.name));
      for (var i = parts.length - 1; i > 0; i--) {
        var isEndOfSentence = /\s*[^a-z 0-9]/i.test(parts[i]);
        parts.splice(i, 0, getNewString(item, isEndOfSentence));
      }
      node.textContent = parts.join('');
    });
  });
}

// via http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page#answer-10730777
function findTextNodes(el) {
  var node;
  var textNodes = [];
  var walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while ((node = walk.nextNode())) {
    textNodes.push(node);
  }
  return textNodes;
}
