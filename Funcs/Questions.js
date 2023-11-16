const nlp = require('compromise');

function isQuestion(input) {
    // Use compromise to analyze the input and check if it's a question
    const doc = nlp(input);
    const questions = doc.questions().out('array');
  
    // If compromise detects a question, return true
    return questions.length > 0;
  }
  
module.exports = isQuestion;
