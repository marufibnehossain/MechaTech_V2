import React from 'react';
import Nav from './Nav';
import PanelDrawer from './PanelDrawer';
import Sideline from './Sideline';
import Subnav from './Subnav';

function Fullnav() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Nav />
      <Subnav setIsOpen={setIsOpen} />
      <PanelDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sideline />
    </div>
  );
}

export default Fullnav;
