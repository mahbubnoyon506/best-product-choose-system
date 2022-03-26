import React from 'react';

const Bonus = () => {
    return (
        <div>
            <section id="bonus-section">
            <div className="accordion accordion-flush w-75 mx-auto my-5 p-4 border border-danger" id="accordionFlushExample">
                <h1 className="text-success text-center my-3"> Bonus part are given below</h1>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      React working process:
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">React is a declarative, efficient and flexible javascript library for building user interface.React application is made of multiple components, each responsibvle for rendaring a small, reusable piece of HTML. <br/>
                    Components can be nested within other components to allow complex applications to be build of simple building blocks.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      useState() working process in React.
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">The useState() is a hook that allows to have state variables in functional components. React has two types of components one is className components which are ES6 classNamees that extend from react and the other is functional components<br/>
                    className components a component and can have state and lifecyclke method. className message extends react. The useState hook is special function that takes the initial state as a argument and returns an array of two entries. 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Difference between Props and Stage
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <div className="container">
                            <div className="row">
                              <div className="col-6 border border-info p-2">
                                 <h5 className="text-center">Props</h5>
                                 <p>Props are read-only. <br/> <br/>
                                 Props are immutable <br /> <br />
                                 Props allow to pass data from parent components to child components as argument.
                                </p>

                              </div>
                              <div className="col-6 border border-info p-2">
                                <h5 className="text-center"> State</h5>
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