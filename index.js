const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "{Your API key}";

let input = document.getElementById("exampleFormControlInput1");
let replyText = document.getElementById("reply-text");
let heading = document.getElementById("h3");
let loadingGif = document.getElementById("loading-gif");
let gifDiv = document.getElementById("gif");

let showLoading = () => {
  loadingGif.style.display = "block";
};

console.log(input.value);
let generate = async () => {
  showLoading();
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input.value }],
      }),
    });
    const data = await response.json();
    console.log(data);
    gifDiv.innerHTML = "";
    replyText.innerText = "";
    replyText.className = "reply-text2";
    replyText.innerText = data.choices[0].message.content;
    heading.innerText = input.value;
  } catch (error) {
    console.error("Error:", error);
    replyText.innerText = "Error occurred while generating.";
  }

  console.log("hy");
};
