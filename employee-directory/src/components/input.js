function Input(props) {
  return (
    <div className="input-group flex-nowrap">
       
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="addon-wrapping"
        value = {props.search}
        onChange = {props.handleSearch}
      />

    </div>
  );
}


export default Input;