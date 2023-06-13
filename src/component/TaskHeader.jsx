import React from 'react'

export default function TaskHeader(props) {
  return (
      <form className='task-header' onSubmit={props.handleSubmit}>
          <input
              type='text'
              value={props.inputValue}
              onChange={props.handleInputChange}
              placeholder='Enter'
          />
          <input
              type='date'
              value={props.dateValue}
              onChange={props.handleDateChange}
          />
          <select value={props.selectValue} onChange={props.handleSelectChange}>
              <option>Fulfill</option>
              <option>Choose</option>
              <option>Pending</option>
              <option>Reject</option>
          </select>
          <input
              type='text'
              value={props.otherInputValue}
              onChange={props.handleOtherInputChange}
              placeholder='Enter '
          />
          <button type='submit'>Submit</button>
      </form>

  )
}
