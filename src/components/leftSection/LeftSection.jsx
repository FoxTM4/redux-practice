import React from 'react';
import './leftSection.css';
import { connect } from 'react-redux';
import { changeBGColor, changeTextColor, changeFont } from '../../ducks/stylesReducer';

function LeftSection ({ backgroundColor, changeBGColor, changeTextColor, textColor, changeFont, fontFamily }) {
    return (
        <section className="left--section" style={{backgroundColor, color: textColor, borderColor: textColor, fontFamily}}>
          <select id="bg-color--selector" onChange={e=>changeBGColor(e.target.value)} defaultValue={4}>
            <option value={0}> BG color 1 </option>
            <option value={1}> BG color 2 </option>
            <option value={2}> BG color 3 </option>
            <option value={3}> BG color 4 </option>
            <option value={4}> BG color 5 </option>
          </select>
          <br />
          <select onChange={e=>changeTextColor(e.target.value)} defaultValue={3}>
            <option value={0}> text color 1 </option>
            <option value={1}> text color 2 </option>
            <option value={2}> text color 3 </option>
            <option value={3}> text color 4 </option>
            <option value={4}> text color 5 </option>
          </select>
          <br />
          <select onChange={e=>changeFont(e.target.value)} defaultValue={0}>
            <option value={0}> font family 1 </option>
            <option value={1}> font family 2 </option>
            <option value={2}> font family 3 </option>
            <option value={3}> font family 4 </option>
          </select>
        </section>       
    )
}

function mapStateToProps ({ backgroundColor, textColor, fontFamily }) {
    return { backgroundColor, textColor, fontFamily }
}
const reduxFunctions = {
    changeBGColor, changeTextColor, changeFont
}

export default connect(mapStateToProps, reduxFunctions)(LeftSection);