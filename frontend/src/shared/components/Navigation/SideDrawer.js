import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};



// Portals in React is in the end a concept that allows us to project or render

// a React component in a different place than it normally would be rendered.

// Normally the side drawer would be rendered as part of our main navigation and therefore wherever this main

// navigation is rendered.


  




export default SideDrawer;