1. Event listener
2. Ask API
3. Get random pic from what api gave us
4. display

React events:

https://legacy.reactjs.org/docs/events.html#mouse-events

1. Dont just use getElementById because we need react bc its declarative, we just updat item & interface updates => use state
2. onClick needs to exist on native dom elements, not on our custom elements which

```
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
```

and in Star's img -> onclick = props.handleClick

```
export default function Star(props) {
  const starIcon = props.isFilled ? starFilled : starNot

  return (
    <img
      src={starIcon}
      className='card--favorite'
      alt='star'
      onClick={props.handleClick}
    />
  )
}
```

- Ability to pass State setter functions down to children components is especially crucial in React

3. If you want to pass to sibling. Pass the state to parents and then pass to children.
