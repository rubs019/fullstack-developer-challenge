import React, { Component } from 'react';
import { Container, Divider, Loader } from 'semantic-ui-react';
import PostalCodeForm from './PostalCodeForm';
import LocationSearchResults from './LocationSearchResults';

class LocationSearch extends Component {
  constructor(props) {
    super(props);

    this.handleSubmittedData = this.handleSubmittedData.bind(this);
    this.updateProps = this.updateProps.bind(this);

    this.state = {
      loading: false,
      locations: null,
      postalCodeSearchValue: null,
      success: false,
    };
  }

  handleSubmittedData({ postalCodeSearchValue }) {
    this.setState(
      { loading: true, locations: null, postalCodeSearchValue },
      async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_ORIGIN}/locations?postalCode=${postalCodeSearchValue}`
          );

          if (!response.ok) {
            throw new Error(response.error());
          }

          const data = await response.json();

          this.setState({ loading: false, locations: data, success: true });
        } catch (err) {
          this.setState({ loading: false });
        }
      }
    );
  }

  updateProps() {
    console.log('success update');
    this.setState({ success: false });
  }

  render() {
    const { loading, locations, postalCodeSearchValue, success } = this.state;

    return (
      <Container>
        <PostalCodeForm
          loading={loading}
          success={success}
          onUpdateSuccess={this.updateProps}
          onSubmittedData={this.handleSubmittedData}
        />
        <Divider hidden />
        {loading && <Loader active />}
        {locations && (
          <LocationSearchResults
            locations={locations}
            postalCodeSearchValue={postalCodeSearchValue}
          />
        )}
      </Container>
    );
  }
}

export default LocationSearch;
