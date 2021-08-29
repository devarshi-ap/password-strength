import React from "react";

const CharTags = (props) => {
    let pw = props.password;

    return(
        <div>
            <div id="contains-criteria" className="report-items">Contains:</div>
            <span className={validateLowerCase(pw)} id="lower-case-tag">lower case</span>
            <span className={validateUpperCase(pw)} id="upper-case-tag">upper case</span>
            <span className={validateNumber(pw)} id="numbers-tag">numbers</span>
            <span className={validateSymbol(pw)} id="symbols-tag">symbols</span>
        </div>
    );
}

function validateLowerCase(password) {
    let color = /[a-z]/.test(password) ? 'tag is-primary' : 'tag is-light';
    return color;
}

function validateUpperCase(password) {
    let color = /[A-Z]/.test(password) ? 'tag is-primary' : 'tag is-light';
    return color;
}

function validateNumber(password) {
    let color = /\d/.test(password) ? 'tag is-primary' : 'tag is-light';
    return color;
}

function validateSymbol(password) {
    const symbols = [
        '~', '!', '@', '#', '$', '%', '^', '&', '*',
        '(', ')', '_', '-', '+', '=', '{', '[', '}',
        ']', '|', ':', ';', '<', '>', '.', '?' ,'/'
    ]

    const chars = password.split("");
    
    for(let c of chars) {
        if(symbols.includes(c)) {
            return 'tag is-primary';
        }
    }
    return 'tag is-light';
}

export default CharTags 
