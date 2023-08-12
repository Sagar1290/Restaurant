import React from 'react'
import './Table.css'

function Table() {
  return (
    <>
      <div className='table-container'>
        <div className='table-header'>
          <div className='dropdown'>
          <button class="dropbtn">Book a table</button>
            <div class="dropdown-content">
              <a href="#">dilevery</a>
              <a href="#">pick up </a>
              <a href="#"></a>
            </div>
          </div>
          <div className='table-form'>
            <form>
              <input />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table