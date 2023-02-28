import logo from './logo.svg';
import React, { useState } from 'react'
import List1 from './image/list1.png'
import List2 from './image/list2.png'
import List3 from './image/list3.png'
import List4 from './image/list4.png'
import List5 from './image/list5.png'
import { GrFormNext } from 'react-icons/gr'
import './App.css';

function App() {
  const [background, setBackground] = useState(true)
  return (
    <frames>
      <div className="header">
        <ul>
          <li className={background ? 'style-header' : ''}>All</li>
          <li>Manpower Supply</li>
          <li>Mobile App / Websites</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
      <div className='product'>
        <div className="list">
          <div className='list-product'>
            <img src={List1} alt='list1' />
            <div className='detail-list'>
              <p>TOI 3D Customize E-commerce</p>
              <GrFormNext style={{ paddingRight: '10px' }} />
            </div>
          </div>
          <div className='list-product'>
            <img src={List2} alt='list1' />
            <div className='detail-list'>
              <p>TOI 3D Customize E-commerce</p>
              <GrFormNext style={{ paddingRight: '10px' }} />
            </div>
          </div>
          <div className='list-product'>
            <img src={List3} alt='list1' />
            <div className='detail-list'>
              <p>TOI 3D Customize E-commerce</p>
              <GrFormNext style={{ paddingRight: '10px' }} />
            </div>
          </div>
        </div>
        <div className="list">
          <div className='list-product'>
            <img src={List4} alt='list1' />
            <div className='detail-list'>
              <p>TOI 3D Customize E-commerce</p>
              <GrFormNext style={{ paddingRight: '10px' }} />
            </div>
          </div>
          <div className='list-product'>
            <img src={List5} alt='list1' />
            <div className='detail-list'>
              <p>TOI 3D Customize E-commerce</p>
              <GrFormNext style={{ paddingRight: '10px' }} />
            </div>
          </div>
        </div>
      </div>

    </frames>
  );
}

export default App;
