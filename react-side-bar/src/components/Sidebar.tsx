import React from 'react'
// propsで取得するなら{}で囲む
import { SidebarData } from './SidebarData'
import SidebarIcon  from './SidebarIcon'

function Sidebar() {
  return (
    <div className='Sidebar'>
      <SidebarIcon />
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li 
              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              className="row"
              onClick={()=>{
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
