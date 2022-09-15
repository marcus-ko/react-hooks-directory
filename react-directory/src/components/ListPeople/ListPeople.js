// import "./AddPerson.css";

export default function ListPeople(props) {
  return (
    <section>
      <div>
        <ul>
          {props.contacts.map((contact, index) => {
            return (
              <li key={index}>
                <p>
                  Name: <span>{contact.name}</span>
                </p>
                <p>
                  Phone: <span>{contact.phone}</span>
                </p>
                <p>
                  Email: <span>{contact.email}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
