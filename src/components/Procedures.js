import React from 'react';

const Procedures = (props) => {
  // creating list items for dental operations
  const jsxOps = props.ops.map((procedure, index) => <li key={index}>{procedure}</li>)

  return (
    <div>
      <h1>Procedures</h1>
      <p>Here at Dentist Office we provide a wide variety of procedures. We accept all
      sorts of insurance and have competitive uninsured payment plans.
      </p>
      <p>Find the
      service you need and visit our contact page to find out how to reach out to us to
      make the appointment you need!
      </p>
      <ul>
        {jsxOps}
      </ul>
    </div>
  )
}

export default Procedures;
