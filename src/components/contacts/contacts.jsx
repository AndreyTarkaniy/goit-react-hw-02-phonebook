import React from 'react';

const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
