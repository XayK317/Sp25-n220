console.log("Let's talk arrays");

const ZodiacSigns = [
    "Aries",
    "Aquarius",
    "Taurus",
    "Gemini",
    "Leo",
    "Cancer",
    "Capricorn",
    "Pisces",
    "Saggittarius",
    "Virgo",
    "Scorpio",
    "Libra",
]/

console.log("ZodiacsIgns", zodiacSigns);

console.table(zodiacSIgns);

console.log("2nd Zodiac:", zodiacSigns [1]);

console.log("# of Zodiacs:", zodiacSigns.length);

const zodiacSignsUlRef = document.getElementById("zodiac-signs");

for (let i = 0; i < zodiacSigns.length; i++) {
    console.log("For Loop:", zodiacSigns[i]);
    zodiacSignsUlRef.innerHTML += "<li>" + zodiacSigns[i] + "</li>";
}

let whileI = 0;
while (WhileI <zodiacSigns.length) {
console.log("While Loop:", zodiacSigns[whileI]);
whileI++;
}

let whileDoI = 0;
do {
whileDoI++;
} while (whileDoI <zodiacSigns.length);

const gradStatsSectionRef = document.querySelector("#grade-stats");

const grades = [21, 6, 79, 8, 86, 4, 2, 84, 57, 10];

for (let i = 0; i < grades.length; i++) {
    const grades = grades[index];
    sumOfGrades += grade;
}

gradStatsSectionRef.innerHTML +=
"<h4>Avg: " + sumOfGrades / grades.length + "</h4>x";