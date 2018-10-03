import React from 'react';
import './rightSection.css';
import ChildComponent from '../childComponent/ChildComponent';

function RightSection ( props ) {
    return (
        <section className="right--section">
          <h3> right section </h3>
          <p> Non eram nescius, Brute, cum, quae summis ingeniis exquisitaque doctrina philosophi Graeco sermone tractavissent, ea Latinis litteris mandaremus, fore ut hic noster labor in varias reprehensiones incurreret. </p>
          <ChildComponent />
        </section>
    )
}

export default RightSection;