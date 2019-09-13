# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

Answer: ReactJS is a lightweight JavaScript library that was developed by Facebook .React helps solve the problem of web applications that have complex states. With React developers can create large web applications without reloading the page. This is possible throught the use of a virtual DOM before the page loads in a browser. Since 'everything is a component' in React it enables the easy maintenance of the codebase.

1. What does it mean to think in react?

Answer: It means every section of a React app is a component

1. Describe state.

Answer: State refers to private data maintained by a component locally. The state of a component represents a point in time for that component.

1. Describe props.

Answer: Props refer to a state passed down from a parent component to a child component. Props are read only in child components but can be altered by using a callback function in the child component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Answer: Side effects are non-React sections of React apps that is anything that does not update the page. Effects can sync with states by providing a particular state as the data in the second argument of an effect hook which is an array. This way whenever that state changes the effect hook is run to perform a specific task.
