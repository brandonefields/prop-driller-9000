import React from 'react';

function Transformer(props) {

  return (
    <img
      className = 'transformer'
      src = {props.proptimii.url}
      alt = {props.proptimii.name}
    />
  );
}

export default Transformer;
