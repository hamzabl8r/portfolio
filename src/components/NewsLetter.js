import React from 'react'

function NewsLetter() {
  return (
    <>
      <form  className="NewsForm" action="https://formsubmit.co/hamzabeji001@gmail.com" method='POST'>
          <div className="form-group">
            <label htmlFor="email">NewsLetter </label>
            <input type="email" placeholder='Your Mail' id="email" name="email"  />
            <button type="submit" className="cta-button">Send Message</button>

          </div>
          </form>
    </>
  )
}

export default NewsLetter
