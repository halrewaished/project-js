let api = "http://universities.hipolabs.com/search";

async function getData() {
  try {
    let response = await fetch(api);
    let data = await response.json();
    printData(data);
  } catch (e) {
    console.log("Error:", e.massege);
  }
}

function printData(data) {
  let header = document.querySelector("#header");
  let content = document.querySelector("#content");
  header.innerHTML += `
    <select class="form-control" style="margin-top: 50px;" onchange="getUniversity(this.value)">
    <option>Please select country</option>
    ${data.map((universities) => `<option>${universities.name}</option>`)}
    </select>
    `;
}

async function getUniversity(selection) {
  if (selection != "Please select university") {
    let response = await fetch(`${api}?name=${selection}`);
    let data = await response.json();
    content.innerHTML = `
    <h3
    style="
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 30px;
      padding-top: 30px;
    "
  > The university name is :
  <p class="text-justify"
  style="color: rgb(108, 104, 104); font-size: 20px; padding-top: 20px;">${data[0].name}</p>
  </h3>
  <h3
  style="
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 30px;
    padding-top: 30px;
  "
> The country of university is :
<p class="text-justify"
style="color: rgb(108, 104, 104); font-size: 20px; padding-top: 20px;">${data[0].country}</p>
</h3>
        `;
  }
}

window.addEventListener('load', (getData()));
