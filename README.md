<h2 align="center">
 <img src="https://media.giphy.com/media/JsDtKXMBOAJt1mJYaF/giphy.gif" width="90">Customized Meme Generator - Vite & React <img src="https://media.giphy.com/media/JsDtKXMBOAJt1mJYaF/giphy.gif" width="90">
</h2>

`React`, `Vite`, `HTML`, `CSS`, `API`.

- Check out my App 👉 [here](https://customized-meme-generator.netlify.app) ! Generate & Customize Your Memes 🤭

## 💡 Idea

Customized Meme Generator offers a simple UI that allows users to generate a random meme with just a few clicks. By using the [Imgflip API](https://imgflip.com/api), the app is able to access a large collection of meme templates, ensuring that users will always have access to fresh content. 

Users can also **add Top and Bottom text** to the Memes & customize them!

## Motivation

My motivation was to **practice** creating responsive React App, working with side effects (API) and state. I was practicing different aspects of React Development along the way (Props vs State, Forms in React, Conditional Rendering, useEffect, State, Event Listeners) and decided to save the [**practice** folder](https://github.com/ayazhankadessova/customized-meme-generator/tree/main/practice) here as well :)

I used the [Imgflip API](https://imgflip.com/api), which uses a RESTful JSON interface with standard HTTP form urlencoded parameters for requests and JSON data for responses. 

I also tried to make my code clean by: 

1. Making the state as an object and using the `event` parameter in the `handleChange` function to determine which property of the state object(Meme) to update.

2. When you put a fetch function in the top level of a React component, it can cause infinite re-rendering. To prevent this, I got the data and saved it into state instead of calling the fetch function directly.

## Links & Demo

![meme-generator](https://github.com/ayazhankadessova/customized-meme-generator/assets/86869537/428a71b8-8063-4879-880e-8398e00f254a)

- [Github Repo](https://github.com/ayazhankadessova/customized-meme-generator)

## Run Locally

1. Clone the project

```bash
  git clone https://github.com/ayazhankadessova/customized-meme-generator.git
```

2. Go to the project directory

```bash
  cd customized-meme-generator
```

3. Install dependencies

```bash
npm install
```

4. Start the app

```bash
npm run dev
```

## Author

- [@ayazhankadessova](https://github.com/ayazhankadessova)
- [Linkedin](https://www.linkedin.com/in/ayazhankad/)

## About Me

I'm aspiring software developer from Kazakhstan, studying in Hong Kong.

👩‍💻 I'm currently improving my skills in React.js :)

## ✍️ My Notes

- Saved My Notes [here](https://github.com/ayazhankadessova/customized-meme-generator/blob/main/myNotes.md) & [practice folder](https://github.com/ayazhankadessova/customized-meme-generator/tree/main/practice).
