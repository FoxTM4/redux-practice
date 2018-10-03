import React from 'react';
import './leftSection.css';

function LeftSection ( props ) {
    return (
        <section className="left--section">
          <select id="bg-color--selector" defaultValue={0}>
            <option value={0}> BG color 1 </option>
            <option value={1}> BG color 2 </option>
            <option value={2}> BG color 3 </option>
            <option value={3}> BG color 4 </option>
            <option value={4}> BG color 5 </option>
          </select>
          <br />
          <select defaultValue={0}>
            <option value={0}> text color 1 </option>
            <option value={1}> text color 2 </option>
            <option value={2}> text color 3 </option>
            <option value={3}> text color 4 </option>
            <option value={4}> text color 5 </option>
          </select>
          <br />
          <select defaultValue={0}>
            <option value={0}> font family 1 </option>
            <option value={1}> font family 2 </option>
            <option value={2}> font family 3 </option>
            <option value={3}> font family 4 </option>
          </select>
        </section>       
    )
}

export default LeftSection;