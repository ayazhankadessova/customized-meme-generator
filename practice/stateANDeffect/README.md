### Challenges for Practice

### Challenge 1:

- 1. Create state called `show`, default to `true`
- 2. When the button is clicked, toggle `show`
- 3. Only display `<WindowTracker>` if `show` is `true`

### Challenge 2:

- 1. Create state called `windowWidth`, default to
- `window.innerWidth`
- 2. When the window width changes, update the state
- 3. Display the window width in the h1 so it updates
- every time it changes

```
const [windowWith, setWindowWith] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener('resize', function () {
      console.log('resized')
    })
  }, [])
```

### Challenge 3: Memory Leak

Let's say WindowWith is not displayed anymore & is not part of DOM, but the eventListener is still trying to find it & throws and error.

-> memory leak

- useEffect CleanUp

In the useEffect we will setUp 2 functions -> main + cleanup.

```
React.useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', watchWidth)

    return function cleanup() {
      console.log('cleanup')
      window.removeEventListener('resize', watchWidth)
    }
  }, [])
```

Normally runs the first part, but when there us no windowTracker, funs the clean up
