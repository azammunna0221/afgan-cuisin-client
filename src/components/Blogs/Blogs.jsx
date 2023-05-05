import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mx-14 mt-4 font-exo bg-slate-200 '>
                <h3 className=' font-semibold px-4 mt-4'>01. Tell us the differences between uncontrolled and controlled components in react?</h3>
                <p className='px-4'>Answer: In React, components can be classified into two main types: controlled and uncontrolled components. <br />

                    An uncontrolled component is a component that manages its state internally, without any external help. In other words, its state is managed by the DOM, rather than by React. Examples of uncontrolled components are input elements like input, textarea, and select. When the user interacts with an uncontrolled component, the component updates its state automatically, without any intervention from React. <br />

                    A controlled component, on the other hand, is a component that receives its state from its parent component and notifies its parent component when its state changes. In other words, its state is managed by React, rather than by the DOM. Examples of controlled components are input elements that receive their value as a prop and update their value by calling a callback function provided by their parent component. <br />

                    Controlled components are usually preferred over uncontrolled components because they provide a more predictable and reliable way to manage component state. With controlled components, all state changes are explicitly handled by React, which makes it easier to implement complex UI behaviors, such as form validation and data synchronization. However, uncontrolled components can be useful in some situations, such as when you need to access the underlying DOM node directly, or when you have a large form with many inputs that are expensive to manage with controlled components.
                </p>
                <h3 className=' font-semibold px-4 mt-4'>02. How to validate React props using PropTypes?</h3>
                <p className='px-4'>Answer : React provides a package called prop-types that allows you to specify the types and shape of props that your components expect to receive. This can help catch bugs early on and ensure that your components are used correctly. <br />
                    Here are some of the most common PropTypes you can use:

                    PropTypes.string: A string. <br />
                    PropTypes.number: A number. <br />
                    PropTypes.bool: A boolean value. <br />
                    PropTypes.array: An array. <br />
                    PropTypes.object: An object. <br />
                    PropTypes.func: A function. <br />
                    PropTypes.node: A React node, which can be a string, number, or a React element. <br />
                    PropTypes.element: A React element.
                </p>
                <h3 className=' font-semibold px-4 mt-4'>03. Tell us the difference between nodejs and express js? </h3>
                <p className='px-4'>Answer: Node.js and Express.js are both popular JavaScript frameworks that are used for server-side web development. However, there are some key differences between the two. <br />

                    Node.js is a runtime environment that allows you to run JavaScript code on the server. It uses the V8 engine from Google Chrome to execute JavaScript code outside of the browser. Node.js provides a set of built-in modules and APIs that allow you to perform a variety of tasks, such as reading and writing files, making HTTP requests, and working with the file system. <br />

                    Express.js, on the other hand, is a web framework that is built on top of Node.js. It provides a set of features and tools that allow you to build web applications quickly and easily. Express.js provides a simple, yet powerful, API for handling HTTP requests and responses, routing requests to the appropriate handler functions, and serving static files. It also provides middleware, which are functions that can be used to modify the request and response objects before they are handled by the main handler functions.
                </p>
                <h3 className=' font-semibold px-4 mt-4'>04. What is a custom hook, and why will you create a custom hook?</h3>
                <p className='px-4'>Answer: In React, a custom hook is a JavaScript function that uses the built-in hooks provided by React (useState, useEffect, useContext, etc.) to encapsulate complex stateful logic into a reusable piece of code. Custom hooks allow you to abstract away the implementation details of stateful logic, making it easier to reuse across different components and avoid code duplication. <br />
                    You might create a custom hook for several reasons: <br />

                    1.Reuse logic across components: If you find yourself duplicating stateful logic across different components, you can extract that logic into a custom hook and reuse it across all those components. <br />

                    2. Separate concerns: Custom hooks can help separate concerns by encapsulating complex logic into a reusable piece of code. This can make your components simpler and easier to understand. <br />

                    3. Improve code organization: Custom hooks can help improve the organization of your code by abstracting away implementation details and providing a clean, reusable API. <br />

                    4. Share code between projects: Custom hooks can be published as npm packages and shared between projects, which can help reduce code duplication and improve code consistency across projects.
                </p>
            </div>
        </div>
    );
};

export default Blogs;