import React from 'react'
import Drawer from './Drawer';
import Navbar from './Navbar';

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Home;
