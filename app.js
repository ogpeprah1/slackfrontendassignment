//declaring important variables
const SubmitBtn = document.getElementById("submit-btn");
const inputSection = document.querySelector(".inputSection");
const secondSection = document.querySelector(".secondSection");

//slack name details
const DisplayName = document.querySelector('[data-testid="slackUserName"]');
const DisplayNameInput = document.getElementById("slack-name");

//slack  track details
const DisplayTrackInput = document.querySelector("#my-track-input");
const DisplayTrack = document.querySelector('[data-testid="myTrack"]');

//slack  github url
const DisplayGithubInput = document.querySelector("#github-url");
const DisplayGithubUrl = document.querySelector('[data-testid="githubURL"]');
const GithubField = document.getElementById("githubField");

//slack profile pic
const DisplayImageInput = document.querySelector("#image-btn");

const DisplayImage = document.querySelector(
  '[data-testid="slackDisplayImage"]'
);

//slack current day
const DisplayCurrentDayOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
let currentDate = new Date();
let currentDayOfTheWeek = currentDate.getDay();

//slack UTC Time
const DisplayUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
let currentUTCTime = currentDate.getTime();

SubmitBtn.onclick = (e) => {
  inputSection.style.display = "none";
  secondSection.style.display = "flex";
  DisplayName.textContent = DisplayNameInput.value;
  DisplayTrack.textContent = DisplayTrackInput.value;
  DisplayGithubUrl.textContent = DisplayGithubInput.value;
  DisplayGithubUrl.href = DisplayGithubInput.value;
  console.log(DisplayImageInput.value);
  DisplayUTCTime.textContent = currentUTCTime;

  const selectedImage = DisplayImageInput.files[0];
  console.log(selectedImage);

  if (selectedImage) {
    // Create a FileReader to read the selected image
    const reader = new FileReader();

    reader.onload = function (event) {
      const imageUrl = event.target.result;
      console.log(imageUrl);
      DisplayImage.style.backgroundImage = `url(${imageUrl})`;
    };

    reader.readAsDataURL(selectedImage);
  }

  if (DisplayNameInput.value == "" || DisplayTrackInput.value == "select") {
    alert("Please enter all required");
    inputSection.style.display = "flex";
    secondSection.style.display = "none";
  }

  if (DisplayGithubInput.value == "") {
    GithubField.style.display = "none";
  }

  switch (currentDayOfTheWeek) {
    case 1:
      DisplayCurrentDayOfTheWeek.textContent = "Monday";
      break;
    case 2:
      DisplayCurrentDayOfTheWeek.textContent = "Tuesday";
      break;
    case 3:
      DisplayCurrentDayOfTheWeek.textContent = "Wednesday";
      break;
    case 4:
      DisplayCurrentDayOfTheWeek.textContent = "Thursday";
      break;
    case 5:
      DisplayCurrentDayOfTheWeek.textContent = "Friday";
      break;
    case 6:
      DisplayCurrentDayOfTheWeek.textContent = "Saturday";
      break;
    case 7:
      DisplayCurrentDayOfTheWeek.textContent = "Sunday";
      break;
  }

  e.preventDefault();
};
