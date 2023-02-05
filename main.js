///////////////////////////-- SKILLS --///////////////////////////////!SECTION

let skillsJson = '{ "skills" : [' +
'{ "skill":"Latex", "level":"10" },' +
'{ "skill":"Excel", "level":"9.5" },' +
'{ "skill":"Java", "level":"9"},' +
'{ "skill":"Python" , "level":"8.5"},' +
'{ "skill":"GitHub", "level":"7" },' +
'{ "skill":"JavaScript", "level":"6" },' +
'{ "skill":"HTML", "level":"5" },' +
'{ "skill":"C/C++", "level":"5" } ]}';

let { skills } = JSON.parse(skillsJson);

let xValues = [];
let yValues = [];
let barColors = ["rgb(4, 107, 148)", "rgb(0, 214, 57)", "red", "purple", "pink", "rgb(255, 221, 25)", "rgb(255, 153, 0)", "rgb(152, 90, 219)"]
skills.forEach((e) => {
  xValues.push(e.skill);
  yValues.push(e.level);
});

let skillsChart = new Chart("skillsChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {}
});