import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  error: {
    color: 'rgba(255, 0 , 0, 1)',
    border: '1px solid rgba(255, 0, 0, 1)',
    backgroundColor: 'rgba(255, 0 , 0, 0.1)',
    padding: '5px',
    margin: '5px'
  }
};

class FormErrors extends Component {
  render() {
    const formErrors = this.props.formErrors;
    return (
      <div
        className="form-errors visible"
        style={styles.error}>
        {Object.keys(formErrors).map((fieldName) => {
          if (formErrors[fieldName].length > 0) {
            return (
              <p key={fieldName.id}>
                {fieldName} {formErrors[fieldName]}
              </p>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}

FormErrors.propTypes = {
  formErrors: PropTypes.object.isRequired
};

export default FormErrors;
