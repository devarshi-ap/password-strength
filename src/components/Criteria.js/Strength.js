import React from "react";
import ProgressBar from "./ProgressBar";

const Strength = (props) => {
    const pw = props.password;
    let totalScore = 0;

    let lengthScore = pw.length === 0 ? 0
                    : pw.length < 5 ? 1
                    : pw.length < 10 ? 2 
                    : pw.length < 15 ? 3
                    : pw.length < 20 ? 4 : 5;

    totalScore += lengthScore;

    if (/[A-Z]/.test(pw)) {
        totalScore += 1;
    }

    const symbols = [
        '~', '!', '@', '#', '$', '%', '&', '*',
        '(', ')', '_', '-', '{', '[', '}',
        ']', '|', ':', ';', '<', '>', '.', '?' ,'/'
    ]

    const chars = pw.split("");
    
    for(let c of chars) {
        if(symbols.includes(c)) {
            totalScore += 1;
            break;
        }
    }

    console.log(totalScore);

    const arr = ["very weak", "weak", "moderate", "strong", "very strong", "extremely strong"];
    
    const wordRating = totalScore >= 7 ? "PERFECT!" : arr[(totalScore - 1)];

    return(
        <div id="strength" className="report-items">
            Strength: {wordRating}
            <ProgressBar passwordRating={totalScore*14.2857142857}/>
        </div>
    );
}

export default Strength 
