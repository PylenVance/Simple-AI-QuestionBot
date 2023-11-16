const readline = require('readline');
const IsQuestion = require('./Funcs/Questions')
const axios = require('axios');

const openaiApiKey = '';

async function askChatGPT(question) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: question,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );

    const answer = response.data.choices[0].text.trim();
    console.log('ChatGPT Answer:', answer);
    return answer;
  } catch (error) {
    console.error('Error communicating with OpenAI:', error.message);
    throw error;
  }
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Ask me a question: ', (input) => {
  if (IsQuestion(input)) {
      askChatGPT(input);  
    }
  rl.close();
});