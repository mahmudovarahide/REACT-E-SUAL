import React from 'react'
import Loading from "./image/gif.gif"
import '../../style/style.css'

function Loader() {
  return (
    <div id="loader">
        <div class="position-center-center">
            <img src={Loading} alt="" />
        </div>
    </div>
  )
}
export default Loader
