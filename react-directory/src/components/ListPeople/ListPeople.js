import './ListPerson.css';

export default function ListPeople(props) {
  return (
    <section className="list-view">
      <div>
        <ul className="list-heading">
          <li>
            <p className="list-name-field">Name</p>
            <p className="list-phone-field">Phone</p>
            <p className="list-email-field">Email</p>
          </li>
        </ul>
        <ul className="list-body">
          {props.contacts.map((contact, index) => {
            return (
              <li key={index}>
                <p className="list-name-field">
                  <span>{contact.name}</span>
                </p>
                <p className="list-phone-field">
                  <span>{contact.phone}</span>
                </p>
                <p className="list-email-field">
                  <span>{contact.email}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
