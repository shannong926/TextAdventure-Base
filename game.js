var inputBox = document.querySelector('#action');

console.log(inputBox.tagName);
console.log(inputBox.parentNode.tagName);

var child = document.querySelector('#descrip');

console.log(child.tagName);
console.log(child.parentNode.tagName);

var t = document.querySelector('#inventory');

console.log(t.tagName);
console.log(t.parentNode.tagName);

var out = document.querySelector('#game');

console.log(out.tagName);
console.log(out.parentNode.tagName);

var put = document.querySelector('#help');

console.log(put.tagName);
console.log(put.childNodes.tagName);

var words = document.querySelector('#descrip');

console.log(words.tagName);
console.log(words.childNodes.tagName);