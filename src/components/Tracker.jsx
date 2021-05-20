import React, {useState} from 'react';
import styled from 'styled-components';
import useScroll from './Scroll.jsx'

function Tracker({title , items = [], callback}) {
  const [open, setOpen] = useState(false);
  const { scrollX, scrollY, scrollDirection } = useScroll();

  return (
    <Current>
    <p>{(scrollX * -1 < 2345) ? null : (((scrollX * -1) - 2345) * 100.00) + ' Kilometers'}</p>
    </Current>
  )
}


const Current = styled.div`
  position: fixed;
  top: 0px;
  left: 50px;
`;


export default Tracker;