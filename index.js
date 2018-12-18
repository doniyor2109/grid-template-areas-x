'use strict';

function repeat(item, times) {
  return Array.from({ length: times }).map(function() {
    return item;
  }).join(' ');
}

function getMatches(regex, string) {
  var match = null;
  var matches = [];

  while ((match = regex.exec(string)) !== null) {
    matches.push(match);
  }
  return matches;
}

function x() {
  var args = Array.from(arguments)
  var template = args.shift()

  if (!template) {
    throw new Error('First argument must be template')
  }

  return template.raw
    .map(function (template, index) {
      if (index === args.length) {
        return template
      }

      var regex = /([\s\S]*?)([^\s']+$)/gm;
      var matches = getMatches(regex, template);

      var targetMatch = matches.pop();
      var firstMatch = targetMatch[1]
      var target = targetMatch[2]

      var leftString = matches.map(function (match) { return match[0];}).join('');
      var rightString = firstMatch + repeat(target, args[index]);

      return leftString + rightString;
    })
    .join('');
}

module.exports = x;