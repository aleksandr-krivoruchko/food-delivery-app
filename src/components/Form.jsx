import PropTypes from 'prop-types';

export function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" className="input" />
      </label>
      <label>
        Email
        <input name="name" className="input" />
      </label>
      <label>
        Phone
        <input name="name" className="input" />
      </label>
      <label>
        Address
        <input name="name" className="input" />
      </label>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
