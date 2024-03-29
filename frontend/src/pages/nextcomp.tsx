import React from 'react'

function nextcomp() {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "4%" }}>
  <div className="widget" type="ticket">
    <div className="top">
      <img src="ticket1.jpeg" width="90%" />
      <div className="deetz"></div>
    </div>
    <div className="rip"></div>
    <div className="bottom">
      <div className="bandname">Las Vegas Aviators</div>
      <div className="tourname">OCT 15| SUN | 4:30 PM</div>
      <div className="tourname">
        <small>Las Vegas ,Las Vegas Nalvada</small>
      </div>
      <div className="barcode"></div>
      <a className="buy" href="#">
        Take Flight Collection
      </a>
      <br />
    </div>
  </div>

  <div className="widget" type="ticket" style={{ marginLeft: "20px" }}>
    {/* Add margin to create space between cards */}
    <div className="top">
      <img src="ticket1.jpeg" width="90%" />
      <div className="deetz"></div>
    </div>
    <div className="rip"></div>
    <div className="bottom">
      <div className="bandname">Las Vegas Aviators</div>
      <div className="tourname">OCT 15| SUN | 4:30 PM</div>
      <div style={{marginLeft:"36px",color:"white"}}>
        <small>Las Vegas ,Las Vegas Nalvada</small>
      </div>
      <div className="barcode"></div>
      <a className="buy" href="#">
        Take Flight Collection
      </a>
      <br />
    </div>
  </div>

  <div className="widget" type="ticket" style={{ marginLeft: "20px" }}>
    
    <div className="top">
      <img src="ticket1.jpeg" width="90%" />
      <div className="deetz"></div>
    </div>
    <div className="rip"></div>
    <div className="bottom">
      <div className="bandname">Las Vegas Aviators</div>
      <div className="tourname">OCT 15| SUN | 4:30 PM</div>
      <div className="tourname">
        <small>Las Vegas ,Las Vegas Nalvada</small>
      </div>
      <div className="barcode"></div>
      <a className="buy" href="#">
        Take Flight Collection
      </a>
      <br />
    </div>
  </div>
</div>

      
    </div>
  )
}

export default nextcomp


