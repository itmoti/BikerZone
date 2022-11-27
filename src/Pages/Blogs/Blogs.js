import React from 'react';

const Blogs = () => {

    return (
        <div className='w-2/3 mx-auto'>
            <h1 className='text-center text-3xl font-extrabold my-5'>Blogs</h1>
            <div>
                <h1 className='font-bold text-xl'>
                    1. What are the different ways to manage a state in a React application?
                </h1>
                <p><span className='font-semibold'>ANS. </span>
                    <li> Local state.</li>
                    <li>  Global state.</li>
                    <li>  Server state.</li>
                    <li>    URL state.</li>
                </p>
            </div>
            <div>
                <h1 className='font-bold text-xl'>
              2.  How does prototypical inheritance work?
                </h1>
                <p><span className='font-semibold'>ANS. </span> 
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
                </p>
            </div>
            <div>
                <h1 className='font-bold text-xl'>
               3. What is a unit test? Why should we write unit tests?
                </h1>
                <p><span className='font-semibold'>ANS. </span>
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                 </p>
            </div>
            <div>
                <h1 className='font-bold text-xl'>
                4. React vs. Angular vs. Vue?
                </h1>
                <p><span className='font-semibold'>ANS. </span>
                React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences.
                 </p>
            </div>
        </div>
    );
};

export default Blogs;