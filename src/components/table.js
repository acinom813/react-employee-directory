function Table (props) {
    return(
        <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col" onClick={props.handleSort}>Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  <tbody>
      {props.employees.length > 0 ? 
      props.employees.map(person => {
          return(
            <tr>
            <th scope="row"> <img src={person.picture.thumbnail} alt="employees" /> </th>
            <td>{person.name.first + " " + person.name.last}</td>
            <td>{person.email}</td>
            <td>{person.phone}</td>
          </tr>
          )
      }):
      <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
      }

    
  </tbody>
</table>
    );

}

export default Table;
