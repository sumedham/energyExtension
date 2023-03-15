

const api = " https://xx1saw0gee.execute-api.us-east-2.amazonaws.com/dev/carbon?urltocheck=https://circleci.com/blog/deploy-aws-lambda-cdk/";
const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const cases = document.querySelector(".cases");
const recovered = document.querySelector(".recovered");
const deaths = document.querySelector(".deaths");
const results = document.querySelector(".result-container");
results.style.display = "none";
loading.style.display = "none";
errors.textContent = "";
recovered.textContent="";
// grab the form
const form = document.querySelector(".form-data");
// grab the country name

// declare a method to search by country name
async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.url;
  }

const getEnergy = async energy => {
    
  loading.style.display = "block";
  errors.textContent = "";
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var tablink = await getCurrentTab();
  console.log(tablink)
    const BASE_URL = "https://k8xji7gvsa.execute-api.us-east-1.amazonaws.com/carbon?urltocheck="+tablink;
    console.log(BASE_URL)
   try {
    console.log("hey")
    const response = await fetch(BASE_URL, requestOptions);
    const energy = await response.energy;
    console.log(energy)
    const data = await response.json();
    loading.style.display = "none";
    recovered.textContent = JSON.stringify(data.energy);
    results.style.display = "block";
    console.log(JSON.stringify(data.energy));
   } catch (error) {
     errors.textContent = "We have no data for the url you have requested."
   }

};
// declare a function to handle form submission
const handleSubmit = async e => {
  e.preventDefault();
  await getEnergy();
};

form.addEventListener("submit", e => handleSubmit(e));