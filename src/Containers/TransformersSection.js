import React, { Component } from "react";
import Transformer from "../Components/Transformer"

class TransformersSection extends Component {


  state ={
    currentId: 0
  }

  changeDisplay = () => {
    if (this.props.display){
      return this.props.proptimii.map((proptiums) => {
        return <Transformer key={proptiums.id} proptimii={proptiums} />;
      })
    }
  }

  render() {
    return (
      <section className="transformers-section">
        <Transformer id={this.state.currentId} proptimii={this.prop.proptimii} />
      </section>
    );
  }
}

export default TransformersSection;
