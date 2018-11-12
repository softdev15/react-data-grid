import React from 'react';
import PropTypes from 'prop-types';

class RowsContainer extends React.PureComponent {
  render() {
    return <div key="rows-container">{this.props.rows}</div>;
  }
}

RowsContainer.propTypes = {
  width: PropTypes.number,
  rows: PropTypes.array
};

export default RowsContainer;
