1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?

a. New value of state (setCount('hey'))
b. Callback function - whatever the callback function 
   returns === new value of state

2. When would you want to pass the first option (from answer
   above) to the state setter function?

When you dont need the oldValue of the state to determine the new value of the state.

3. When would you want to pass the second option (from answer
   above) to the state setter function?

Whenever you DO need the previous value of the state to determine the new value of the state.