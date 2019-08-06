import React from 'react'

// <img src="http://static.tvmaze.com/uploads/images/medium_portrait/193/482599.jpg" />

const Program = () => {
  return(
    <div class="ui centered cards">
      <div class="ui card">
        <div class="content">
          <img
            src="http://static.tvmaze.com/uploads/images/original_untouched/193/482599.jpg"
            class="ui rounded image"
            alt=''
          />
          <div class="header">Steve Sanders</div>
          <div class="meta">Friends of Elliot</div>
          <div class="description">
            Steve wants to add you to the group
            <strong>best friends</strong>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <button class="ui green basic button">Approve</button>
            <button class="ui red basic button">Decline</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Program
