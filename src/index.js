import React from 'react'
import PropTypes from 'prop-types'

const SomeComponent = ({ style, children, ...props }) => {
  const styles = {
    ...style,
    color: 'red',
    fontSize: 40
  }
  return <div style={styles}>{children}</div>
}

SomeComponent.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default SomeComponent
