1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?

Right before the form is submitted.

2. In a React app, when do you gather all the data from
   the filled-out form?

On every keyboard type. As the form is being filled out. The data is all held in local state.

3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?

name

4. What's different about a saving the data from a checkbox element
   vs. other form elements?

Checkbox == boolean

A checkbox uses the `checked` property to determine what should be saved in state. Other form elements use the `value` property instead.

5. How do you watch for a form submit? How can you trigger
   a form submit?

onSubmit = change
preventdefault

button in form is automatically type submit

- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.
