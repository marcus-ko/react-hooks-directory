import { useState } from 'react';
// import "./AddPerson.css";

// Pass in initial values to state
// const MyComponent = (initialValues = {}) => {
//   const [inputs,setInputs] = useState(initialValues);
//   ...
// }

export default function AddPerson({ addContact }) {
  // const initialValues = {
  //   name: "",
  //   phone: "",
  //   email: "",
  // };
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

  // const handleInputChange = (e) => {
  //   //const name = e.target.name
  //   //const value = e.target.value
  //   const { name, value } = e.target;

  //   setValue ({
  //     ...value,
  //     [name]: value,
  //     [phone]: value,
  //     [email]: value
  //   });
  // };
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

  // const submitHandle = e => {
  //   e.preventDefault()
  //   console.log(inputs)
  // }

  // function handleChange(event) {
  //   // Here, we invoke the callback with the new value

  // }
  // capture user input in this state for each input
  // const [nameValue, setNameValue] = useState("");
  // const [phoneValue, setPhoneValue] = useState("");
  // const [emailValue, setEmailValue] = useState("");
  // const [allValue, setAllValue] = useState([]);

  // const handleChange = (e) => {
  //   setAllValue(e.target.value)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   //const newData = {nameValue, phoneValue, emailValue};
  //   setAllValue([...allValue, newData]);
  //   setNameValue("");
  //   setPhoneValue("");
  //   setEmailValue("");

  //   // if(!phoneValue) return;
  //   // addPhone(phoneValue);

  //   // if(!emailValue) return;
  //   // addEmail(emailValue);
  //   // setValue("");
  // }
  return (
    <section>
      <div className="card pa-30 mr-30">
        <form onSubmit={handleSubmit} data-testid="add-person-form">
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Person Name
            </label>
            <input
              type="text"
              placeholder="Enter Person Name"
              name="name"
              value={value.name}
              data-testid="person-name-input"
              onChange={changeHandle}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="number" className="mb-3">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter Phone Number"
              length="10"
              value={value.phone}
              name="phone"
              data-testid="phone-number-input"
              onChange={changeHandle}
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="email" className="mb-3">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              data-testid="person-email-input"
              value={value.email}
              onChange={changeHandle}
            />
          </div>
          <div className="layout-row justify-content-end">
            <button
              type="submit"
              value="submit"
              className="mx-0"
              data-testid="add-person-button"
            >
              Add Person
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
