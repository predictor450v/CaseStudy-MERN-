// 1. checkSign — if statement
function checkSign(num) {
    if (num > 0) {
        console.log("".concat(num, " is positive"));
    }
    else if (num < 0) {
        console.log("".concat(num, " is negative"));
    }
    else {
        console.log("".concat(num, " is zero"));
    }
}
// 2. evenOrOdd — if...else statement
function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("".concat(num, " is even"));
    }
    else {
        console.log("".concat(num, " is odd"));
    }
}
// 3. getGrade — if...else if...else ladder
function getGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
// 4. provideFeedback — switch statement
function provideFeedback(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent work! Outstanding performance.");
            break;
        case "B":
            console.log("Good job! Above average performance.");
            break;
        case "C":
            console.log("Fair. You met the basic requirements.");
            break;
        case "D":
            console.log("Below average. Consider reviewing the material.");
            break;
        case "F":
            console.log("Did not pass. Please seek additional support.");
            break;
        default:
            console.log("Unknown grade: \"".concat(grade, "\". Please provide a valid grade."));
    }
}
// --- Usage Examples ---
checkSign(10);
checkSign(-3);
checkSign(0);
evenOrOdd(4);
evenOrOdd(7);
var grade = getGrade(85);
console.log("Score 85 -> Grade: ".concat(grade));
provideFeedback(grade);
provideFeedback("F");
provideFeedback("Z");
