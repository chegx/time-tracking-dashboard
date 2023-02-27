// assert isn't supported by firefox browser
import data from "./data.json" assert { type: "json" };

const work = data[0].timeframes;
const play = data[1].timeframes;
const study = data[2].timeframes;
const exercise = data[3].timeframes;
const social = data[4].timeframes;
const selfCare = data[5].timeframes;

const workCurrent = document.getElementById("work-current");
const workPrevious = document.getElementById("work-previous");
const playCurrent = document.getElementById("play-current");
const playPrevious = document.getElementById("play-previous");
const studyCurrent = document.getElementById("study-current");
const studyPrevious = document.getElementById("study-previous");
const exerciseCurrent = document.getElementById("exercise-current");
const exercisePrevious = document.getElementById("exercise-previous");
const socialCurrent = document.getElementById("social-current");
const socialPrevious = document.getElementById("social-previous");
const selfCareCurrent = document.getElementById("self-care-current");
const selfCarePrevious = document.getElementById("self-care-previous");

// viewing weekly stats by default
showWeekly();

document.getElementById("btn-daily").onclick = () => {
  showDaily()
};

document.getElementById("btn-weekly").onclick = () => {
  showWeekly()
};

document.getElementById("btn-monthly").onclick = () => {
  showMonthly()
};

function showDaily() {
  workCurrent.textContent = `${work.daily.current}hrs`;
  workPrevious.textContent = `Yesterday - ${work.daily.previous}hrs`;
  playCurrent.textContent = `${play.daily.current}hrs`;
  playPrevious.textContent = `Yesterday - ${play.daily.previous}hrs`;
  studyCurrent.textContent = `${study.daily.current}hrs`;
  studyPrevious.textContent = `Yesterday - ${study.daily.previous}hrs`;
  exerciseCurrent.textContent = `${exercise.daily.current}hrs`;
  exercisePrevious.textContent = `Yesterday - ${exercise.daily.previous}hrs`;
  socialCurrent.textContent = `${social.daily.current}hrs`;
  socialPrevious.textContent = `Yesterday - ${social.daily.previous}hrs`;
  selfCareCurrent.textContent = `${selfCare.daily.current}hrs`;
  selfCarePrevious.textContent = `Yesterday - ${selfCare.daily.previous}hrs`;
}

function showWeekly() {
  workCurrent.textContent = `${work.weekly.current}hrs`;
  workPrevious.textContent = `Last Week - ${work.weekly.previous}hrs`;
  playCurrent.textContent = `${play.weekly.current}hrs`;
  playPrevious.textContent = `Last Week - ${play.weekly.previous}hrs`;
  studyCurrent.textContent = `${study.weekly.current}hrs`;
  studyPrevious.textContent = `Last Week - ${study.weekly.previous}hrs`;
  exerciseCurrent.textContent = `${exercise.weekly.current}hrs`;
  exercisePrevious.textContent = `Last Week - ${exercise.weekly.previous}hrs`;
  socialCurrent.textContent = `${social.weekly.current}hrs`;
  socialPrevious.textContent = `Last Week - ${social.weekly.previous}hrs`;
  selfCareCurrent.textContent = `${selfCare.weekly.current}hrs`;
  selfCarePrevious.textContent = `Last Week - ${selfCare.weekly.previous}hrs`;
}

function showMonthly() {
  workCurrent.textContent = `${work.monthly.current}hrs`;
  workPrevious.textContent = `Last Month - ${work.monthly.previous}hrs`;
  playCurrent.textContent = `${play.monthly.current}hrs`;
  playPrevious.textContent = `Last Month - ${play.monthly.previous}hrs`;
  studyCurrent.textContent = `${study.monthly.current}hrs`;
  studyPrevious.textContent = `Last Month - ${study.monthly.previous}hrs`;
  exerciseCurrent.textContent = `${exercise.monthly.current}hrs`;
  exercisePrevious.textContent = `Last Month - ${exercise.monthly.previous}hrs`;
  socialCurrent.textContent = `${social.monthly.current}hrs`;
  socialPrevious.textContent = `Last Month - ${social.monthly.previous}hrs`;
  selfCareCurrent.textContent = `${selfCare.monthly.current}hrs`;
  selfCarePrevious.textContent = `Last Month - ${selfCare.monthly.previous}hrs`;
}
