const Person = (props) => (
  <div>
    <p>Learn some information about this person</p>
    <ul>
      <li>
        Name: {props.name.length > 8 ? props.name.slice(0, 6) : props.name}
      </li>
      <li>Age: {props.age}</li>
      <li>
        Can vote?:
        {props.age > 18 ? <h3>please go vote!</h3> : <h3>"you must be 18"</h3>}
      </li>
    </ul>
    <h4>Hobbies</h4>
    <ul>
      {props.hobbies.map((m) => (
        <li>{m}</li>
      ))}
    </ul>
  </div>
);
