import React from "react";
import { FaPlus } from "react-icons/fa"
import PropTypes from "prop-types"
import "./form.css"

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return(
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
      onChange={handleChange}
      value={novaTarefa}
      type="text"
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired
}
