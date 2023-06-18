1. How would you describe the concept of "state"?

Something that changes the state of the element & should be automatically tracked.

- How things currently are.

A way for React to remember saved values from within a component. This is similar to declaring variables from within a component, with a few added bonuses (which we will get to later).

2. When would you want to use props instead of state?

Anytime you want to pass data into a component so that component can determine what will get displayed on the screen.

Configures the component, so we know how to display the component.

3. When would you want to use state instead of props?

State is used when we want a component to maintain some values from within the component. (And "remember" those values even when React re-render the component )

We can change state, but some values are maintained.

4. What does "immutable" mean? Are props immutable? Is state immutable?

State is mutable, but props is immutable.
