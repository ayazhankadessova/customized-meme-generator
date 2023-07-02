1. Inifinite rerendering

```
  fetch('https://swapi.dev/api/people/1')
    .then((res) => res.json())
    .then((data) => setStarWarsData(data))
```

When you put it in the top level it is being constantly re-rendered.

- Get the data
- Save the data into state

2. What are React's primary tasks?

- Work with the DOM/browser to render UI to the page
- Manage state for us between render cycles (i.e state values are "remembered" from one render to the next)
- Keep the UI updated whenever state changes occur

3. What can't React handle on its own?

- (Out)side Effects!

* localStorage
* API/database interactions
* subscriptions (eg web sockets)
* syncing 2 different internal states tgt (can do them separately)
* basically anything that React isn't in charge of

4. UseEffect() allows us to interact outside of the React environment, allows us to synchronize React state with those outside systems

**useEffect** is a built-in hook in React that allows you to perform side effects in functional components.

- Side effects are operations that have an impact on the outside world, such as fetching data from an API, updating the browser's title or scrolling position, setting up event listeners, etc.

The useEffect hook takes two arguments: a function that contains the side effect code, and an optional array of dependencies that determine when the effect should be re-run. Here's the basic syntax:

```
useEffect(() => {
  // side effect code goes here
}, [dependency1, dependency2, ...]);
```

- To make it not infinite, we need to provide 2 parameters:
- Effect runs after every render

1. Side effect code
2. Dependencies array [determines when the effect should be ran instead of running after every single render]. If dependencies array is empty, the effect will be ran only once
