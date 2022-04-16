import { Avatar } from "@mui/material";
import React from "react";
import SideBareItems from "./items/SideBareItems";
import "../components/css/SideBare.css";

const SideBare = ({ user }) => {
  return (
    <div className="sidebare">
      {user ? <>
        <div className="sidebare__top">
        <div className="sidebare__item">
          <i>
            <Avatar src="" />
          </i>
          <p>{user?.email}</p>
        </div>
        <SideBareItems
          img="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
          title="Find friends"
        />
        <SideBareItems
          img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
          title="Groups"
        />
        <SideBareItems
          img="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
          title="Marketplace"
        />
        <SideBareItems
          img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
          title="Watch"
        />
        <SideBareItems
          img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
          title="Memories"
        />
        <SideBareItems title="See more" />
        <hr></hr>
      </div>
      <div className="sidebare__bottom">
        <h3>Your shourtcuts</h3>
        <div className="shorts">
          <i>
            <Avatar src="https://www.eventer.cc/wp-content/uploads/2019/05/photo-team-success-event-eventer.png"/>
          </i>
          <p>Nice Gorup</p>
        </div>
      </div>
      </> : <>
      <div className="sidebare__top">
        <SideBareItems
          img="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
          title="Find friends"
        />
        <SideBareItems
          img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
          title="Groups"
        />
        <SideBareItems
          img="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
          title="Marketplace"
        />
        <SideBareItems
          img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
          title="Watch"
        />
        <SideBareItems
          img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
          title="Memories"
        />
        <SideBareItems title="See more" />
        <hr></hr>
      </div>
      <div className="sidebare__bottom">
        <h3>Your shourtcuts</h3>
        <div className="shorts">
          <i>
            <Avatar src="https://www.eventer.cc/wp-content/uploads/2019/05/photo-team-success-event-eventer.png"/>
          </i>
          <p>Nice Gorup</p>
        </div>
      </div>
      </>}
    </div>
  );
};

export default SideBare;
