import React from 'react';

const Bonus = () => {
    return (
        <div>
            <section id="bonus-section">
            <div class="accordion accordion-flush w-75 mx-auto my-5 p-4 border border-danger" id="accordionFlushExample">
                <h1 class="text-success text-center my-3"> Bonus part are given below</h1>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      React working process:
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">React is a declarative, efficient and flexible javascript library for building user interface.React application is made of multiple components, each responsibvle for rendaring a small, reusable piece of HTML. <br/>
                    Components can be nested within other components to allow complex applications to be build of simple building blocks.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      useState() working process in React.
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">The useState() is a hook that allows to have state variables in functional components. React has two types of components one is class components which are ES6 classes that extend from react and the other is functional components<br/>
                    Class components a component and can have state and lifecyclke method. Class message extends react. The useState hook is special function that takes the initial state as a argument and returns an array of two entries. 
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Difference between Props and Stage
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div class="container">
                            <div class="row">
                              <div class="col-6 border border-info p-2">
                                 <h5 class="text-center">Props</h5>
                                 <p>Props are read-only. <br/> <br/>
                                 Props are immutable <br /> <br />
                                 Props allow to pass data from parent components to child components as argument.
                                </p>

                              </div>
                              <div class="col-6 border border-info p-2">
                                <h5 class="text-center"> State</h5>
                                <p>State changes can be asynchronous.<br/> <br />
                                State are mutable <br /> <br />State hold information about the components.

                                
                                </p>
                              </div>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
        </section>
        </div>
    );
};

export default Bonus;