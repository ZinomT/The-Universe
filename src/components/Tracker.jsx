import React, {useState} from 'react';
import styled from 'styled-components';
import useScroll from './Scroll.jsx'

function Tracker({title , items = [], callback}) {
  const [open, setOpen] = useState(false);
  const { scrollX, scrollY, scrollDirection } = useScroll();

  return (
    <Current>
    <p>{(scrollX * -1 < 2345) ? null : (((scrollX * -1) - 2345) * 100.00) + ' Kilometers away from Earth.'}</p>
    </Current>
  )
}


const Current = styled.div`
  position: fixed;
  top: -10px;
  left: 30px;
  font-size: 24px;
  color: #FFF;
`;


export default Tracker;