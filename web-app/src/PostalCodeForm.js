import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PostalCodeForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValue = this.handleValue.bind(this);

    this.state = { postalCodeSearchValue: '' };
  }

  handleChange(changeEvent, { value }) {
    this.setState({ postalCodeSearchValue: value });
  }

  handleSubmit(submitEvent) {
    const { onSubmittedData } = this.props;
    const { postalCodeSearchValue } = this.state;

    submitEvent.preventDefault();
    onSubmittedData({ postalCodeSearchValue });
  }

  updateSuccess() {
    const { onUpdateSuccess } = this.props;
    onUpdateSuccess();
  }

  handleValue(postalCodeSearchValue) {
    const { success } = this.props;
    if (success) {
      this.updateSuccess();
      return '';
    }
    return postalCodeSearchValue;
  }

  render() {
    const { loading } = this.props;
    const { postalCodeSearchValue } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid
          focus
          onChange={this.handleChange}
          placeholder="Search Location by Postal Code…"
          value={this.handleValue(postalCodeSearchValue)}
        />
        <Form.Button content="Search" loading={loading} />
      </Form>
    );
  }
}

PostalCodeForm.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
  onSubmittedData: PropTypes.func.isRequired,
  onUpdateSuccess: PropTypes.func.isRequired,
};

PostalCodeForm.defaultProps = {
  loading: false,
  success: false,
};

export default PostalCodeForm;
