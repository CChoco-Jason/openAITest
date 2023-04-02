const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function yeet() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        temperature: 0,
        max_tokens: 10,
      });

    console.log(response.data.choices[0].text);
}

yeet();