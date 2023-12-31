# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

1. Pratice EventListeners
2. Pratice useState

UseState is a Hook

```
[undefined, f()]

Advice :

1. Do not change values from the body of the function, but ok to change values such as:

```

<Navbar coverImage="some-image1" /> -> <Navbar coverImage="some-image2" />

```

2. If you want to use old value of state to determine new value of state: [rect passes the oldValue to function itself]

Note: if you ever need the old value of state
to help you determine the new value of state,
you should pass a callback function to your
state setter function instead of using
state directly. This callback function will
receive the old value of state as its parameter,
which you can then use to determine your new
value of state.

```

function add() {
setCount(function() {
return oldValue + 1
})
}

```


```

function add() {
setCount(prevCount => prevCount + 1)
}

```

```

2. Parent component rendered and the child component rendered

3. You Probably don't need derived state

https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

[!NoDerivedState](https://github.com/)

3. Let know which box being clicked

```
function toggle(id)
```

---

## Forms

1. `onChange` listens to every keystroke

2. event is passed to handleChange, event.target gives the element which made the event happen.

3. event.target.value saves the value of the element that triggered the changes

4. Not that good to be using `handleFirstNameChange`, `handleLastNameChange` and etc... so => we need to learn how to combine our state into the object and how to use the event parameter that we are receiving in our event handlers to determine which property of that state object we should be updating.

> Solution: Make state as object

```
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
  })
```

> Check which box is changing

```
function handleChange(event) {
setFormData((prevFormData) => {
    return { ...prevFormData, [event.target.name]: event.target.value }
})
}
```

### Forms: Controlled Components

1. Two different states: one in the form input box in the regular html and other is updating in each stroke in our react code

```
<input
    type='text'
    placeholder='Last Name'
    onChange={handleChange}
    name='lastName'
    value = {formData.lastName}
/>
```

Now, state is in the driver seat telling the input what to display. Rather than the input box telling the state what to be.

### Forms: TextArea

```
<textarea
    value={formData.comments}
    placeholder="Comments"
    onChange={handleChange}
    name="comments"
/>
```

### Forms: checkbox

```
<input
type='checkbox'
name='isFriendly'
onChange={handleChange}
checked={formData.isFriendly}
/>
<label htmlFor='isFriendly'>Is Friendly?</label>
```

```
return { ...prevFormData, [name]: type === 'checkbox' ? checked : value }

```

### Forms: radioboxes

- Give all options same name, so that only one option can be selected at a time.
- Value is unique

```
checked={formData.employment === "part-time"} # can do, only allows one option to be selected
checked={formData.employment} # cannot do
```

- Logic of Forms -> give elemnt name and make it a field of the object.
- Make `onChange` function and there get all the elements and change the one that just got altered based on the name and value which u can find from the `event.target`.
- Special cases are checked -> boolean
- Radiobutton -> boolean + text

### Forms: Select & options

```
<select
        id='favColor'
        value={formData.favColor}
        onChange={handleChange}
        name='favColor'
      >
```

Make one option empty:

```
 <option value=''>-- Choose --</option>

```

### Forms: How to Submit a Form

- Button inside the form automatically acts like a button -> its type is automatically submit
- Because button is inside the form -> its value is automatically triggers the onSubmit event in the form

```
<form onSubmit={handleSubmit}>
```

- Prevent default. Default form submission behavior is that it reloads the page and default the valuesm but we don't want that behavior. event.preventDefault() is used to prevent the default behavior of an event in JavaScript, and in the context of an HTML form submission, it is used to prevent the browser from reloading the page after the form is submitted.

```
 function handleSubmit(event) {
        event.preventDefault()
        submitToApi(formData)
    }
```

## Target -> represents smth that has been modified

### Memes from API

1. We dont reallt want Async function
