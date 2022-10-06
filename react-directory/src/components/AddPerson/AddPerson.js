import { useState } from 'react';
import './AddPerson.css';

// Pass in initial values to state
// const MyComponent = (initialValues = {}) => {
//   const [inputs,setInputs] = useState(initialValues);
//   ...
// }

export default function AddPerson({ addContact }) {
  const [value, setValue] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const changeHandle = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // add to-do list item
    // addName(value);
    addContact(value);
    // clear input
    // setValue('');
    console.log(value);
    setValue({ name: '', phone: '', email: '' });
  };

  return (
    <section className="form-view">
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="input-form__wrapper">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={value.name}
              onChange={changeHandle}
            />
          </div>
          <div className="input-form__wrapper">
            <label htmlFor="number" className="">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter Phone Number"
              length="10"
              value={value.phone}
              name="phone"
              onChange={changeHandle}
            />
          </div>
          <div className="input-form__wrapper">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              value={value.email}
              onChange={changeHandle}
            />
          </div>
          <button type="submit" value="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
